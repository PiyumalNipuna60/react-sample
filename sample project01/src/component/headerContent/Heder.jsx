import MenuLink from "../MenuLink/MenuLink"
import logo from "../../assets/images.png"
import "./Header.css"


function Heder() {
  return (
    <div className="heading">
       <a className="image">
       <img src={logo} alt="logo" />
       </a>
      <MenuLink linkName="Home" url="#home"/>
      <MenuLink linkName="About" url="#about"/>
      <MenuLink linkName="Contact" url="#contact"/>
      <MenuLink linkName="Login" url="#login"/>
    </div>
  )
}

export default Heder
