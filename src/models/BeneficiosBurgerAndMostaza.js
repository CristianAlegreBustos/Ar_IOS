import React from 'react'
import { useGLTF } from '@react-three/drei'
import { animated } from '@react-spring/three'

export function BeneficiosBurgerAndMostaza({ scale, position }) {
  const { nodes, materials } = useGLTF(
    '/modelosRA/BurgerAndMostazaCompressed.gltf'
  )
  return (
    <animated.group dispose={null} scale={scale} position={position}>
      <animated.group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['1_(1)'].geometry}
          material={materials.diffuse_Aqua}
        >
          <meshStandardMaterial color={'cyan'} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['1_(1)002'].geometry}
          material={materials.diffuse_0}
        >
          <meshStandardMaterial color={'#643fBc'} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['1_(1)001'].geometry}
          material={materials.diffuse_White}
        >
          <meshStandardMaterial color={'white'} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['1_(1)003'].geometry}
          material={materials.diffuse_Red}
        >
          <meshStandardMaterial color={'red'} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['1_(1)004'].geometry}
          material={materials.diffuse_Lime}
        >
          <meshStandardMaterial color={'orange'} />
        </mesh>
      </animated.group>
    </animated.group>
  )
}

useGLTF.preload('/modelosRA/BurgerAndMostazaCompressed.gltf')
