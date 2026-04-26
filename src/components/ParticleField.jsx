import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Particles({ count = 5000 }) {
  const points = useRef();
  
  const particles = useMemo(() => {
    const temp = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      temp[i * 3] = (Math.random() - 0.5) * 50;
      temp[i * 3 + 1] = (Math.random() - 0.5) * 50;
      temp[i * 3 + 2] = (Math.random() - 0.5) * 50;
    }
    return temp;
  }, [count]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    for (let i = 0; i < count; i++) {
      // Drift upward slowly
      points.current.geometry.attributes.position.array[i * 3 + 1] += 0.02;
      
      // Reset position if it goes too high
      if (points.current.geometry.attributes.position.array[i * 3 + 1] > 25) {
        points.current.geometry.attributes.position.array[i * 3 + 1] = -25;
      }
    }
    points.current.geometry.attributes.position.needsUpdate = true;
    points.current.rotation.y += 0.001;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#9b5de5"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

const ParticleField = () => {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none opacity-50">
      <Canvas camera={{ position: [0, 0, 20], fov: 75 }}>
        <Particles />
      </Canvas>
    </div>
  );
};

export default ParticleField;
