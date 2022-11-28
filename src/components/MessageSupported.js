import Image from 'next/image'
import { useEffect, useState } from 'react'
import Scene from './Scene'
import { ARButton } from '@react-three/xr'
import PepaGift from 'components/realidad-aumentada/assets/PepaVR.gif'
import css from 'components/realidad-aumentada/assets/Ar.module.scss'
import Link from 'next/link'

const MessageSupported = () => {
  const [display, setDisplay] = useState(() => true)
  useEffect(() => {
    let button = document.getElementsByTagName('button')[0]
    button.style.backgroundColor = '#643fBc'
    button.style.color = 'white'
    button.innerHTML = display ? 'Dale PLAY' : 'TERMINAR'
  })

  return (
    <>
      {display && (
        <div id="enter-ar" className={css.div}>
          <div>
            <h2 className={css.info_title}>¡Viví una experiencia aumentada!</h2>
            <p className={css.info_text}>
              Chequeá tu conexión, subí el volumen y permití el uso de la
              cámara.{' '}
            </p>
          </div>
          <div className={css.img}>
            {' '}
            <Image src={PepaGift} alt="PePa escaneando un qr" />
          </div>
          <div className={css.tyc}>
            <Link href="https://www.personalpay.com.ar/terminos-y-condiciones/promociones">
              Ver bases y condiciones de los beneficios
            </Link>
          </div>
        </div>
      )}
      <ARButton id="button" onClick={() => setDisplay(!display)} />

      {!display && <Scene />}
    </>
  )
}

export default MessageSupported
