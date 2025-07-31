import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabaseClient'

export default function Suscripcion() {
  const [formData, setFormData] = useState({ nombre: '', apellido: '', celular: '', correo: '' })

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [])

  const handleSubmit = async e => {
    e.preventDefault()
    const { error } = await supabase.from('suscripciones').insert([formData])
    if (error) alert("Error al suscribirse.")
    else {
      alert("¡Gracias por suscribirte!")
      setFormData({ nombre: '', apellido: '', celular: '', correo: '' })
    }
  }

  return (
    <section className="suscripcion">
      <h2>Suscríbete para recibir novedades</h2>
      <form onSubmit={handleSubmit}>
        <input name="nombre" placeholder="Nombre" value={formData.nombre} onChange={handleChange} required />
        <input name="apellido" placeholder="Apellido" value={formData.apellido} onChange={handleChange} required />
        <input name="celular" placeholder="Celular" value={formData.celular} onChange={handleChange} required />
        <input name="correo" type="email" placeholder="Correo" value={formData.correo} onChange={handleChange} required />
        <button type="submit">Suscribirse</button>
      </form>
    </section>
  )
}
