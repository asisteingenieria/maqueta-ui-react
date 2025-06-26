// src/components/modules/PolicyTable.jsx
import React from 'react';

/**
 * Componente para la tabla de Tipo de Pólizas.
 * Muestra la información de las compañías por estado.
 */
const PolicyTable = () => {
  // Datos para la tabla de "Tipo de pólizas" (simulados)
  const policyData = [
    { agenteNPN: 'LUIS VITIER', estado: 'Georgia (GA)', compania: ['OSCAR', 'HIMNO/WELLPOINT', 'AETNA', 'AMBETTER', 'UHC'] },
    { agenteNPN: 'LUIS VITIER', estado: 'Florida (FL)', compania: ['AZUL FLORIDA', 'OSCAR', 'HIMNO/WELLPOINT', 'AETNA', 'AMBETTER', 'MOLINA', 'SUNSHINE', 'UHC'] },
  ];

  return (
    <section className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Tipo de pólizas</h2>

      {/* Tabla de Estados autorizados */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider rounded-tl-lg">
                Agente NPN
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Estado
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider rounded-tr-lg">
                Compañía
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {policyData.map((data, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {data.agenteNPN}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  {data.estado}
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  <ul className="list-disc pl-5">
                    {data.compania.map((comp, i) => (
                      <li key={i}>{comp}</li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default PolicyTable;
