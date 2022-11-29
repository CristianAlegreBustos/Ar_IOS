import React from 'react'
import { useGLTF } from '@react-three/drei'
import { animated } from '@react-spring/three'

export function BeneficiosFreddo({ scale, position }) {
  const { nodes, materials } = useGLTF(
    './modelosRA/BeneficiosFreddoCompressed.gltf'
  )
  return (
    <animated.group dispose={null} scale={scale} position={position}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['2002'].geometry}
          material={materials.diffuse_Aqua}
        >
          <meshStandardMaterial color={'cyan'} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['2003'].geometry}
          material={materials.diffuse_0}
        >
          <meshStandardMaterial color={'#643fBc'} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['2001'].geometry}
          material={materials.diffuse_White}
        >
          <meshStandardMaterial color={'white'} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['2'].geometry}
          material={materials.diffuse_Yellow}
        >
          <meshStandardMaterial color={'blue'} />
        </mesh>
      </group>
    </animated.group>
  )
}

useGLTF.preload('/BeneficiosFreddoCompressed.gltf')
