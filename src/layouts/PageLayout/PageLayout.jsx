import { ModalContextProvider } from '@/contexts/ModalContext'
import Header from '../Header/Header'
import './page-layout.css'

const PageLayout = ({ children, title }) => {
  return (
    // <PageLayoutContextProvider>
    <div className="page-layout container">
      <ModalContextProvider>
        <Header />
        <div className="page-layout__content">
          <h1 className="page-layout__title">{title}</h1>
          {children}
          {/* <Footer /> */}
        </div>
      </ModalContextProvider>
    </div>
    // </PageLayoutContextProvider>
  )
}

export default PageLayout
