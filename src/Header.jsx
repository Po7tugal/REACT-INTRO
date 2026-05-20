import "./Header.css"
import heroImg from './assets/hero.png'

function Header() {
  return (
    <div>
      <logo><img src={heroImg} alt="Hero Vite"></img></logo>
      <nav>
        <a href="/home">HOME</a>
        <a href="/contactos">CONTACTOS</a>
      </nav>
      <div className="clear"></div>
    </div>
  )
}

export default Header
