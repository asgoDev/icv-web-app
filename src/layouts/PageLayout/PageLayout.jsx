import { Outlet } from 'react-router-dom'
import { ModalContextProvider } from '@/contexts/ModalContext'
import Header from '../Header/Header'
// import Footer from '../Footer/Footer'
import './page-layout.css'

const PageLayout = () => {
  return (
    <div className="page-layout container">
      <ModalContextProvider>
        <Header />
        <div className="page-layout__content">
          <Outlet />
        </div>
        {/* <Footer /> */}
      </ModalContextProvider>
    </div>
  )
}

export default PageLayout
