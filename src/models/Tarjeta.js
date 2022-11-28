import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Tarjeta(props) {
  const { nodes, materials } = useGLTF('./modelosRA/tarjeta3dCompressed.gltf')
  const tarjeta = useRef()

  useFrame(state => {
     const t = state.clock.getElapsedTime()
     tarjeta.current.rotation.x = (1 + Math.sin(t)) / 3
  })

  return (
    <group {...props} dispose={null} scale={0.01} ref={tarjeta}>
      <group rotation={[0,Math.PI/2,Math.PI/2]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tarjeta_final_6.geometry}
          material={materials.diffuse_Red}
        >
          <meshStandardMaterial color={'cyan'} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tarjeta_final_1.geometry}
          material={materials.diffuse_Yellow}
        >
          <meshStandardMaterial
            color={'yellow'}
            metalness={2}
            roughness={0.6}
          />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tarjeta_final_2.geometry}
          material={materials.diffuse_White}
        >
          <meshStandardMaterial color={'white'} metalness={2} roughness={0.6} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tarjeta_final_4.geometry}
          material={materials.diffuse_0}
        >
          <meshStandardMaterial color={'#643fBc'} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tarjeta_final_3.geometry}
          material={materials.diffuse_Aqua}
        >
          <meshStandardMaterial color={'cyan'} metalness={2} roughness={0.6} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tarjeta_final_5.geometry}
          material={materials.diffuse_Lime}
        >
          <meshStandardMaterial
            color={'#151A7b'}
            metalness={2}
            roughness={0.6}
          />
        </mesh>
      </group>
    </group>
  )
}

useGLTF.preload('./modelosRA/tarjeta3dCompressed.gltf')
