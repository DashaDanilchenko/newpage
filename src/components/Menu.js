import { NavLink } from "react-router-dom"

const Menu = () => {
  return (<nav>
  <NavLink to="skills">Навички</NavLink>
  <NavLink to="previous work">Попередне місце роботи</NavLink>
  <NavLink to="about">Про мене</NavLink>
  <NavLink to="contacts">Контакти</NavLink> 
  </nav>
  )
}

export default Menu