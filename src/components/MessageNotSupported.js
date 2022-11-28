//import css from 'src/Root.scss'
import css from 'components/realidad-aumentada/assets/Ar.module.scss'
const MessageNotSupported = () => {
  return (
    <div className={css.div}>
      <h2 className={css.info_title}>Realidad Aumentada no Soportada</h2>
      <p className={css.info_text}>
        Tu navegador no soporta Realidad aumentada, pero quedate cerca que en
        breve vamos a tener mas sorpresas para vos
      </p>
    </div>
  )
}

export default MessageNotSupported
