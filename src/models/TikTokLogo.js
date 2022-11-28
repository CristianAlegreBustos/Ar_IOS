import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { memo } from 'react'

function TikTokLogo({ position, scale }) {
  const { nodes, materials } = useGLTF('/modelosRA/tiktokLogoCompressed.gltf')
  const tiktok = useRef()

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    tiktok.current.rotation.x = Math.cos(t / 20) / 10 - 0.2
    tiktok.current.rotation.y = Math.cos(t / 10) / 4
    tiktok.current.rotation.z = +0.2 + Math.sin(t * 0.5) / 3
  })

  return (
    <group position={position} dispose={null} scale={scale} ref={tiktok}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.logo_tiktok001.geometry}
        material={materials['diffuse_0.001']}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshStandardMaterial color={'#643fBc'} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.logo_tiktok.geometry}
        material={materials['diffuse_Aqua.001']}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshStandardMaterial color={'cyan'} />
      </mesh>
    </group>
  )
}

useGLTF.preload('/modelosRA/tiktokLogoCompressed.gltf')

export default memo(TikTokLogo)
