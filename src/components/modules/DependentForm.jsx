import React from 'react';
// Asegúrate de que la carpeta 'common' exista y contenga estos archivos
import InputField from '../cammon/InputField.jsx';
import SelectField from '../cammon/SelectField.jsx';
import { X } from 'lucide-react'; // Icono para el botón de eliminar

/**
 * Componente para el formulario individual de un dependiente.
 * @param {object} props - Propiedades del componente.
 * @param {object} props.dependent - Objeto con los datos del dependiente.
 * @param {number} props.index - Índice del dependiente en la lista.
 * @param {function} props.onDependentChange - Función para manejar cambios en los campos del dependiente.
 * @param {function} props.onRemoveDependent - Función para eliminar este dependiente.
 */
const DependentForm = ({ dependent, index, onDependentChange, onRemoveDependent }) => {
  // Manejador genérico para los cambios en los campos del dependiente
  const handleChange = (e) => {
    const { name, value } = e.target;
    onDependentChange(index, name, value); // Pasa el índice, nombre del campo y el nuevo valor
  };

  return (
    <div className="border border-gray-200 p-4 rounded-lg shadow-sm mb-4 bg-white relative">
      {/* Encabezado del dependiente con el número y el botón de eliminar */}
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-lg font-semibold text-gray-800">Dependiente {index + 1}</h4>
        <button
          type="button"
          onClick={() => onRemoveDependent(index)}
          className="p-1 rounded-full bg-red-100 text-red-600 hover:bg-red-200 transition duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          aria-label={`Eliminar Dependiente ${index + 1}`}
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Grid de campos para el dependiente */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">
        <InputField
          label="Nombre"
          name="nombreDependiente"
          value={dependent.nombreDependiente || ''}
          onChange={handleChange}
          required
        />
        <InputField
          label="DOB"
          name="dobDependiente"
          type="date"
          placeholder="MM/DD/AAAA"
          value={dependent.dobDependiente || ''}
          onChange={handleChange}
          required
        />
        <SelectField
          label="Inscrito"
          name="inscritoDependiente"
          value={dependent.inscritoDependiente || 'Escoger'}
          onChange={handleChange}
          options={[{ label: 'Escoger', value: 'Escoger' }, { label: 'Sí', value: 'Si' }, { label: 'No', value: 'No' }]}
          required
        />
        <SelectField
          label="Estatus Migratorio"
          name="estatusMigratorioDependiente"
          value={dependent.estatusMigratorioDependiente || 'Escoger'}
          onChange={handleChange}
          options={[
            { label: 'Escoger', value: 'Escoger' },
            { label: 'Ciudadano', value: 'Ciudadano' },
            { label: 'Residente Permanente', value: 'Residente Permanente' },
            { label: 'Otro', value: 'Otro' },
          ]}
          required
        />
        <InputField
          label="SSN"
          name="ssnDependiente"
          value={dependent.ssnDependiente || ''}
          onChange={handleChange}
        />
        <SelectField
          label="Medicare"
          name="medicareDependiente"
          value={dependent.medicareDependiente || 'Escoger'}
          onChange={handleChange}
          options={[{ label: 'Escoger', value: 'Escoger' }, { label: 'Sí', value: 'Si' }, { label: 'No', value: 'No' }]}
        />
        <SelectField
          label="Género"
          name="generoDependiente"
          value={dependent.generoDependiente || 'Escoger'}
          onChange={handleChange}
          options={[{ label: 'Escoger', value: 'Escoger' }, { label: 'Masculino', value: 'Masculino' }, { label: 'Femenino', value: 'Femenino' }]}
        />
      </div>
    </div>
  );
};

export default DependentForm;
