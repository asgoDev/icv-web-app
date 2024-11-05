import HeaderLogo from '@/components/HeaderLogo/HeaderLogo'
import NavBar from '@/layouts/NavBar/NavBar'
import './header.css'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className="header container">
      <NavLink to="/">
        <HeaderLogo color={'var(--highlight)'} />
      </NavLink>
      <NavBar />
    </header>
  )
}

export default Header
