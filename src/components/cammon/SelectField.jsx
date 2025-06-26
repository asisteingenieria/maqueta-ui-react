// src/components/cammon/SelectField.jsx
import React from 'react';

/**
 * Componente reutilizable para un campo de selección (dropdown).
 * @param {object} props - Propiedades del componente.
 * @param {string} props.label - Etiqueta del campo.
 * @param {string} props.value - Valor actual seleccionado.
 * @param {function} props.onChange - Función manejadora para el evento onChange.
 * @param {Array<object>} props.options - Array de objetos { label: string, value: string } para las opciones.
 * @param {boolean} [props.required=false] - Indica si el campo es obligatorio.
 * @param {string} [props.className=''] - Clases adicionales de Tailwind CSS.
 */
const SelectField = ({ label, value, onChange, options, required = false, className = '' }) => (
  <div className={`flex flex-col mb-4 ${className}`}>
    <label htmlFor={label} className="block text-sm font-medium text-gray-700 mb-1">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <select
      id={label}
      name={label}
      value={value}
      onChange={onChange}
      className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      required={required}
    >
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

export default SelectField;
