import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Carta from './pages/Carta'
import Reservas from './pages/Reservas'
import Locales from './pages/Locales'
import Suscripcion from './pages/Suscripcion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './App.css';

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carta" element={<Carta />} />
        <Route path="/reservas" element={<Reservas />} />
        <Route path="/locales" element={<Locales />} />
        <Route path="/suscripcion" element={<Suscripcion />} />
      </Routes>
      <Footer />
    </HashRouter>
  )
}

export default App