// src/components/layouts/Sidebar.jsx
import React from 'react';
import { Home, Mail, Calendar, TrendingUp, DollarSign, Phone, User, Settings, LogOut, ChevronRight } from 'lucide-react';

/**
 * Componente de la barra lateral de navegación.
 * Contiene el logo y los enlaces del menú.
 */
const Sidebar = () => {
  return (
    <aside className="w-64 bg-white shadow-lg p-6 flex flex-col justify-between">
      <div>
        {/* Logo */}
        <div className="flex items-center justify-center mb-10">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-red-600 flex items-center justify-center shadow-md">
            <div className="w-12 h-12 rounded-full bg-white opacity-90"></div>
          </div>
        </div>

        {/* Menú de navegación */}
        <nav>
          <ul>
            <li className="mb-4">
              <a href="#" className="flex items-center text-gray-700 hover:bg-blue-50 hover:text-blue-700 p-3 rounded-lg transition duration-200">
                <Home className="w-5 h-5 mr-3" /> Página principal
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="flex items-center text-gray-700 hover:bg-blue-50 hover:text-blue-700 p-3 rounded-lg transition duration-200">
                <Mail className="w-5 h-5 mr-3" /> Correo electrónico
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="flex items-center text-gray-700 hover:bg-blue-50 hover:text-blue-700 p-3 rounded-lg transition duration-200">
                <Calendar className="w-5 h-5 mr-3" /> Disposiciones de plomo
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="flex items-center text-gray-700 hover:bg-blue-50 hover:text-blue-700 p-3 rounded-lg transition duration-200">
                <TrendingUp className="w-5 h-5 mr-3" /> Cuidado de Obama
              </a>
            </li>
            <li className="mb-4">
              {/* El único módulo que funciona (resaltado) */}
              <a href="#" className="flex items-center text-blue-700 bg-blue-100 font-semibold p-3 rounded-lg shadow-sm">
                <DollarSign className="w-5 h-5 mr-3" /> Nueva venta
                <ChevronRight className="w-4 h-4 ml-auto" />
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="flex items-center text-gray-700 hover:bg-blue-50 hover:text-blue-700 p-3 rounded-lg transition duration-200">
                <Phone className="w-5 h-5 mr-3" /> Lista de teléfonos
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Opciones de usuario/configuración en la parte inferior del sidebar */}
      <div className="pt-6 border-t border-gray-200">
        <a href="#" className="flex items-center text-gray-700 hover:bg-blue-50 hover:text-blue-700 p-3 rounded-lg transition duration-200 mb-2">
          <Settings className="w-5 h-5 mr-3" /> Configuración
        </a>
        <a href="#" className="flex items-center text-gray-700 hover:bg-red-50 hover:text-red-700 p-3 rounded-lg transition duration-200">
          <LogOut className="w-5 h-5 mr-3" /> Cerrar sesión
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
