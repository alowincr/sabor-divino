import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'

export default function Locales() {
  const [locales, setLocales] = useState([])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    async function fetchLocales() {
      const { data, error } = await supabase.from('locales').select('*')
      if (!error) setLocales(data)
    }
    fetchLocales()
  }, [])

  return (
    <section className="locales">
      <h2>Nuestros Locales</h2>
      <ul>
        {locales.map((local) => (
          <li key={local.id}>
            <strong>{local.nombre}:</strong> {local.direccion} — {local.ciudad}
          </li>
        ))}
      </ul>
    </section>
  )
}
