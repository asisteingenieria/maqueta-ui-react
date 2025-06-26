// src/components/cammon/InputField.jsx
import React from 'react';

/**
 * Componente reutilizable para un campo de entrada de texto.
 * @param {object} props - Propiedades del componente.
 * @param {string} props.label - Etiqueta del campo.
 * @param {string} [props.type='text'] - Tipo de entrada (text, tel, date, etc.).
 * @param {string} props.value - Valor actual del campo.
 * @param {function} props.onChange - Función manejadora para el evento onChange.
 * @param {string} [props.placeholder=''] - Texto de marcador de posición.
 * @param {boolean} [props.required=false] - Indica si el campo es obligatorio.
 * @param {string} [props.className=''] - Clases adicionales de Tailwind CSS.
 * @param {boolean} [props.readOnly=false] - Indica si el campo es de solo lectura.
 */
const InputField = ({ label, type = 'text', value, onChange, placeholder, required = false, className = '', readOnly = false }) => (
  <div className={`flex flex-col mb-4 ${className}`}>
    <label htmlFor={label} className="block text-sm font-medium text-gray-700 mb-1">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      type={type}
      id={label}
      name={label}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${readOnly ? 'bg-gray-50 text-gray-500 cursor-not-allowed' : ''}`}
      required={required}
      readOnly={readOnly}
    />
  </div>
);

export default InputField;
