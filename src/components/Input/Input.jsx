// import { PropTypes } from 'prop-types'
import { useState } from 'react'
import ButtonIcon from '@/components/ButtonIcon/ButtonIcon'

import './input.css'

const Input = ({ config, register, errors, setValue }) => {
  let { label, type = 'text', name, defaultValue, params, inputFx } = config

  const [isLoading, setIsLoading] = useState(false)

  const handleClick = async (fx) => {
    setIsLoading(true)
    try {
      const fetchData = await fx()
      setValue(name, await fetchData)
    } catch (error) {
      console.error('Error obteniedo datos', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="input-container">
      <label className="input-label" htmlFor={name}>
        <input
          defaultValue={defaultValue}
          className="input"
          name={name}
          type={type}
          placeholder={label}
          {...register(name, {
            required: { value: true, message: 'Campo obligatorio' },
            ...params,
          })}
        />
        {inputFx && (
          <button
            className="input-button"
            onClick={(e) => {
              e.preventDefault()
              handleClick(inputFx.fx)
            }}
            disabled={isLoading}
          >
            <ButtonIcon icon={inputFx.ico} />
          </button>
        )}
      </label>
      {errors[name] && (
        <span className="input__alert-box">{errors[name].message}</span>
      )}
    </div>
  )
}

// Input.propTypes = {
//   config: PropTypes.shape({
//     label: PropTypes.string.isRequired,
//     type: PropTypes.string,
//     name: PropTypes.string.isRequired,
//   }).isRequired,
//   register: PropTypes.func,
// }

export default Input
