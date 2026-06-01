/* ===========================================================================================================
 * CIS*3110 Operating Systems - Assignment 02
 * 
 * Name: Alizah Karwani
 * Student Number: 1341659
 * Date: March 1, 2026
 * 
 * Program description: This program acts as a Round Robin CPU scheduler. It reads processes from 
 * an input file (each one has a PID, start time, and burst time, where in this case we were given the file
 * sampleA02.txt), then schedules them using a ready queue and a given time quantum. The program uses 
 * a real-time clock where each second = one time unit, and then presents the output as a log of processes and their info. 
 * If I used any external sources I mentioned them in their respective locations.
 * =========================================================================================================== */

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <sys/stat.h>
#include <time.h>


/* ================================================================================
 * DATA STRUCTURES
 * ================================================================================ */

typedef struct process // represents a single process
{
	char pid[4];
	unsigned int startTime;
	unsigned int lifeTime;
	// i added the two member belows (assignment says we can do this as per requirement)
	unsigned int remainingTime;  // tracks how much burst time the process has left
	int arrived;                 // flag to check if the process has already been added to the ready queue (0 = no, 1 = yes)
} Process;


/* ================================================================================
 * GLOBAL VARIABLES
 * ================================================================================ */

Process* processes = NULL;      // the array to store processes read from the file
int processCount = 0;           // count of total processes, update it after reding file
unsigned int timeQuantum;       // timeQuantum is initialized based on the command line args
time_t programClock;            // the global timer/clock

// ready queue implementation using a circular array
// we need a queue bc round robin puts processes back at the end after their quantum expires
#define MAX_QUEUE 1024
int readyQueue[MAX_QUEUE];      // stores indices into the processes array (not the processes themselves)
int qFront = 0;                 // front of the queue (where dequeue happens)
int qRear  = 0;                 // rear of the queue (where enqueue happens)
int qSize  = 0;                 // how many items are currently in the q

// these track the state of which process is currently running (on hte CPU)
int runningIdx = -1;            // index into processes, -1 means CPU is idle (so nothing running)
unsigned int quantumStart = 0;  // the time at which the current process started its quantum
unsigned int quantumLen   = 0;  // how long the current quantum will last (could be less than timeQuantum if process is almost done)


/* ================================================================================
 * FUNCTION PROTOTYPES (provided signatures - do not change)
 * ================================================================================ */
// i added comment statements to help me understand what the functions are for, but i didnt change the signatures themselves

void logStart(char* pID);       // function to log that a new process is started
void logRun(char* pID);         // function to log that a process is entered into running state
void logEndQuantum(char* pID);  // function to log that a process has finished its time quantum and going back to ready queue
void logFinish(char* pID);      // function to log that a process is finished
void startClock();              // function to strat program clock
long getCurrentTime();          // function to check current time since clock was started
int totalTime();                // the function that gets the total simulation time based on the process list

int scheduler();                // i implemented this function, its controls round robin scheduling logic
int readFile(char* fileName);   // i implemnted this function, it reads the file content and build array of processes

// helper functions i added to help w the ready queue
void enqueue(int index);        // adds a process index to the back of the ready queue
int dequeue(void);              // removes and returns the process index at the front of the ready queue


/* ================================================================================
 * FUNCTION: enqueue
 * adds a process (by its index in the processes array) to the back of the ready queue
 * ================================================================================ */
void enqueue(int index)
{
	readyQueue[qRear] = index;              // put the process index at the back of the queue
	qRear = (qRear + 1) % MAX_QUEUE;       // move the rear pointer forward (wraps back to 0 if it hits the end)
	qSize++;                                // one more item in the queue now
}

/* ================================================================================
 * FUNCTION: dequeue
 * removes and returns the process index from the front of the ready queue
 * ================================================================================ */
int dequeue(void)
{
	int val;
	if (qSize == 0){ 
		return -1;  // nothing to dequeue, return -1
	}

	val = readyQueue[qFront];                // grab the process index at the front of the queue
	qFront = (qFront + 1) % MAX_QUEUE;      // move the front pointer forward (wraps back to 0 if it hits the end)
	qSize--;                                 // one less item in the queue now
	return val; // return the index of the process that was at the front of the queue
}


