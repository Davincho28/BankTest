import React, { useEffect, useState } from "react";
import { alerts } from "../../alerts/alerts";

const PrestamosAdmin = () => {
  const [data, setdata] = useState([]);
  const { modalAlert, confirmModalAlert } = alerts();
  const [actualizarTabla, setActualizarTabla] = useState(0);

  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem("monto"));
    if (!storage) {
      return;
    }
    setdata(storage);
  }, [actualizarTabla]);

  const gestionSolicitud = async ({ accion, id }) => {
    try {
      const response = await confirmModalAlert({
        title: `¿Está seguro que desea darle el ${accion} a la solicitud?`,
      });

      //Si la respuesta es un falso se detiene todo
      if (!response) {
        return;
      }

      //Esperar
      modalAlert({
        title: "Espera Porfavor",
        text: "Estamos Procesando tu solicitud",
        icon: "info",
        timer: 5000,
      });
      await new Promise((resolve) => setTimeout(resolve, 4000));

      //proceso de solicitud
      //Encontrar la solicitud
      const newData = data.map((solicitud) => {
        console.log(solicitud);
        //Cambiar el estado de la solicitud
        if (solicitud.id == id) {
          solicitud.estado = accion;
        }
        return solicitud;
      });
      //cambiar en el storage la data
      localStorage.setItem("monto", JSON.stringify(newData));
      //Actualizamos componente
      setActualizarTabla(actualizarTabla + 1);
      //Terminado
      modalAlert({
        title: "Exito",
        text: "Tu solicitud fue gestionada con exito",
        icon: "success",
      });
    } catch (error) {
      console.error("Error en gestionSolicitud:", error);
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 border border-gray-400 rounded place-items-center">
        <h1 className="text-4xl font-extrabold text-gray-800 text-center mt-6">
          📑 Gestionar{" "}
          <span className="text-purple-600">solicitudes de préstamos</span>
        </h1>

        {data.length == 0 && (
          <div className="flex flex-col items-center justify-center h-64">
            <h1 className="text-4xl font-bold text-gray-600 animate-pulse">
              🚫 No hay solicitudes
            </h1>
            <p className="text-lg text-gray-500 mt-2">
              Vuelve más tarde para revisar nuevas solicitudes.
            </p>
          </div>
        )}

        {/* Renderizacion de contenido si existe data*/}
        {data?.map(({ id, estado, montoSolicitado, email }) => (
          <div
            className="border border-gray-300 rounded-lg shadow-lg bg-white m-4 w-full md:w-5/12 p-6"
            key={id}
          >
            {/* Información del usuario */}
            <div className="text-center mb-4">
              <h2 className="text-xl font-semibold text-gray-700">
                👤 Usuario: <span className="text-gray-900">{email}</span>
              </h2>
              <h2 className="text-xl font-semibold text-gray-700">
                💰 Monto:{" "}
                <span className="text-green-600">${montoSolicitado}</span>
              </h2>
              <h2 className="text-xl font-semibold text-gray-700">
                📌 Estado:
                <span
                  className={`ml-2 px-3 py-1 rounded-full text-white text-sm 
                ${
                  estado === "Aprobado"
                    ? "bg-green-800"
                    : estado === "Pendiente"
                    ? "bg-yellow-800"
                    : "bg-red-800"
                }`}
                >
                  {estado}
                </span>
              </h2>
            </div>

            {/* Sección de botones */}
            <div className="flex space-x-4 justify-center">
              <button
                className="bg-black text-white font-medium px-4 py-2 rounded-lg shadow-md hover:bg-green-700 transition"
                onClick={() => {
                  gestionSolicitud({ accion: "Aprobado", id });
                }}
              >
                ✅ Aprobar
              </button>
              <button
                className="bg-red-800 text-white font-medium px-4 py-2 rounded-lg shadow-md hover:bg-red-700 transition"
                onClick={() => {
                  gestionSolicitud({ accion: "Rechazado", id });
                }}
              >
                ❌ Rechazar
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PrestamosAdmin;
