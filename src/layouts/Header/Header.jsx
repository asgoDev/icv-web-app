import HeaderLogo from '@/components/HeaderLogo/HeaderLogo'
import './header.css'

const Header = () => {
  return (
    <header className="header container">
      <HeaderLogo color={'var(--highlight)'} />
    </header>
  )
}

export default Header
