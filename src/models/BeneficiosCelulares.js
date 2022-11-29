import React from 'react'
import { useGLTF } from '@react-three/drei'
import { animated } from '@react-spring/three'

export function BeneficiosCelulares({ scale, position }) {
  const { nodes, materials } = useGLTF('./modelosRA/BeneficiosCelulares.gltf')
  return (
    <animated.group dispose={null} scale={scale} position={position}>
      <group rotation={[Math.PI, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.card_celu_1.geometry}
          material={materials.diffuse_Black}
        >
          <meshStandardMaterial color={'white'} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.card_celu_2.geometry}
          material={materials.diffuse_Red}
        >
          <meshStandardMaterial color={'red'} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.card_celu_3.geometry}
          material={materials.diffuse_White}
        >
          <meshStandardMaterial color={'black'} />
        </mesh>
      </group>
    </animated.group>
  )
}

useGLTF.preload('/modelosRA/BeneficiosCelularesCompressed.gltf')
