import { useForm } from 'react-hook-form'
// import { PropTypes } from "prop-types";
import Input from '@/components/Input/Input'
import './form.css'

const Form = ({ config }) => {
  const { register, handleSubmit } = useForm()

  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })

  return (
    <form className="form" onSubmit={onSubmit}>
      {config.map((inputConfig, i) => (
        <Input key={i} config={inputConfig} register={register} />
      ))}

      <button type="submit">Copiar al portapapeles</button>
    </form>
  )
}

// Form.PropTypes = {
//   config: PropTypes.arrayOf(PropTypes.object)
// }

export default Form
