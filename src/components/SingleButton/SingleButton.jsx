import { useState } from 'react'

import ButtonIcon from '@/components/ButtonIcon/ButtonIcon'
const SingleButton = ({ ico, fx }) => {
  const [isLoading, setIsLoading] = useState(false)

  const handleClick = async (fx) => {
    setIsLoading(true)
    try {
      fx()
    } catch (error) {
      console.error('Error obteniedo datos', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <button
      className="single-button"
      onClick={(e) => {
        e.preventDefault()
        handleClick(fx)
      }}
      disabled={isLoading}
    >
      <ButtonIcon icon={ico} />
    </button>
  )
}

export default SingleButton
