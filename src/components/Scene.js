import { useState } from 'react'
import { PerformanceMonitor } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { XR } from '@react-three/xr'
import MainObjects from './MainObjects'
const Scene = () => {
  const [dpr, setDpr] = useState(1.5)
  return (
    <Canvas id="Canvas" frameloop="demand" dpr={dpr}>
      <PerformanceMonitor
        onIncline={() => setDpr(2)}
        onDecline={() => setDpr(1)}
      >
        <XR referenceSpace="local">
          <ambientLight color={'white'} intensity="1" />
          <pointLight position={[10, 10, 10]} />
          <MainObjects />
        </XR>
      </PerformanceMonitor>
    </Canvas>
  )
}

export default Scene
