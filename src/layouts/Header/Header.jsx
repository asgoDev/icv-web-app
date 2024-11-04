import HeaderLogo from '@/components/HeaderLogo/HeaderLogo'
import NavBar from '@/layouts/NavBar/NavBar'
import './header.css'

const Header = () => {
  return (
    <header className="header container">
      <HeaderLogo color={'var(--highlight)'} />
      <NavBar />
    </header>
  )
}

export default Header
