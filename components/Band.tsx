"use client";
import * as THREE from "three";
import { useRef, useState, useMemo } from "react";
import { extend, useThree, useFrame } from "@react-three/fiber";
import { useGLTF, useTexture } from "@react-three/drei";
import { BallCollider, CuboidCollider, RigidBody, useRopeJoint, useSphericalJoint } from "@react-three/rapier";
import { MeshLineGeometry, MeshLineMaterial } from "meshline";

extend({ MeshLineGeometry, MeshLineMaterial });

export default function Band() {
  const band = useRef<any>(null), fixed = useRef<any>(null), j1 = useRef<any>(null), j2 = useRef<any>(null), j3 = useRef<any>(null), card = useRef<any>(null);
  const vec = new THREE.Vector3(), dir = new THREE.Vector3();
  const { width, height } = useThree((state) => state.size);
  const [curve] = useState(() => new THREE.CatmullRomCurve3([new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()]));
  const [dragged, drag] = useState<any>(false);

  const { nodes, materials } = useGLTF("https://assets.vercel.com/image/upload/contentful/image/e5382hct74si/5huRVDzcoDwnbgrKUo1Lzs/53b6dd7d6b4ffcdbd338fa60265949e1/tag.glb") as any;
  const lanyardTexture = useTexture("https://assets.vercel.com/image/upload/contentful/image/e5382hct74si/SOT1hmCesOHxEYxL7vkoZ/c57b29c85912047c414311723320c16b/band.jpg");
  
  const cardFront = useTexture("/front.png");
  const cardBack = useTexture("/front.png");

  useMemo(() => {
    [cardFront, cardBack].forEach((tex) => {
      tex.wrapS = tex.wrapT = THREE.ClampToEdgeWrapping;
      tex.repeat.set(1, 1);
      tex.offset.set(0, 0);
      tex.flipY = false;
    });
  }, [cardFront, cardBack]);

  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1]);
  useSphericalJoint(j3, card, [[0, 0, 0], [0, 0.8, 0]]);

  useFrame((state) => {
    if (dragged) {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
      dir.copy(vec).sub(state.camera.position).normalize();
      vec.add(dir.multiplyScalar(state.camera.position.length()));
      [card, j1, j2, j3, fixed].forEach((ref) => ref.current?.wakeUp());
      card.current?.setNextKinematicTranslation({ x: vec.x - dragged.x, y: vec.y - dragged.y, z: vec.z - dragged.z });
    }
    if (fixed.current && band.current?.geometry && j3.current && j2.current && j1.current) {
      const p0 = j3.current.translation();
      const p1 = j2.current.translation();
      const p2 = j1.current.translation();
      const p3 = fixed.current.translation();
      curve.points[0].copy(p0);
      curve.points[1].copy(p1);
      curve.points[2].copy(p2);
      curve.points[3].copy(p3);
      band.current.geometry.setPoints(curve.getPoints(32));
    }
  });

  return (
    <>
      <group position={[0.8, 4.5, 0]}>
        <RigidBody ref={fixed} type="fixed" />
        <RigidBody position={[0.5, 0, 0]} ref={j1} linearDamping={3}><BallCollider args={[0.1]} /></RigidBody>
        <RigidBody position={[1, 0, 0]} ref={j2} linearDamping={3}><BallCollider args={[0.1]} /></RigidBody>
        <RigidBody position={[1.5, 0, 0]} ref={j3} linearDamping={10} angularDamping={10}><BallCollider args={[0.15]} /></RigidBody>
        <RigidBody ref={card} type={dragged ? "kinematicPosition" : "dynamic"} linearDamping={6} angularDamping={6}>
          <CuboidCollider args={[0.8, 1.125, 0.01]} />
          <group scale={1.2} position={[0, -0.683, -0.05]}
            onPointerDown={(e: any) => { e.target.setPointerCapture(e.pointerId); drag(new THREE.Vector3().copy(e.point).sub(vec.copy(card.current.translation()))); }}
            onPointerUp={(e: any) => { e.target.releasePointerCapture(e.pointerId); drag(false); }}>
            {/* Front face */}
            <mesh position={[0, 0, 0.001]}>
              <planeGeometry args={[1.6, 2.25]} />
              <meshPhysicalMaterial map={cardFront} clearcoat={1} roughness={0.3} />
            </mesh>

            {/* Back face */}
            <mesh position={[0, 0, -0.001]} rotation={[0, Math.PI, 0]}>
              <planeGeometry args={[0.8 * 2, 1.125 * 2]} />
              <meshPhysicalMaterial map={cardBack} clearcoat={1} roughness={0.3} />
            </mesh>

            {/* Metal clip and clamp from GLB */}
            <mesh geometry={nodes.clip.geometry} material={materials.metal} />
            <mesh geometry={nodes.clamp.geometry} material={materials.metal} />
          </group>
        </RigidBody>
      </group>

      <mesh ref={band}>
        {/* @ts-ignore */}
        <meshLineGeometry />
        {/* @ts-ignore */}
        <meshLineMaterial color="white" depthTest={false} resolution={[width, height]} useMap map={lanyardTexture} repeat={[-3, 1]} lineWidth={1} />
      </mesh>
    </>
  );
}