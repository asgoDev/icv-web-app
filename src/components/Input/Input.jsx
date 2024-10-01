// import { PropTypes } from 'prop-types'
import './input.css'

const Input = ({ config, register, errors }) => {
  let { label, type = 'text', name, defaultValue, params } = config
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
