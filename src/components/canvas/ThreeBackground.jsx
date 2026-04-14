import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Stars } from '@react-three/drei'

const Blob = ({ position, color, speed, distort }) => {
  const mesh = useRef()
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    mesh.current.rotation.x = Math.cos(t / 3) * 0.3
    mesh.current.rotation.y = Math.sin(t / 3) * 0.3
  })
  return (
    <Float speed={speed} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={mesh} position={position}>
        <sphereGeometry args={[1.2, 64, 64]} />
        <MeshDistortMaterial color={color} speed={distort} distort={0.45} transparent opacity={0.7} />
      </mesh>
    </Float>
  )
}

const ThreeBackground = () => (
  <div className="fixed inset-0 -z-10 pointer-events-none">
    <Canvas camera={{ position: [0, 0, 8], fov: 60 }} dpr={[1, 1.5]}>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 5]} color="#9b5de5" intensity={1.5} />
      <pointLight position={[-10, -10, -5]} color="#00bbf9" intensity={1} />
      <Blob position={[-5, 3, -6]} color="#9b5de5" speed={2} distort={2} />
      <Blob position={[5, -3, -8]} color="#f15bb5" speed={1.5} distort={3} />
      <Blob position={[0, 1, -12]} color="#00bbf9" speed={1} distort={1.5} />
      <Stars radius={80} depth={60} count={3000} factor={4} fade speed={0.5} />
    </Canvas>
  </div>
)

export default ThreeBackground
