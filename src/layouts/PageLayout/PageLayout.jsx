import { ModalContextProvider } from '@/contexts/ModalContext'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import './page-layout.css'

const PageLayout = () => {
  return (
    <ModalContextProvider>
      <div className="page-layout container">
        <Header />
        <Outlet />
      </div>
    </ModalContextProvider>
  )
}

export default PageLayout
