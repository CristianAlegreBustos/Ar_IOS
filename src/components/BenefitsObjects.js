import { memo, useCallback, useState } from 'react'
import BurgerAndMostazaObject from './BurgerAndMostazaObject.js'
import CineObjects from './CineObjects.js'
import FreddoObjects from './FreddoObjects .js'
import PedidosYaObjects from './PedidosYaObjects.js'

const BenefitsObjects = ({ handleClick }) => {
  const [playing, setPlaying] = useState(false)
  const openBenefits = useCallback(() => {
    if (!playing) {
      handleClick()
      setPlaying(true)
    }
  }, [handleClick, playing])

  const onEnded = () => {
    setPlaying(false)
  }
  return (
    <>
      <BurgerAndMostazaObject
        freezed={playing}
        onSelect={openBenefits}
        onEnded={onEnded}
      />
      <FreddoObjects
        freezed={playing}
        onSelect={openBenefits}
        onEnded={onEnded}
      />
      <CineObjects
        freezed={playing}
        onSelect={openBenefits}
        onEnded={onEnded}
      />
      <PedidosYaObjects
        freezed={playing}
        onSelect={openBenefits}
        onEnded={onEnded}
      />
    </>
  )
}

export default memo(BenefitsObjects)
