import React, { useState } from 'react';
// Asegúrate de que los nombres de los archivos y la carpeta 'cammon' coincidan exactamente
import InputField from '../cammon/InputField.jsx'; // Ruta para el componente InputField
import SelectField from '../cammon/SelectField.jsx'; // Ruta para el componente SelectField

/**
 * Componente para el formulario de Preguntas de Seguridad y Forma de Pago.
 * Gestiona su propio estado para los campos.
 */
const SecurityPaymentForm = () => {
  // Estado para los campos de seguridad y pago
  const [formData, setFormData] = useState({
    colorSeguridad: '',
    anclarSeguridad: '',
    preguntaSeguridad: 'Escoger',
    respuestaSeguridad: '',
    nombreBanco: '',
    numeroRuta: '',
    numeroCuenta: '',
    numeroTarjeta: '',
    nombreTarjeta: '',
    expMesTarjeta: '',
    expAnioTarjeta: '',
    cvcTarjeta: '',
  });

  // Manejador de cambios para los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      {/* Sección: Preguntas de seguridad */}
      <h3 className="text-lg font-bold text-gray-800 mb-4">Preguntas de seguridad</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-4 mb-8">
        <InputField
          label="Color"
          name="colorSeguridad"
          value={formData.colorSeguridad}
          onChange={handleChange}
        />
        <InputField
          label="Anclar"
          name="anclarSeguridad"
          value={formData.anclarSeguridad}
          onChange={handleChange}
        />
        <SelectField
          label="Pregunta"
          name="preguntaSeguridad"
          value={formData.preguntaSeguridad}
          onChange={handleChange}
          options={[
            { label: 'Escoger', value: 'Escoger' },
            { label: '¿Cuál es el nombre de tu primera mascota?', value: 'mascota' },
            { label: '¿Cuál es el segundo nombre de tu madre?', value: 'madre' },
            { label: '¿Cuál es tu ciudad de nacimiento?', value: 'ciudad' },
          ]}
          required
        />
        <InputField
          label="Respuesta"
          name="respuestaSeguridad"
          value={formData.respuestaSeguridad}
          onChange={handleChange}
          required
        />
      </div>

      {/* Sección: Forma de pago */}
      <h3 className="text-lg font-bold text-gray-800 mb-4">Forma de pago</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4 mb-6">
        <InputField
          label="Nombre del banco"
          name="nombreBanco"
          value={formData.nombreBanco}
          onChange={handleChange}
        />
        <InputField
          label="Número de ruta"
          name="numeroRuta"
          value={formData.numeroRuta}
          onChange={handleChange}
        />
        <InputField
          label="Número de cuenta"
          name="numeroCuenta"
          value={formData.numeroCuenta}
          onChange={handleChange}
        />
      </div>

      {/* Imagen de tarjeta de crédito (Placeholder) */}
      <div className="flex justify-center my-8">
        <img
          src="https://placehold.co/300x200/cccccc/333333?text=TARJETA+DE+CR%C3%89DITO"
          alt="Tarjeta de Crédito de ejemplo"
          className="rounded-lg shadow-md max-w-full h-auto"
          onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/300x200/cccccc/333333?text=IMAGEN+NO+DISPONIBLE"; }}
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-4">
        <InputField
          label="Número de tarjeta"
          name="numeroTarjeta"
          type="text"
          value={formData.numeroTarjeta}
          onChange={handleChange}
          placeholder="•••• •••• •••• ••••"
        />
        <InputField
          label="Nombre de la tarjeta"
          name="nombreTarjeta"
          value={formData.nombreTarjeta}
          onChange={handleChange}
        />
        <div className="col-span-1 md:col-span-2 lg:col-span-1 grid grid-cols-2 gap-x-4">
          <SelectField
            label="Exp"
            name="expMesTarjeta"
            value={formData.expMesTarjeta}
            onChange={handleChange}
            options={[
              { label: 'Mes', value: '' }, // Opción por defecto
              ...Array.from({ length: 12 }, (_, i) => ({
                label: (i + 1).toString().padStart(2, '0'),
                value: (i + 1).toString().padStart(2, '0'),
              }))
            ]}
          />
          <SelectField
            label=" "
            name="expAnioTarjeta"
            value={formData.expAnioTarjeta}
            onChange={handleChange}
            options={[
              { label: 'Año', value: '' }, // Opción por defecto
              ...Array.from({ length: 10 }, (_, i) => ({
                label: (new Date().getFullYear() + i).toString(),
                value: (new Date().getFullYear() + i).toString(),
              }))
            ]}
          />
        </div>
        <InputField
          label="CVC"
          name="cvcTarjeta"
          type="text"
          value={formData.cvcTarjeta}
          onChange={handleChange}
          placeholder="•••"
          className="max-w-[100px]" // Para que el CVC no sea demasiado ancho
        />
      </div>
    </div>
  );
};

export default SecurityPaymentForm;
