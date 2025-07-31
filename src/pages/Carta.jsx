import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function Carta() {
  const [productos, setProductos] = useState([]);
  const categorias = ["plato", "bebida", "postre"];
  const nombresCategorias = {
    plato: "Platos",
    bebida: "Bebidas",
    postre: "Postres"
  };

  useEffect(() => {
    // Desplázate al inicio de la página cuando el componente se monta
    window.scrollTo({ top: 0, behavior: 'smooth' });

    async function fetchProductos() {
      try {
        const { data, error } = await supabase
          .from('productos')
          .select('*') // Selecciona todas las columnas, incluyendo imagen_url
          .order('categoria', { ascending: true })
          .order('nombre', { ascending: true });

        if (error) throw error;

        console.log("Productos obtenidos:", data); // Para depuración

        setProductos(data || []);
      } catch (error) {
        console.error("Error al obtener productos:", error.message);
      }
    }

    fetchProductos();
  }, []); // El array vacío asegura que se ejecute solo una vez al montar el componente

  // Agrupar productos por categoría
  const productosPorCategoria = productos.reduce((acc, producto) => {
    const categoria = producto.categoria || 'Otros'; // Si la categoría es nula, usa 'Otros'
    if (!acc[categoria]) acc[categoria] = [];
    acc[categoria].push(producto);
    return acc;
  }, {});

  return (
    <section className="carta">
      <h2 className="titulo-carta">Nuestra Carta</h2>

      {/* Itera sobre cada categoría de productos */}
      {Object.entries(productosPorCategoria).map(([categoria, productos]) => (
        <div key={categoria} className="categoria-bloque">
          <h3 className="categoria-titulo">
            {/* Muestra el nombre legible de la categoría o la categoría misma */}
            {nombresCategorias[categoria.toLowerCase()] || categoria}
          </h3>

          <div className="productos-grid">
            {/* Itera sobre cada producto dentro de la categoría actual */}
            {productos.map(producto => (
              <div key={producto.id} className="producto-card">
                <h4 className="producto-nombre">{producto.nombre}</h4>
                <p className="producto-desc">{producto.descripcion}</p>

                {/* --- Aquí se agrega la imagen --- */}
                {producto.imagen_url && ( // Solo renderiza la imagen si imagen_url existe
                  <img
                    src={producto.imagen_url} // Usa la URL de Supabase Storage
                    alt={producto.nombre} // Texto alternativo para accesibilidad
                    className="producto-imagen" // Clase para aplicar estilos CSS
                  />
                )}
                {/* ----------------------------- */}

                <p className="producto-precio">
                  S/. {Number(producto.precio).toLocaleString('es-PE', { minimumFractionDigits: 2 })}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}