import React from "react";
import { hookForm } from "../../../hooks/hooksforms";
import { alerts } from "../../../alerts/alerts";

const FormSolicitarMonto = ({ actualizarTabla, setActualizarTabla }) => {
  const { inputChange, onsubmit } = hookForm();
  const { modalAlert } = alerts();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const valueMonto = onsubmit();
    const storageMonto = localStorage.getItem("monto");
    const email=localStorage.getItem("email")

    //Crear arreglo de objetos para local storage
    const objData = {
      id: crypto.randomUUID(),
      estado: "pendiente",
      montoSolicitado: valueMonto.monto,
      email:email,
    };

    //Pequeña espera
    modalAlert({
      title: "Espera Porfavor",
      text: "Estamos validando tu solicitud",
      icon: "info",
      timer: 4000,
    });
    await new Promise((resolve) => setTimeout(resolve, 4000));

    //Si el monto en el localstorage existe
    if (storageMonto) {
      const storageMonto = await JSON.parse(localStorage.getItem("monto"));
      const newData = [...storageMonto, objData];
      localStorage.setItem("monto", JSON.stringify(newData));
    } else {
      localStorage.setItem("monto", JSON.stringify([objData]));
    }

    //Alerta creada con exito
    modalAlert({
      title: "Exito",
      text: "Su solicitud a sido creada con exito",
      icon: "success",
    });
    //Actualizamos tabla
    setActualizarTabla(actualizarTabla + 1);
    //Borramos valor del value
    document.getElementById("monto").value = "";
  };

  return (
    <>
      {/* Formulario de solicitud */}
      <div className="bg-white p-8 rounded-2xl shadow-lg h-1/3">
        <h1 className="text-3xl font-bold text-gray-800 text-center">
          💰 Solicitar Préstamo
        </h1>
        <p className="text-gray-600 text-center mt-2">
          Ingrese el monto que desea solicitar
        </p>

        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 font-medium">Monto</label>
            <input
              type="number"
              id="monto"
              placeholder="Ingrese el monto"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              onChange={inputChange}
            />
          </div>

          <button
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-all duration-300"
            type="submit"
          >
            🚀 Solicitar
          </button>
        </form>
      </div>
    </>
  );
};

export default FormSolicitarMonto;
