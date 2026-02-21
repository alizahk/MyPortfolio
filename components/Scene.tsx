"use client";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Lightformer } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import Band from "./Band";

export default function Scene() {
  return (
    <Canvas 
      gl={{ alpha: true, antialias: true }} 
      camera={{ position: [0, 0, 13], fov: 25 }}
    >
      <ambientLight intensity={1.5} />
      
      <Suspense fallback={null}>
        <Physics interpolate gravity={[0, -40, 0]} timeStep={1 / 60}>
          <Band />
        </Physics>
      </Suspense>

      <Environment>
        <Lightformer intensity={4} color="white" position={[0, -1, 5]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
        <Lightformer intensity={3} color="white" position={[-1, -1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
      </Environment>
    </Canvas>
  );
}