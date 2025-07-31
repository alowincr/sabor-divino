import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabaseClient'

export default function Reservas() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    celular: '',
    correo: '',
    fecha: '',
    hora: '',
    personas: ''
  })

  // 🚀 Agregar este useEffect para scroll al top
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const { error } = await supabase.from('reservas').insert([{
      ...formData,
      personas: parseInt(formData.personas)
    }])
    if (error) {
      alert("Error al guardar la reserva.")
      console.error("Error al insertar en Supabase:", error.message)
    } else {
      alert("Reserva enviada correctamente ✅")
      setFormData({
        nombre: '', apellido: '', celular: '', correo: '',
        fecha: '', hora: '', personas: ''
      })
    }
  }

  return (
    <section className="reservas">
      <h2>Reserva tu mesa</h2>
      <form onSubmit={handleSubmit}>
        <input name="nombre" placeholder="Nombre" value={formData.nombre} onChange={handleChange} required />
        <input name="apellido" placeholder="Apellido" value={formData.apellido} onChange={handleChange} required />
        <input name="celular" placeholder="Celular" value={formData.celular} onChange={handleChange} required />
        <input name="correo" type="email" placeholder="Correo" value={formData.correo} onChange={handleChange} required />
        <input name="fecha" type="date" value={formData.fecha} onChange={handleChange} required />
        <input name="hora" type="time" value={formData.hora} onChange={handleChange} required />
        <input name="personas" type="number" placeholder="Nº de personas" value={formData.personas} onChange={handleChange} required />
        <button type="submit">Reservar</button>
      </form>
    </section>
  )
}