import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <main className="home">

      {/* Sección de bienvenida */}
      <section className="bienvenida">
        <img src="/sabor-divino/logo.png" alt="Logo" className="imagen-logo" />
        <h2>Bienvenido a Sabor Divino</h2>
        <p>
          Sabor Divino nació en el 2003, en San Juan de Lurigancho, con la idea de ofrecer comida rica y un ambiente donde todos se sientan cómodos. Hoy ya tenemos cinco locales en Lima, pero seguimos con el mismo cariño de siempre.
        </p>
        <p>
          Aquí todos son bienvenidos. No importa si vienes solo, con tu familia o con amigos: siempre vas a encontrar buena comida y una atención que te hace sentir como en casa.
        </p>
      </section>

      {/* Nuestra propuesta */}
      <section className="propuesta">
        <h2>Nuestra Propuesta</h2>
        <p>
          En Sabor Divino cocinamos con sabor y corazón. Queremos que disfrutes platos peruanos de verdad, hechos al momento, en un ambiente relajado y acogedor. Comida buena, sin complicaciones.
        </p>
      </section>

      {/* La Carta */}
      <section className="carta-seccion">
        <h2>La Carta</h2>
        <p>
          Nuestra cocina tiene lo mejor de la comida limeña. Preparamos desde los clásicos de siempre hasta nuevos sabores que te van a sorprender. Ven y disfruta:
        </p>
        <ul className="carta-lista">
          <li className="item platos">Platos</li>
          <li className="item postres">Postres</li>
          <li className="item bebidas">Bebidas y Cócteles</li>
          <li className="item vinos">Vinos</li>
        </ul>
        <Link to="/carta">
          <button className="ver-carta-btn">Ver Carta Completa</button>
        </Link>
      </section>

      {/* Nuestros Locales */}
      <section className="locales">
        <h2>Nuestros Locales</h2>
        <p>
          Empezamos en San Juan de Lurigancho y ahora también estamos en Miraflores, San Borja, Pueblo Libre y Los Olivos. En todos nuestros locales te espera un ambiente cálido y comida deliciosa.
        </p>
        <Link to="/locales">
          <button className="ver-carta-btn">Conocer locales</button>
        </Link>
      </section>

      {/* Sección de Reservas */}
      <section className="reservas">
        <h2>Reserva tu Mesa en Sabor Divino</h2>
        <p>
          ¿Planeando una reunión familiar, una celebración especial o simplemente quieres asegurar tu lugar en Sabor Divino? ¡Haz tu reserva fácil y rápido con nosotros! En solo unos segundos, podrás garantizar tu mesa y evitar esperas, especialmente si vienes en grupo o en horas punta..
        </p>
        <Link to="/reservas">
          <button className="ver-carta-btn">Reservar ahora</button>
        </Link>
      </section>

      {/* Sección de Suscripción */}
      <section className="suscripcion">
        <h2>¡No te Pierdas Nada!</h2>
        <p>
          Suscríbete y sé el primero en enterarte de nuestras promociones, nuevos platos y más. No hacemos spam, solo cosas buenas.
        </p>
        <Link to="/suscripcion">
          <button className="ver-carta-btn">Suscribirme</button>
        </Link>
      </section>
    </main>
  );
}
