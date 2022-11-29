import React from 'react'
import { useGLTF } from '@react-three/drei'
import { animated } from '@react-spring/three'

export function BeneficiosPedidoYa({ scale, position, opacity }) {
  const { nodes, materials } = useGLTF(
    './modelosRA/BeneficiosPedidosYaCompressed.gltf'
  )
  return (
    <animated.group dispose={null} scale={scale} position={position}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.card_benefit_2003.geometry}
          material={materials.diffuse_Aqua}
        >
          <meshStandardMaterial color={'cyan'} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.card_benefit_2002.geometry}
          material={materials.diffuse_Red}
        >
          <meshStandardMaterial color={'red'} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.card_benefit_2001.geometry}
          material={materials.diffuse_0}
        >
          <meshStandardMaterial color={'#643fBc'} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.card_benefit_2.geometry}
          material={materials.diffuse_White}
        >
          <meshStandardMaterial color={'white'} />
        </mesh>
      </group>
    </animated.group>
  )
}

useGLTF.preload('/modelosRA/BeneficiosPedidosYaCompressed.gltf')
