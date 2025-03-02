import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
        <h1 className="text-9xl font-extrabold text-blue-600 drop-shadow-lg">
          404
        </h1>
        <p className="text-2xl font-semibold mt-4">Página no encontrada</p>
        <p className="text-gray-500 mt-2">
          Parece que la página que buscas no existe.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </>
  );
};

export default Error;
