import './submit-button.css'

const SubmitButton = ({ label = 'Enviar', disabled = false, onClick }) => {
  return (
    <button
      type="submit"
      disabled={disabled}
      onClick={onClick}
      className="submit-button"
    >
      {label}
    </button>
  )
}

export default SubmitButton
