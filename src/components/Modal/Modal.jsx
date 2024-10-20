import { useModalContext } from '@/contexts/ModalContext'
import SingleButton from '@/components/SingleButton/SingleButton'
import './modal.css'

const Modal = () => {
  const { closeModal } = useModalContext()
  return (
    <div className="modal-background">
      <div className="modal-content"></div>
      <SingleButton ico="trash" fx={closeModal} />
    </div>
  )
}

export default Modal
