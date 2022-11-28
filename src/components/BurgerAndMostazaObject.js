import { memo, useRef } from 'react'
import { useSpring } from '@react-spring/three'
import BoxBeneficios from '../models/BoxBeneficios'
import { BeneficiosBurgerAndMostaza } from '../models/BeneficiosBurgerAndMostaza'
import { PositionalAudio } from '@react-three/drei'

const BurgerAndMostazaObject = ({ onSelect, onEnded, freezed }) => {
  const [{ scale }, api] = useSpring(() => ({ scale: 0 }))
  const audioRef = useRef()
  console.log('BurgerAndMostazaObject')
  return (
    <>
      <BoxBeneficios
        freezed={freezed}
        name="BurgerAndMostazaObject"
        position={[0.25, 0.25, -1.2]}
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
      <BeneficiosBurgerAndMostaza scale={scale} position={[0.28, 0.25, -1.2]} />
      <PositionalAudio
        loop={false}
        url={'./soundRA/audioMostazaYburgerKing.mp3'}
        distance={1}
        onEnded={onEnded}
        ref={audioRef}
      />
    </>
  )
}

export default memo(BurgerAndMostazaObject)
