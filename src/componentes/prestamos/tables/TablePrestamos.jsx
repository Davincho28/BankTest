import React from "react";

const TablePrestamos = ({ storage }) => {

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        📜 Mis Préstamos
      </h1>

      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-600">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100">
            <tr>
              <th className="px-6 py-3">Monto</th>
              <th className="px-6 py-3">Estado</th>
            </tr>
          </thead>
          <tbody>
            {/* Si Hay mas de un elemento */}
            {storage.length >= 1 &&
              storage.map(({ id, montoSolicitado, estado }) => (
                <tr
                  className="border-b border-gray-200 hover:bg-gray-50"
                  key={id}
                >
                  <td className="px-6 py-4 font-medium text-gray-900">
                    💵 ${montoSolicitado}
                  </td>
                  <td className="px-6 py-4 text-green-600">{estado}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TablePrestamos;