/* ================================================================================
 * FUNCTION: main
 * Where program starts. it validates command line args, reads the input file,
 * and then starts the clock and runs the main loop which calls the scheduler once every tick
 * ================================================================================ */

int main(int argc, char *argv[])
{
	// step 1: validate command line arguments
	// argc should be 3 bc of: program name, time quantum, and input file name
	if (argc < 3) {
		printf("Error: Missing arguments.\n");
		return 1;
	}

	// step 2: read time quantum from argv[1] and store it in the global variable
	// atoi converts a string to an integer (argv gives us strings, but a num is needed)
	// reference for atoi: https://www.geeksforgeeks.org/c/c-atoi-function/
	timeQuantum = (unsigned int)atoi(argv[1]);

	// step 3: read the input file (argv[2]) and populate the processes array
	// need to do this before startClock() so file reading time doesnt mess up the simulation
	if (readFile(argv[2]) != 0) {
		printf("Error: Could not read input file.\n");
		return 1;
	}

	// step 4: start the clock and run the simulation loop
	// everything below this point is provided code - I have not modified 
	startClock(); // do not remove this line
	time_t currentTime = -1; // do not remove this line

	while (getCurrentTime() <= totalTime())// this loop iterates for the total life of all processes, do not remove this line
	// do not add or change anything in this while loop
	// all your logic must be in the scheduler
	{
		if (getCurrentTime() == currentTime + 1) { // this condition simulates the clock ticks and calls scheduler whenever local clock time progresses by 1
			currentTime++;
			scheduler();
		}
	}

	return 0;
}


/* ================================================================================
 * FUNCTION: readFile
 * opens the input file and reads all the process info into the processes array
 * format per line: pid;startTime;lifeTime 
 * Note: under "Commond Issues" in A2 pdf the prof said the input file is made in windows so it might have \r\n line endings
 * we need to remove those or theyll mess up parsing
 * ================================================================================ */

int readFile(char* fileName)
{
	FILE* fp;
	char line[256];
	int count = 0;

	// step 1: open the file
	fp = fopen(fileName, "r");
	if (fp == NULL) {
		return -1;  // file couldnt be opened
	} 

	// step 2: first pass: count how many valid lines there are
	// we need to know how many processes there are so we can malloc the right amount of space
	while (fgets(line, sizeof(line), fp) != NULL)
	{
		line[strcspn(line, "\r\n")] = '\0';  // remove \r\n (windows) or \n (linux) 
		if (strlen(line) > 0) {
			count++;       // only count non empty lines
		}
	}

	rewind(fp);  // go back to the start of the file for the second pass

	// step 3: allocate array now that we know the size
	processes = (Process*)malloc(sizeof(Process) * (unsigned long)count);
	if (processes == NULL)
	{
		fclose(fp);
		return -1;  // malloc failed
	}
	processCount = 0;

	// step 4: second pass: actually parse each line and store in the array
	while (fgets(line, sizeof(line), fp) != NULL)
	{
		char tmpPid[4];
		unsigned int st, lt;

		line[strcspn(line, "\r\n")] = '\0';  // strip line endings again
		if (strlen(line) == 0) continue;     // skip empty lines

		// sscanf parses the line by splitting on semicolons
		// %3[^;] reads up to 3 chars that arent a semicolon (the pid)
		// then %u reads unsigned ints for startTime and lifeTime
		if (sscanf(line, "%3[^;];%u;%u", tmpPid, &st, &lt) == 3)
		{
			strncpy(processes[processCount].pid, tmpPid, 4);
			processes[processCount].startTime     = st;
			processes[processCount].lifeTime      = lt;
			processes[processCount].remainingTime  = lt;  // at the start, remaining = full lifetime
			processes[processCount].arrived        = 0;   // hasnt arrived yet
			processCount++;
		}
	}

	// step 5: close and return
	fclose(fp);
	return 0;
}


/* ================================================================================
 * PROVIDED LOG FUNCTIONS (do not change)
 * ================================================================================ */

void logStart(char* pID) // invoke this method when you start a process
{
	printf("[%ld] New process with ID %s is arrived.\n", getCurrentTime(), pID);
}

