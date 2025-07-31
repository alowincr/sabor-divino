import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import '../App.css'; // Asegúrate de importar el CSS

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo y descripción */}
        <div className="footer-section">
          <h3 className="footer-title">Restaurante Digital</h3>
          <p className="footer-description">Sabores únicos, experiencias inolvidables. Estás en casa.</p>
        </div>

        {/* Navegación */}
        <div className="footer-section">
          <h4 className="footer-subtitle">Navegación</h4>
          <ul className="footer-links">
            <li><a href="/">Inicio</a></li>
            <li><a href="/carta">La Carta</a></li>
            <li><a href="/locales">Conoce nuestros locales</a></li>
            <li><a href="/reservas">Haz tu reserva</a></li>
            <li><a href="/suscripcion">Suscríbete</a></li>
          </ul>
        </div>

        {/* Redes Sociales */}
        <div className="footer-section">
          <h4 className="footer-subtitle">Síguenos</h4>
          <div className="footer-socials">
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © 2025 Restaurante Digital. Todos los derechos reservados.
      </div>
    </footer>
  );
}

export default Footer;
