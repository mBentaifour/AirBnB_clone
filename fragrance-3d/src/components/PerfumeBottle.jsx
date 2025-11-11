import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function PerfumeBottle({ position = [0, 0, 0], scale = 1, color = "#8B0000", autoRotate = true }) {
  const bottleRef = useRef()
  const capRef = useRef()

  useFrame((state) => {
    if (autoRotate && bottleRef.current) {
      bottleRef.current.rotation.y += 0.005
      capRef.current.rotation.y += 0.005
    }
  })

  return (
    <group position={position} scale={scale}>
      <group ref={bottleRef}>
        <mesh castShadow receiveShadow position={[0, 0, 0]}>
          <cylinderGeometry args={[0.8, 0.6, 2.5, 32]} />
          <meshPhysicalMaterial
            color={color}
            transparent
            opacity={0.85}
            roughness={0.1}
            metalness={0.1}
            clearcoat={1}
            clearcoatRoughness={0.1}
            transmission={0.3}
            thickness={0.5}
          />
        </mesh>

        <mesh castShadow receiveShadow position={[0, 0.3, 0]}>
          <boxGeometry args={[1.2, 2, 0.4]} />
          <meshPhysicalMaterial
            color={color}
            transparent
            opacity={0.85}
            roughness={0.1}
            metalness={0.1}
            clearcoat={1}
            clearcoatRoughness={0.1}
            transmission={0.3}
            thickness={0.5}
          />
        </mesh>

        <mesh castShadow position={[0, 0, 0.25]}>
          <planeGeometry args={[0.6, 1.2]} />
          <meshStandardMaterial
            color="#f5e6d3"
            roughness={0.8}
            metalness={0.1}
          />
        </mesh>
      </group>

      <group ref={capRef}>
        <mesh castShadow receiveShadow position={[0, 1.6, 0]}>
          <cylinderGeometry args={[0.5, 0.5, 0.4, 32]} />
          <meshStandardMaterial
            color="#d4af37"
            roughness={0.2}
            metalness={0.9}
          />
        </mesh>

        <mesh castShadow receiveShadow position={[0, 1.9, 0]}>
          <cylinderGeometry args={[0.6, 0.5, 0.2, 32]} />
          <meshStandardMaterial
            color="#d4af37"
            roughness={0.2}
            metalness={0.9}
          />
        </mesh>

        <mesh castShadow receiveShadow position={[0, 2.1, 0]}>
          <sphereGeometry args={[0.4, 32, 32]} />
          <meshStandardMaterial
            color="#d4af37"
            roughness={0.2}
            metalness={0.9}
          />
        </mesh>
      </group>

      <pointLight position={[2, 2, 2]} intensity={0.5} color="#ff6b6b" />
      <pointLight position={[-2, 2, -2]} intensity={0.3} color="#dc2626" />
    </group>
  )
}
