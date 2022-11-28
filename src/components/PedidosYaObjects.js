import { memo, useRef } from 'react'
import { useSpring } from '@react-spring/three'
import BoxBeneficios from '../models/BoxBeneficios'
import { BeneficiosPedidoYa } from '../models/BeneficiosPedidoYa'
import { PositionalAudio } from '@react-three/drei'

const PedidosYaObjects = ({ onSelect, onEnded, freezed }) => {
  const [{ scale }, api] = useSpring(() => ({ scale: 0 }))

  const audioRef = useRef()
  console.log('PedidosYa')
  return (
    <>
      <BoxBeneficios
        freezed={freezed}
        name="PedidosYaObjects"
        position={[-0.3, -0.1, -1.2]}
        onSelect={() => {
          api.start({
            scale: 0.01,
            config: { mass: 1, tension: 100, friction: 50 }
          })

          onSelect()
        }}
        onEnded={() => {
          audioRef.current.play()
        }}
      />
      <BeneficiosPedidoYa scale={scale} position={[-0.33, -0.1, -1.2]} />
      <PositionalAudio
        loop={false}
        url={'./soundRA/audioPedidosYa.mp3'}
        distance={1}
        onEnded={onEnded}
        ref={audioRef}
      />
    </>
  )
}
export default memo(PedidosYaObjects)
