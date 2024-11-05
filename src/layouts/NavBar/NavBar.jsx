import { NavLink, Link } from 'react-router-dom'
import { navBar } from './navbar-config.js'
import './navbar.css'

const NavBar = () => {
  return (
    <nav className="navbar">
      <input type="checkbox" name="" id="navbar__toggle-checkbox" />
      <label
        className="navbar__toggle-label"
        htmlFor="navbar__toggle-checkbox"
      ></label>
      <div className="navbar-container">
        <h3 className="navbar-title">Menú</h3>
        <NavUl ulData={navBar} />
      </div>
    </nav>
  )
}

const closeMenu = () => {
  document.querySelector('#navbar__toggle-checkbox').click()
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
      {navlink ? (
        // aqui deberia mostrarme un navlink
        <label htmlFor={id}>{title}</label>
      ) : (
        <Link to={url} onClick={closeMenu}>
          <label htmlFor={id}>{title}</label>
        </Link>
      )}

      {subitems && (
        <>
          <input id={id} className="navbar_list-check" type="checkbox" />
          <NavUl ulData={subitems} />
        </>
      )}
    </li>
  )
}

export default NavBar
