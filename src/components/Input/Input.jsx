// import { PropTypes } from 'prop-types'
import '../styles/input.css'

const Input = ({ config, register }) => {
  let { label, type = 'text', name } = config
  return (
    // <label className='form-input_label'>
    <input
      className="form-input"
      name={name}
      type={type}
      placeholder={label}
      {...register(name)}
    />
    // </label>
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
