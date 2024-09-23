import { useForm } from 'react-hook-form'
// import { PropTypes } from "prop-types";
import Input from '@/components/Input/Input'
import SubmitButton from '@/components/SubmitButton/SubmitButton'
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

      <SubmitButton label={'Solicitar Activación'} />
    </form>
  )
}

// Form.PropTypes = {
//   config: PropTypes.arrayOf(PropTypes.object)
// }

export default Form
