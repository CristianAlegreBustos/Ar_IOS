import { memo, useRef } from 'react'
import { useSpring } from '@react-spring/three'
import BoxBeneficios from '../models/BoxBeneficios'
import { BeneficiosFreddo } from '../models/BeneficiosFreddo'
import { PositionalAudio } from '@react-three/drei'

const FreddoObjects = ({ onSelect, onEnded, freezed }) => {
  const [{ scale }, api] = useSpring(() => ({ scale: 0 }))
  const audioRef = useRef()
  console.log('FreddoObject')
  return (
    <>
      <BoxBeneficios
        freezed={freezed}
        name="CelularesObjects"
        position={[-0.3, 0.25, -1.2]}
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
      <BeneficiosFreddo scale={scale} position={[-0.33, 0.25, -1.2]} />
      <PositionalAudio
        loop={false}
        url={'./soundRA/audioCelulares.mp3'}
        distance={1}
        onEnded={onEnded}
        ref={audioRef}
      />
    </>
  )
}

export default memo(FreddoObjects)
