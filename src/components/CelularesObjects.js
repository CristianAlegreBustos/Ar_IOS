import { memo, useRef } from 'react'
import { useSpring } from '@react-spring/three'
import BoxBeneficios from '../models/BoxBeneficios'
import { BeneficiosCelulares } from '../models/BeneficiosCelulares'
import { PositionalAudio } from '@react-three/drei'

const CelularesObjects = ({ onSelect, onEnded, freezed }) => {
  const [{ scale }, api] = useSpring(() => ({ scale: 0 }))
  const audioRef = useRef()
  console.log('CelularesObjects')
  return (
    <>
      <BoxBeneficios
        freezed={freezed}
        name="CelularesObjects"
        position={[-0.15, 0.4, -1.2]}
        onSelect={() => {
          api.start({ scale: 0.01 })
          onSelect()
        }}
        onEnded={() => {
          audioRef.current.play()
        }}
      />
      <BeneficiosCelulares scale={scale} position={[-0.15, 0.4, -1.2]} />
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

export default memo(CelularesObjects)
