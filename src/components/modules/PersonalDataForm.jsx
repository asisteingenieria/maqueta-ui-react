import React, { useState } from 'react';
// Importa los componentes InputField, SelectField y CollapsibleSection desde la carpeta 'cammon'
// Las rutas deben coincidir EXACTAMENTE con el nombre de la carpeta y los archivos en tu sistema.
import InputField from '../cammon/InputField.jsx';
import SelectField from '../cammon/SelectField.jsx';
import CollapsibleSection from '../cammon/CollapsibleSection.jsx';
// Importa los componentes específicos de la carpeta 'modules'
// Las rutas deben coincidir EXACTAMENTE con los nombres de los archivos en tu sistema.
import DependentForm from './DependentForm.jsx';
import SecurityPaymentForm from './SecurityPaymentForm.jsx';
import PolicyTable from './PolicyTable.jsx';
import { Home, Plus } from 'lucide-react'; // Iconos de Lucide React

/**
 * Componente para el formulario de Datos Personales.
 * Gestiona su propio estado para los campos del formulario,
 * ahora organizados en secciones plegables.
 */
const PersonalDataForm = () => {
  // Estado para los campos del formulario, incluyendo los nuevos campos para las secciones plegables
  const [formData, setFormData] = useState({
    nombreAgente: '',
    referido: 'Vendedor Vital',
    fecha: new Date().toISOString().split('T')[0],
    nombre: '',
    telefono: '',
    estado: 'Escoger',
    direccion: '',
    condado: '',
    npn: 'Escoger',
    origenLlamada: '',
    // Campos de 'Beneficio para la salud'
    companiaSalud: '',
    anioSalud: '',
    metalSalud: 'Escoger',
    deducibleSalud: '',
    opmSalud: '',
    pagoMensualSalud: '',
    ercCopagos: '',
    ucCopagos: '',
    pdCopagos: '',
    sdCopagos: '',
    gdCopagos: '',
    // Campos para 'Solicitante'
    solicitanteNombre: '',
    solicitanteTelefono: '',
    solicitanteDOB: '',
    solicitanteGenero: 'Escoger',
    solicitanteCorreo: '',
    solicitanteSSN: '',
    solicitanteInscrito: 'Escoger',
    solicitanteAltura: '',
    solicitantePeso: '',
    solicitanteEstatusMigratorio: 'Escoger',
    solicitanteIdioma: 'Español',
    solicitanteEstadoCivil: 'Escoger',
    solicitanteDireccion: '',
    // Campos para 'Cónyuge Solicitante'
    conyugeNombre: '',
    conyugeTelefono: '',
    conyugeDOB: '',
    conyugeGenero: 'Escoger',
    conyugeCorreo: '',
    conyugeSSN: '',
    conyugeInscrito: 'Escoger',
    conyugeAltura: '',
    conyugePeso: '',
    conyugeEstatusMigratorio: 'Escoger',
    conyugeIdioma: 'Español',
    conyugeEstadoCivil: 'Escoger',
    conyugeDireccion: '',
  });

  // Estado para gestionar los dependientes (array de objetos)
  const [dependents, setDependents] = useState([]);

  // Manejador de cambios para los campos del formulario principal
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Función para añadir un nuevo dependiente al array
  const handleAddDependent = () => {
    const newDependent = {
      nombreDependiente: '', dobDependiente: '', inscritoDependiente: 'Escoger',
      estatusMigratorioDependiente: 'Escoger', ssnDependiente: '', medicareDependiente: 'Escoger',
      generoDependiente: 'Escoger',
    };
    setDependents(prevDependents => [...prevDependents, newDependent]);
  };

  // Función para manejar cambios en un dependiente específico por su índice y nombre de campo
  const handleDependentChange = (index, fieldName, value) => {
    setDependents(prevDependents => {
      const updatedDependents = [...prevDependents];
      updatedDependents[index] = { ...updatedDependents[index], [fieldName]: value };
      return updatedDependents;
    });
  };

  // Función para eliminar un dependiente del array por su índice
  const handleRemoveDependent = (indexToRemove) => {
    setDependents(prevDependents => prevDependents.filter((_, index) => index !== indexToRemove));
  };


  return (
    <section className="bg-white p-6 rounded-xl shadow-md mb-8">
      {/* Encabezado del formulario con título y botón de "Para respaldar" */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Formulario de Datos del Cliente</h2>
        <button className="bg-blue-600 text-white py-2 px-4 rounded-full text-sm font-semibold shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200 flex items-center">
          <Home className="w-4 h-4 mr-2" /> Para respaldar
        </button>
      </div>

      {/* Sección desplegable: Datos Personales */}
      <CollapsibleSection title="Datos Personales" defaultOpen={true}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">
          <InputField label="Nombre del agente" name="nombreAgente" value={formData.nombreAgente} onChange={handleChange} required />
          <InputField label="Referido" name="referido" value={formData.referido} onChange={handleChange} readOnly className="text-gray-500 bg-gray-50 rounded-md" />
          <InputField label="Fecha" name="fecha" type="date" value={formData.fecha} onChange={handleChange} readOnly={false} className="text-gray-500 bg-gray-50 rounded-md" />
          <InputField label="Nombre" name="nombre" value={formData.nombre} onChange={handleChange} required />
          <InputField label="Teléfono" name="telefono" type="tel" value={formData.telefono} onChange={handleChange} />
          <SelectField label="Estado" name="estado" value={formData.estado} onChange={handleChange} options={[{ label: 'Escoger', value: 'Escoger' }, { label: 'Activo', value: 'Activo' }, { label: 'Inactivo', value: 'Inactivo' }]} required />
          <InputField label="Dirección" name="direccion" value={formData.direccion} onChange={handleChange} required />
          <InputField label="Condado" name="condado" value={formData.condado} onChange={handleChange} required />
          <SelectField label="NPN" name="npn" value={formData.npn} onChange={handleChange} options={[{ label: 'Escoger', value: 'Escoger' }, { label: 'NPN123', value: 'NPN123' }, { label: 'NPN456', value: 'NPN456' }]} />
        </div>
        <div className="flex flex-col mt-4 max-w-sm">
          <label htmlFor="origenLlamada" className="block text-sm font-medium text-gray-700 mb-1">
            Origen de la llamada <span className="text-red-500">*</span>
          </label>
          <input
            id="origenLlamada" name="origenLlamada" type="text" value={formData.origenLlamada} onChange={handleChange}
            placeholder="Seleccionar el origen de la llamada"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>
      </CollapsibleSection>

      <PolicyTable />
      <br />

      {/* Sección desplegable: Beneficio para la salud */}
      <CollapsibleSection title="Beneficio para la salud" defaultOpen={false}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4 mb-6">
          <InputField label="Compañía" name="companiaSalud" value={formData.companiaSalud} onChange={handleChange} required />
          <InputField label="Año" name="anioSalud" placeholder="MM/DD/AAAA" value={formData.anioSalud} onChange={handleChange} />
          <SelectField label="Metal" name="metalSalud" value={formData.metalSalud} onChange={handleChange} options={[{ label: 'Escoger', value: 'Escoger' }, { label: 'Bronce', value: 'Bronce' }, { label: 'Plata', value: 'Plata' }, { label: 'Oro', value: 'Oro' }, { label: 'Platino', value: 'Platino' }]} required />
          <InputField label="Deducible" name="deducibleSalud" type="number" placeholder="$0.00" value={formData.deducibleSalud} onChange={handleChange} />
          <InputField label="OPM" name="opmSalud" type="number" placeholder="$0.00" value={formData.opmSalud} onChange={handleChange} />
          <InputField label="Pago mensual" name="pagoMensualSalud" type="number" placeholder="$0.00" value={formData.pagoMensualSalud} onChange={handleChange} />
        </div>

        <h3 className="text-lg font-bold text-gray-800 mb-4">Copagos:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-4">
          <InputField label="ERC" name="ercCopagos" type="number" placeholder="$0.00" value={formData.ercCopagos} onChange={handleChange} />
          <InputField label="UC" name="ucCopagos" type="number" placeholder="$0.00" value={formData.ucCopagos} onChange={handleChange} />
          <InputField label="PD" name="pdCopagos" type="number" placeholder="$0.00" value={formData.pdCopagos} onChange={handleChange} />
          <InputField label="SD" name="sdCopagos" type="number" placeholder="$0.00" value={formData.sdCopagos} onChange={handleChange} />
          <InputField label="GD" name="gdCopagos" type="number" placeholder="$0.00" value={formData.gdCopagos} onChange={handleChange} />
        </div>

        <h3 className="text-lg font-bold text-gray-800 mt-8 mb-4">Solicitante <span className="text-red-500">*</span></h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">
          <InputField label="Nombre" name="solicitanteNombre" value={formData.solicitanteNombre} onChange={handleChange} required />
          <InputField label="Teléfono" name="solicitanteTelefono" type="tel" value={formData.solicitanteTelefono} onChange={handleChange} />
          <InputField label="DOB" name="solicitanteDOB" placeholder="MM/DD/AAAA" value={formData.solicitanteDOB} onChange={handleChange} required />
          <SelectField label="Género" name="solicitanteGenero" value={formData.solicitanteGenero} onChange={handleChange} options={[{ label: 'Escoger', value: 'Escoger' }, { label: 'Masculino', value: 'Masculino' }, { label: 'Femenino', value: 'Femenino' }]} />
          <InputField label="Correo electrónico" name="solicitanteCorreo" type="email" value={formData.solicitanteCorreo} onChange={handleChange} required />
          <InputField label="SSN" name="solicitanteSSN" value={formData.solicitanteSSN} onChange={handleChange} required />
          <SelectField label="Inscrito" name="solicitanteInscrito" value={formData.solicitanteInscrito} onChange={handleChange} options={[{ label: 'Escoger', value: 'Escoger' }, { label: 'Sí', value: 'Si' }, { label: 'No', value: 'No' }]} required />
          <InputField label="Altura" name="solicitanteAltura" value={formData.solicitanteAltura} onChange={handleChange} />
          <InputField label="Peso" name="solicitantePeso" value={formData.solicitantePeso} onChange={handleChange} />
          <SelectField label="Estatus Migratorio" name="solicitanteEstatusMigratorio" value={formData.estatusMigratorio} onChange={handleChange} options={[{ label: 'Escoger', value: 'Escoger' }, { label: 'Ciudadano', value: 'Ciudadano' }, { label: 'Residente Permanente', value: 'Residente Permanente' }, { label: 'Otro', value: 'Otro' }]} required />
          <InputField label="Idioma" name="solicitanteIdioma" value={formData.solicitanteIdioma} onChange={handleChange} readOnly={true} className="text-gray-500 bg-gray-50 rounded-md" />
          <SelectField label="Estado civil" name="solicitanteEstadoCivil" value={formData.solicitanteEstadoCivil} onChange={handleChange} options={[{ label: 'Escoger', value: 'Escoger' }, { label: 'Soltero/a', value: 'Soltero/a' }, { label: 'Casado/a', value: 'Casado/a' }, { label: 'Divorciado/a', value: 'Divorciado/a' }, { label: 'Viudo/a', value: 'Viudo/a' }]} required />
          <InputField label="Dirección" name="solicitanteDireccion" value={formData.solicitanteDireccion} onChange={handleChange} required />
        </div>

        <h3 className="text-lg font-bold text-gray-800 mt-8 mb-4">Cónyuge solicitante</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">
          <InputField label="Nombre" name="conyugeNombre" value={formData.conyugeNombre} onChange={handleChange} />
          <InputField label="Teléfono" name="conyugeTelefono" type="tel" value={formData.conyugeTelefono} onChange={handleChange} />
          <InputField label="DOB" name="conyugeDOB" placeholder="MM/DD/AAAA" value={formData.conyugeDOB} onChange={handleChange} />
          <SelectField label="Género" name="conyugeGenero" value={formData.conyugeGenero} onChange={handleChange} options={[{ label: 'Escoger', value: 'Escoger' }, { label: 'Masculino', value: 'Masculino' }, { label: 'Femenino', value: 'Femenino' }]} />
          <InputField label="Correo electrónico" name="conyugeCorreo" type="email" value={formData.conyugeCorreo} onChange={handleChange} />
          <InputField label="SSN" name="conyugeSSN" value={formData.conyugeSSN} onChange={handleChange} />
          <SelectField label="Inscrito" name="conyugeInscrito" value={formData.conyugeInscrito} onChange={handleChange} options={[{ label: 'Escoger', value: 'Escoger' }, { label: 'Sí', value: 'Si' }, { label: 'No', value: 'No' }]} />
          <InputField label="Altura" name="conyugeAltura" value={formData.conyugeAltura} onChange={handleChange} />
          <InputField label="Peso" name="conyugePeso" value={formData.conyugePeso} onChange={handleChange} />
          <SelectField label="Estatus Migratorio" name="conyugeEstatusMigratorio" value={formData.conyugeEstatusMigratorio} onChange={handleChange} options={[{ label: 'Escoger', value: 'Escoger' }, { label: 'Ciudadano', value: 'Ciudadano' }, { label: 'Residente Permanente', value: 'Residente Permanente' }, { label: 'Otro', value: 'Otro' }]} />
          <InputField label="Idioma" name="conyugeIdioma" value={formData.conyugeIdioma} onChange={handleChange} readOnly={true} className="text-gray-500 bg-gray-50 rounded-md" />
          <SelectField label="Estado civil" name="conyugeEstadoCivil" value={formData.conyugeEstadoCivil} onChange={handleChange} options={[{ label: 'Escoger', value: 'Escoger' }, { label: 'Soltero/a', value: 'Soltero/a' }, { label: 'Casado/a', value: 'Casado/a' }, { label: 'Divorciado/a', value: 'Divorciado/a' }, { label: 'Viudo/a', value: 'Viudo/a' }]} />
          <InputField label="Dirección" name="conyugeDireccion" value={formData.conyugeDireccion} onChange={handleChange} />
        </div>
      </CollapsibleSection>

      {/* Sección desplegable: Dependientes */}
      <CollapsibleSection title="Dependientes" defaultOpen={false}>
        {/* Botón para añadir un nuevo dependiente */}
        <button
          type="button"
          onClick={handleAddDependent}
          className="bg-blue-600 text-white py-2 px-4 rounded-full text-sm font-semibold shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200 flex items-center mb-6"
        >
          <Plus className="w-4 h-4 mr-2" /> Añadir Dependiente
        </button>

        {/* Mapear y renderizar los formularios de cada dependiente */}
        {dependents.map((dependent, index) => (
          <DependentForm
            key={index}
            dependent={dependent}
            index={index}
            onDependentChange={handleDependentChange}
            onRemoveDependent={handleRemoveDependent}
          />
        ))}
        {dependents.length === 0 && (
          <p className="text-gray-600 text-center py-4">No hay dependientes añadidos aún.</p>
        )}
      </CollapsibleSection>

      {/* Nueva sección desplegable para Seguridad y Pago */}
      <CollapsibleSection title="Seguridad y Pago" defaultOpen={false}>
        <SecurityPaymentForm />
      </CollapsibleSection>

      
    </section>
  );
};

export default PersonalDataForm;
