// import Text from './Text.js'
import { animated, useSpring } from '@react-spring/three'
import InstagramLogo from '../models/InstagramLogo.js'
import TikTokLogo from '../models/TikTokLogo.js'
import WspLogo from '../models/WspLogo.js'
import { memo, useRef, useEffect } from 'react'
import { PositionalAudio } from '@react-three/drei'

const FinalText = ({ display }) => {
  const { scale } = useSpring({ scale: display ? 1 : 0, delay: 1100 })
  const refPositionalAudio = useRef()

  console.log('Finalt Text')

  useEffect(() => {
    setTimeout(() => {
      display === true &&
        refPositionalAudio.current &&
        refPositionalAudio.current.play()
    }, 1800)
  }, [display])

  return (
    <animated.group scale={scale}>
      {display && (
        <PositionalAudio
          loop={false}
          url="./soundRA/mensajeFinal.mp3"
          distance={1}
          ref={refPositionalAudio}
        />
      )}
     
        <WspLogo scale={0.01} position={[-0.16, -0.2, -1]} />
      
     
        <InstagramLogo scale={0.01} position={[-0, -0.2, -1]} />

        <TikTokLogo scale={0.01} position={[0.16, -0.2, -1]} />

    </animated.group>
  )
}

export default memo(FinalText)
