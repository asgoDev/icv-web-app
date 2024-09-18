import { useForm } from 'react-hook-form'
// import { PropTypes } from "prop-types";
import { Input } from './src/components/Input/Input.jsx'

const Form = ({ formConfig }) => {
  const { register, handleSubmit } = useForm()

  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })

  return (
    <form className="form" onSubmit={onSubmit}>
      {formConfig.map((inputConfig, i) => (
        <Input key={i} config={inputConfig} register={register} />
      ))}

      <button type="submit">Copiar al portapapeles</button>
    </form>
  )
}

// Form.PropTypes = {
//   formConfig: PropTypes.arrayOf(PropTypes.object)
// }

export default Form
