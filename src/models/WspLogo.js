import React, { useRef, memo } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

function WspLogo({ position, scale }) {
  const { nodes, materials } = useGLTF('/modelosRA/wspLogoCompressed.gltf')
  const wspLogo = useRef()
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    wspLogo.current.rotation.x = Math.cos(t / 20) / 10 - 0.2
    wspLogo.current.rotation.y = Math.cos(t / 10) / 4
    wspLogo.current.rotation.z = +0.15 + Math.sin(t * 0.8) / 3
  })
  return (
    <group position={position} dispose={null} scale={scale} ref={wspLogo}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.logo_whast.geometry}
        material={materials['diffuse_0.001']}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshStandardMaterial color={'#643fBc'} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.logo_whast001.geometry}
        material={materials['diffuse_Aqua.001']}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshStandardMaterial color={'cyan'} />
      </mesh>
    </group>
  )
}

useGLTF.preload('/modelosRA/wspLogoCompressed.gltf')

export default memo(WspLogo)
