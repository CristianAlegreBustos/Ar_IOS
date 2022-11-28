import { useRef, useEffect } from 'react'
import { memo } from 'react'
import { PositionalAudio } from '@react-three/drei'

const WelcomeText = ({ display }) => {
  const refPositionalAudio = useRef()

  useEffect(() => {
    setTimeout(() => {
      refPositionalAudio.current && refPositionalAudio.current.play()
    }, 3000)
  }, [])

  return (
    <PositionalAudio
      loop={false}
      url="./soundRA/MensajeBienvenida.mp3"
      distance={1}
      ref={refPositionalAudio}
    />
  )
}

export default memo(WelcomeText)
