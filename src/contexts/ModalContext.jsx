import { createContext, useContext, useState } from 'react'
import Modal from '@/components/Modal/Modal'

const ModalContext = createContext()

const useModalContext = () => useContext(ModalContext)

const ModalContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [modalContent, setModalContent] = useState(null)

  const openModal = (component = null) => {
    setIsOpen(true)
    setModalContent(component)
  }
  const closeModal = () => {
    setIsOpen(false)
    setModalContent(null)
  }

  return (
    <ModalContext.Provider
      value={{ modal: 'soy el context de modales', openModal, closeModal }}
    >
      {children}
      {isOpen && <Modal>{modalContent}</Modal>}
    </ModalContext.Provider>
  )
}

export { useModalContext, ModalContextProvider }
