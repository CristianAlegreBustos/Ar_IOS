import MessageNotSupported from './MessageNotSupported.js'
import MessageSupported from './MessageSupported.js'
import { useEffect, useState } from 'react'

const Info = ({ data }) => {
  const [isSupported, setSupported] = useState(true)
  useEffect(() => {
    navigator.xr &&
      navigator.xr
        .isSessionSupported('immersive-ar')
        .then(value => setSupported(value))

    !navigator.xr && setSupported(false)
  }, [])
  return (
    <div>
      {!isSupported && <MessageNotSupported />}
      {isSupported && <MessageSupported />}
    </div>
  )
}

export default Info
