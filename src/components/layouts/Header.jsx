// src/components/layouts/Header.jsx
import React from 'react';
import { User, Search } from 'lucide-react';

/**
 * Componente del encabezado superior de la aplicación.
 * Muestra la barra de búsqueda y la información del usuario.
 */
const Header = () => {
  return (
    <header className="flex justify-between items-center bg-white p-4 rounded-xl shadow-md mb-8">
      <div className="flex items-center text-gray-600 text-lg">
        <Search className="w-5 h-5 mr-2" />
        {/* Espacio para posibles breadcrumbs o título de página */}
      </div>
      <div className="flex items-center">
        <span className="text-gray-700 font-semibold mr-3 hidden sm:block">Vendedor Vital</span>
        <span className="text-gray-500 text-sm mr-3 hidden sm:block">Agente</span>
        <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-lg">
          <User className="w-5 h-5" />
        </div>
      </div>
    </header>
  );
};

export default Header;
