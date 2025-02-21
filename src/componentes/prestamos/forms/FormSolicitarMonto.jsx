import React from "react";

const FormSolicitarMonto = ({ actualizarTabla, setActualizarTabla }) => {
  /*
    
    {
        data:
            [{
                estado:pendiente
                montoSolicitado:200
            }],
            [{
                estado:aprobado
                montoSolicitado:4000
            }],
    }
    
    */

  const onSubmit = (e) => {
    e.preventDefault();
    /*Capturamos montos */
    const monto = document.getElementById("monto").value;

    const storage = localStorage.getItem("monto");

    /*Si NO existe data en el local storage creeme uno */
    if (!storage) {
      console.log("no existo");
      console.log(monto);
      /*Construimos objeto */
      const data = [
        {
          id: crypto.randomUUID(),
          estado: "pendiente",
          montoSolicitado: monto,
        },
      ];
      /*Almacenamos en el localStorage */
      localStorage.setItem("monto", JSON.stringify({ data }));
    } else {
    /*Si existe en el local storage */
      console.log("Si existo");
      /*Desestructuracion de la data*/
      const obj = JSON.parse(localStorage.getItem("monto"));
      const { data } = obj;

      console.log("data");
      console.log(data);
      const objnew = {
        id: crypto.randomUUID(),
        estado: "pendiente",
        montoSolicitado: monto,
      };
      /*[{}] */
      const newData = [...data, objnew];
      console.log("newData");
      console.log(newData);
      localStorage.setItem("monto", JSON.stringify(newData));
    }
    setActualizarTabla(actualizarTabla + 1);
  };

  return (
    <>
      {/* Formulario de solicitud */}
      <div className="bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 text-center">
          💰 Solicitar Préstamo
        </h1>
        <p className="text-gray-600 text-center mt-2">
          Ingrese el monto que desea solicitar
        </p>

        <form className="mt-6 space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Monto</label>
            <input
              type="number"
              id="monto"
              placeholder="Ingrese el monto"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-all duration-300"
            type="submit"
            onClick={onSubmit}
          >
            🚀 Solicitar
          </button>
        </form>
      </div>
    </>
  );
};

export default FormSolicitarMonto;
