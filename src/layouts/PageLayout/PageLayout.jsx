import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './page-layout.css'
const PageLayout = ({ children }) => {
  return (
    <div className="page-layout container">
      <Header />
      <div className="page-layout__content">{children}</div>
      <Footer />
    </div>
  )
}

export default PageLayout
