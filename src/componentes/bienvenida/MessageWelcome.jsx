import React from "react";
import { controllerMessageWelcome } from "../../controllers/controllerMessageWelcome";

const MessageWelcome = ({ email }) => {
  const {cerrarSesion}= controllerMessageWelcome()
  return (
    <>
      {/* Bienvenida */}
      <div className="grid grid-cols-[1fr_2fr] ">
        <div>
          <button
            className="bg-black text-white text-bold rounded p-2 hover:text-gray-400 cursor-pointer"
            onClick={cerrarSesion}
          >
            Cerrar sesion
          </button>
        </div>

        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Bienvenido:
            <span className="text-blue-700 hover:text-blue-500">{email}</span>
          </h1>
        </div>
      </div>
    </>
  );
};

export default MessageWelcome;