void logFinish(char* pID) // invoke this method when a process is over
{
	printf("[%ld] process with ID %s is finished.\n", getCurrentTime(), pID);
}

void logEndQuantum(char* pID) // invoke this method when a process finishes its time quantum
{
	printf("[%ld] Process with ID %s finished its time quantum.\n", getCurrentTime(), pID);
}

void logRun(char* pID) // invoke this method when a process started its time quantum
{
	printf("[%ld] Process with ID %s started its time quantum.\n", getCurrentTime(), pID);
}


/* ================================================================================
 * PROVIDED FUNCTION: totalTime (do not change)
 * computes total simulation time based on process list
 * ================================================================================ */

int totalTime(void)
{
	int largestTime = 0;
	int k;
	for (k = 0; k < processCount; k++)
	{
		if (processes[k].lifeTime + processes[k].startTime > (unsigned int)largestTime + processes[k].lifeTime)
			largestTime = (int)(processes[k].lifeTime + processes[k].startTime);
		else
			largestTime += (int)processes[k].lifeTime;
	}
	return largestTime;
}


/* ================================================================================
 * FUNCTION: scheduler
 * this func is the round robin scheduling logic, called once per clock tick
 * 
 * order of operations each tick:
 *   1. if a process is running and its quantum/burst just ended, handle it
 *      (either its done entirely, or it goes back to the ready queue)
 *   2. check if any new processes have arrived at this time and add them to the queue
 *   3. if CPU is idle and theres something in the q, start the next process
 * 
 * important rule from the assignment: when a process returns from running and a new
 * process arrives at the same tme, the returning process goes first in the queue
 * (thats why step 1 enqueues before step 2)
 * ================================================================================ */

int scheduler(void)
{
	long now = getCurrentTime();
	unsigned int elapsed;
	int i;

	// step 1: handle the currently running process (if there is one)
	if (runningIdx != -1)
	{
		// check how long the current process has been running this quantum
		elapsed = (unsigned int)now - quantumStart;

		if (elapsed >= quantumLen)  // quantum/burst is up
		{
			if (processes[runningIdx].remainingTime <= timeQuantum)
			{
				// the process has no more burst time left, so its completely done
				processes[runningIdx].remainingTime = 0;
				logFinish(processes[runningIdx].pid);
			}
			else
			{
				// process still has work left but its quantum expired
				// subtract the quantum from remaining time and put it back in the queue
				processes[runningIdx].remainingTime -= timeQuantum;
				logEndQuantum(processes[runningIdx].pid);
				enqueue(runningIdx);  // goes back to the end of the ready queue
			}
			runningIdx = -1;  // CPU is now idle
		}
	}

	// step 2: check for newly arrived processes
	// the input file is already sorted by PID, so lower numbered processes
	// naturally get added to the queue first (which is what the assignment wants)
	for (i = 0; i < processCount; i++)
	{
		if (processes[i].arrived == 0 && processes[i].startTime == (unsigned int)now)
		{
			processes[i].arrived = 1;  // mark as arrived so we dont add it again
			logStart(processes[i].pid);
			enqueue(i);
		}
	}

	// step 3: if CPU is idle and theres something in the q, start the next process
	if (runningIdx == -1 && qSize > 0)
	{
		runningIdx   = dequeue();           // grab the next process from the front of the queue
		quantumStart = (unsigned int)now;   // record when this quantum started

		// the process runs for whichever is smaller:
		// the full time quantum, or however much burst time it has left
		// e.g. if theres a case where th quantum is 4 but process only needs 2 more seconds, it only runs for 2
		if (processes[runningIdx].remainingTime < timeQuantum)
			quantumLen = processes[runningIdx].remainingTime;
		else
			quantumLen = timeQuantum;

		logRun(processes[runningIdx].pid);
	}

	return 0;
}


/* ================================================================================
 * PROVIDED CLOCK FUNCTIONS (do not change)
 * ================================================================================ */

void startClock(void) // do not change any code in this function
{
	programClock = time(NULL);
}

long getCurrentTime(void) // invoke this method whenever you want to check how much time units passed since you invoked startClock()
{
	time_t now;
	now = time(NULL);
	return now - programClock;
}