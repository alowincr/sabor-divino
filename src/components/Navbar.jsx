import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">Sabor Divino</h1>
      <ul className="nav-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/carta">La Carta</Link></li>
        <li><Link to="/locales">Locales</Link></li>
        <li><Link to="/reservas">Reservas</Link></li>
        <li><Link to="/suscripcion">Suscríbete</Link></li>
      </ul>
    </nav>
  )
}
