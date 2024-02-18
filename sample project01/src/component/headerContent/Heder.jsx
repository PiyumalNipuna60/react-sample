import MenuLink from "../MenuLink/MenuLink"
import logo from "../../assets/react.svg"
import "./Header.css"


function Heder() {
  return (
    <div className="heading">
       <img src="vite.svg" alt="logo" />
       <img src={logo} alt="logo" />
       
      <MenuLink linkName="Home" url="#home"/>
      <MenuLink linkName="About" url="#about"/>
      <MenuLink linkName="Contact" url="#contact"/>
      <MenuLink linkName="Login" url="#login"/>
    </div>
  )
}

export default Heder
