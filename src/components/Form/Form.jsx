import { useForm } from 'react-hook-form'
// import { PropTypes } from "prop-types";
import Input from '@/components/Input/Input'
import SubmitButton from '@/components/SubmitButton/SubmitButton'
import './form.css'

const Form = ({ config }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm()

  // console.log(errors)
  const { submitFx, inputsConfig } = config
  const onSubmit = handleSubmit((data) => {
    submitFx(data)
  })

  return (
    <form className="form" onSubmit={onSubmit}>
      {inputsConfig.map((inputConfig, i) => (
        <Input
          key={i}
          config={inputConfig}
          register={register}
          errors={errors}
          setValue={setValue}
        />
      ))}
      <SubmitButton label={'Solicitar Activación'} />
    </form>
  )
}

// Form.PropTypes = {
//   config: PropTypes.arrayOf(PropTypes.object)
// }

export default Form
