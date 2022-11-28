import { useRef, useState, memo } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useSpring, animated } from '@react-spring/three'
import { PositionalAudio } from '@react-three/drei'

function BoxBeneficios({ onSelect, position, name, onEnded, freezed }) {
  const { nodes, materials } = useGLTF(
    './modelosRA/BoxBeneficiosCompressed.gltf'
  )

  const cubo = useRef()
  const signo1 = useRef()
  const signo2 = useRef()
  const signo3 = useRef()
  const audioPositional = useRef()
  // Hold state for hovered and clicked events
  const [display, setDisplay] = useState(false)

  const { positionTop } = useSpring({
    positionTop: display ? [0, 10, 0] : position,
    config: { mass: 1, tension: 100, friction: 50 }
  })
  const { rotationSide1 } = useSpring({
    rotationSide1: display
      ? [Math.PI / 2, Math.PI / 2, 0]
      : [Math.PI / 2, 0, 0],
    config: { mass: 1, tension: 100, friction: 50 }
  })
  const { positionSide1 } = useSpring({
    positionSide1: display ? [-1.3, 3, -1] : position,
    config: { mass: 1, tension: 100, friction: 50 }
  })
  const { rotationSide2 } = useSpring({
    rotationSide2: display ? [Math.PI, 0, 0] : [Math.PI / 2, 0, 0],
    config: { mass: 1, tension: 100, friction: 50 }
  })
  const { positionSide2 } = useSpring({
    positionSide2: display ? [0, 3.5, 1.2] : position,
    config: { mass: 1, tension: 100, friction: 50 }
  })
  const { rotationSide3 } = useSpring({
    rotationSide3: display
      ? [Math.PI / 2, -Math.PI / 2, 0]
      : [Math.PI / 2, 0, 0],
    config: { mass: 1, tension: 100, friction: 50 }
  })
  const { positionSide3 } = useSpring({
    positionSide3: display ? [2.8, 4, -1.2] : position,
    config: { mass: 1, tension: 100, friction: 50 }
  })
  const { rotationSide4 } = useSpring({
    rotationSide4: display ? [Math.PI, 0, 0] : [Math.PI / 2, 0, 0],
    config: { mass: 1, tension: 100, friction: 50 }
  })
  const { positionSide4 } = useSpring({
    positionSide4: display ? [0.3, -2.5, -10.6] : position,
    config: { mass: 1, tension: 100, friction: 50 }
  })
  const { opacity } = useSpring({
    opacity: display ? 0 : 1,
    delay: 500,
    config: { mass: 10, tension: 500, friction: 250 }
  })

  console.log('BoxBeneficios' + name)
  useFrame(({ clock }) => {
    cubo.current.rotation.z -= 0.03
    if (display === false) {
      const a = clock.getElapsedTime()
      cubo.current.scale.z = 0.014 + 0.002 * Math.sin(a * 3)
      cubo.current.scale.x = 0.014 + 0.002 * Math.sin(a * 3)
      cubo.current.scale.y = 0.014 + 0.002 * Math.sin(a * 3)
    } else if (display === true) {
      signo1.current.scale.z = 0
      signo1.current.scale.x = 0
      signo1.current.scale.y = 0
      signo2.current.scale.z = 0
      signo2.current.scale.x = 0
      signo2.current.scale.y = 0
      signo3.current.scale.z = 0
      signo3.current.scale.x = 0
      signo3.current.scale.y = 0
    }
  })

  // Return the view, these are regular Threejs elements expressed in JSX.
  return (
      <><animated.group
      position={position}
      dispose={null}
      scale={0.015}
      ref={cubo}
      rotation={[Math.PI/2,0,0]}
    >
      <animated.mesh
        castShadow
        receiveShadow
        geometry={nodes.lado1.geometry}
        material={materials.diffuse_Blue}
        //rotation={rotationSide1}
        position={positionSide1}
      >
        <animated.meshStandardMaterial
          color={'cyan'}
          opacity={opacity}
          transparent={true}
          alphaTest={0} />
      </animated.mesh>
      <animated.mesh
        castShadow
        receiveShadow
        geometry={nodes.lado4.geometry}
        material={materials.diffuse_Lime}
        //rotation={rotationSide2}
        position={positionSide2}
      >
        <animated.meshStandardMaterial
          color={'cyan'}
          opacity={opacity}
          transparent={true}
          alphaTest={0} />
      </animated.mesh>
      <animated.mesh
        castShadow
        receiveShadow
        geometry={nodes.lado2.geometry}
        material={materials.diffuse_Blue}
        //rotation={rotationSide3}
        position={positionSide3}
      >
        <animated.meshStandardMaterial
          color={'cyan'}
          opacity={opacity}
          transparent={true}
          alphaTest={0} />
      </animated.mesh>
      <animated.mesh
        castShadow
        receiveShadow
        geometry={nodes.lado3.geometry}
        material={materials.diffuse_Blue}
        //rotation={rotationSide4}
        position={positionSide4}
      >
        <animated.meshStandardMaterial
          color={'cyan'}
          opacity={opacity}
          transparent={true}
          alphaTest={0} />
      </animated.mesh>
      <animated.mesh
        castShadow
        receiveShadow
        geometry={nodes.base.geometry}
        material={materials.Plastic}
        //rotation={[Math.PI / 2, 0, 0]}
        position={position}
      >
        <animated.meshStandardMaterial
          color={'cyan'}
          opacity={opacity}
          transparent={true}
          alphaTest={0} />
      </animated.mesh>
      <animated.mesh
        castShadow
        receiveShadow
        geometry={nodes.tapa.geometry}
        material={materials.Metal}
        //rotation={[Math.PI / 2, 0, 0]}
        position={positionTop}
      >
        <animated.meshStandardMaterial
          color={'cyan'}
          opacity={opacity}
          transparent={true}
          alphaTest={0} />
      </animated.mesh>
      <animated.mesh
        castShadow
        receiveShadow
        geometry={nodes.signo4.geometry}
        material={materials.diffuse_White}
        //rotation={[Math.PI / 2, 0, 0]}
        position={position}
        ref={signo2}
      >
        <animated.meshStandardMaterial
          color={'#643fBc'}
          metalness={2}
          roughness={0.6} />
      </animated.mesh>
      <animated.mesh
        castShadow
        receiveShadow
        geometry={nodes.signo1.geometry}
        material={materials.Gem}
        //rotation={[Math.PI / 2, 0, 0]}
        position={position}
        ref={signo3}
      >
        <animated.meshStandardMaterial
          color={'#643fBc'}
          metalness={2}
          roughness={0.6} />
      </animated.mesh>
      <animated.mesh
        castShadow
        receiveShadow
        geometry={nodes.signo2y3.geometry}
        material={materials.diffuse_0}
        //rotation={[Math.PI / 2, 0, 0]}
        position={position}
        ref={signo1}
      >
        <animated.meshStandardMaterial
          color={'#643fBc'}
          metalness={2}
          roughness={0.6} />
      </animated.mesh>
    </animated.group><PositionalAudio
        loop={false}
        url={'./soundRA/OpenBox.mp3'}
        distance={1}
        onEnded={onEnded}
        ref={audioPositional} /></>
  )
}

useGLTF.preload('./modelosRA/BoxBeneficiosCompressed.gltf')

export default memo(BoxBeneficios)
