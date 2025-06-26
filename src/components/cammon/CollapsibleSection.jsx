import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react'; // Iconos para indicar el estado de plegado/desplegado

/**
 * Componente reutilizable para una sección plegable.
 * @param {object} props - Propiedades del componente.
 * @param {string} props.title - Título de la sección.
 * @param {React.ReactNode} props.children - Contenido a mostrar dentro de la sección.
 * @param {boolean} [props.defaultOpen=false] - Si la sección debe estar abierta por defecto.
 */
const CollapsibleSection = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen); // Estado para controlar si la sección está abierta o cerrada

  // Función para alternar el estado de apertura/cierre
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-gray-50 p-4 rounded-xl shadow-sm mb-6 border border-gray-200">
      {/* Botón que actúa como encabezado de la sección y controla el plegado */}
      <button
        type="button"
        className="flex justify-between items-center w-full text-left text-lg font-semibold text-gray-800 focus:outline-none py-2"
        onClick={toggleOpen}
      >
        {title} {/* Título de la sección */}
        {/* Icono que cambia según el estado (flecha hacia arriba si está abierta, hacia abajo si está cerrada) */}
        {isOpen ? <ChevronUp className="w-5 h-5 text-gray-600" /> : <ChevronDown className="w-5 h-5 text-gray-600" />}
      </button>
      {/* Contenido de la sección, solo se muestra si isOpen es true */}
      {isOpen && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          {children} {/* Aquí se renderizará el contenido pasado como 'children' */}
        </div>
      )}
    </div>
  );
};

export default CollapsibleSection;
