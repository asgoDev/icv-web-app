import Header from '../Header/Header'
import Footer from '../Footer/Footer'
const PageLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default PageLayout
