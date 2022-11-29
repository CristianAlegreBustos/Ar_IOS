import React, { useRef, memo } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

function InstagramLogo({ position, scale }) {
  const { nodes, materials } = useGLTF(
    './modelosRA/instagramLogoCompressed.gltf'
  )

  const igLogo = useRef()

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    igLogo.current.rotation.x = Math.cos(t / 20) / 10 - 0.15
    igLogo.current.rotation.y = Math.cos(t / 10) / 4
    igLogo.current.rotation.z = (+0.3 + Math.sin(t)) / 4
  })
  return (
    <group position={position} scale={scale} dispose={null} ref={igLogo}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.logo_insta001.geometry}
        material={materials['diffuse_0.001']}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshStandardMaterial color={'#643fBc'} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.logo_insta.geometry}
        material={materials['diffuse_Aqua.001']}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshStandardMaterial color={'cyan'} />
      </mesh>
    </group>
  )
}

useGLTF.preload('/modelosRA/instagramLogoCompressed.gltf')

export default memo(InstagramLogo)
