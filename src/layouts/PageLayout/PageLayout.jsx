import { ModalContextProvider } from '@/contexts/ModalContext'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import './page-layout.css'

const PageLayout = () => {
  return (
    // <PageLayoutContextProvider>
    <div className="page-layout container">
      <ModalContextProvider>
        <Header />
        <Outlet />
      </ModalContextProvider>
    </div>
    // </PageLayoutContextProvider>
  )
}

export default PageLayout
