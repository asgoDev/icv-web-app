import { navBar } from './navbar-config.js'
import './navbar.css'

const NavBar = () => {
  return (
    <nav className="nav">
      <input type="checkbox" name="" id="nav__toggle-checkbox" />
      <label className="nav__toggle-label" htmlFor="nav__toggle-checkbox">
        Menu
      </label>
      <div className="navbar-container">
        <h3 className="navbar-title">Menú</h3>
        <NavUl ulData={navBar} />
      </div>
    </nav>
  )
}

const NavUl = ({ ulData }) => {
  return (
    <ul className={`navbar_list`}>
      {ulData.map((li, index) => (
        <NavLi key={index} liData={li} />
      ))}
    </ul>
  )
}

const NavLi = ({ liData }) => {
  const { title, navlink = false, url = '#', subitems = false } = liData
  const id = title.toLowerCase().replace(' ', '-')

  return (
    <li className="navbar_item">
      <label htmlFor={id}>{title}</label>
      <input id={id} className="navbar_list-check" type="checkbox" />
      {subitems && <NavUl ulData={subitems} />}
    </li>
  )
}

export default NavBar
