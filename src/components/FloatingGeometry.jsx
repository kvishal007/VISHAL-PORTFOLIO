import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, MeshWobbleMaterial, Float } from '@react-three/drei';

const FloatingGeometry = ({ position = [0, 0, 0], color = "#00bbf9" }) => {
  const meshRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.x = Math.cos(t / 4) / 4;
    meshRef.current.rotation.y = Math.sin(t / 4) / 4;
    meshRef.current.rotation.z = Math.sin(t / 4) / 4;
    meshRef.current.position.y = position[1] + Math.sin(t / 2) / 2;
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position}>
        <icosahedronGeometry args={[1, 15]} />
        <MeshDistortMaterial
          color={color}
          speed={2}
          distort={0.4}
          radius={1}
        />
      </mesh>
    </Float>
  );
};

export default FloatingGeometry;
