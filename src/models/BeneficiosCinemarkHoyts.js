import React from 'react'
import { useGLTF } from '@react-three/drei'
import { animated } from '@react-spring/three'

export function BeneficiosCinemarkHoyts({ scale, position }) {
  const { nodes, materials } = useGLTF(
    './modelosRA/BeneficiosCinemarkHoytsCompressed.gltf'
  )

  return (
    <animated.group dispose={null} scale={scale} position={position}>
      <animated.group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['3_(2)003'].geometry}
          material={materials.diffuse_Yellow}
        >
          <meshStandardMaterial color={'black'} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['3_(2)004'].geometry}
          material={materials.diffuse_Aqua}
        >
          <meshStandardMaterial color={'cyan'} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['3_(2)002'].geometry}
          material={materials.diffuse_Red}
        >
          <meshStandardMaterial color={'red'} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['3_(2)001'].geometry}
          material={materials.diffuse_0}
        >
          <meshStandardMaterial color={'#643fBc'} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['3_(2)'].geometry}
          material={materials.diffuse_White}
        >
          <meshStandardMaterial color={'white'} />
        </mesh>
      </animated.group>
    </animated.group>
  )
}

useGLTF.preload('/modelosRA/BeneficiosCinemarkHoytsCompressed.gltf')
