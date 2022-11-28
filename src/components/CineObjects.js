import { memo, useRef } from 'react'
import { useSpring } from '@react-spring/three'
import BoxBeneficios from '../models/BoxBeneficios'
import { BeneficiosCinemarkHoyts } from '../models/BeneficiosCinemarkHoyts'
import { PositionalAudio } from '@react-three/drei'

const CineObjects = ({ onSelect, onEnded, freezed }) => {
  const [{ scale }, api] = useSpring(() => ({ scale: 0 }))
  const audioRef = useRef()
  console.log('CineObjects')
  return (
    <>
      <BoxBeneficios
        freezed={freezed}
        name="CineObject"
        position={[0.25, -0.11, -1.2]}
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
      <BeneficiosCinemarkHoyts scale={scale} position={[0.28, -0.16, -1.2]} />
      <PositionalAudio
        loop={false}
        url={'./soundRA/AudiosCine.mp3'}
        distance={1}
        onEnded={onEnded}
        ref={audioRef}
      />
    </>
  )
}
export default memo(CineObjects)
