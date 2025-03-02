import React, { useEffect, useState } from "react";
import TablePrestamos from "./tables/TablePrestamos";
import FormSolicitarMonto from "./forms/FormSolicitarMonto";

const PrestamosUser = () => {

  const [storage, setstorage] = useState([]);
  const [actualizarTabla, setActualizarTabla] = useState(0);

  useEffect(() => {
    console.log("Se actualizo la tabla")
    const data= JSON.parse(localStorage.getItem("monto"))
    data&&setstorage(data)
  }, [actualizarTabla])
  

  return (
    <>
      {/* Sección de préstamos y tabla */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-screen">
        <FormSolicitarMonto actualizarTabla={actualizarTabla} setActualizarTabla={setActualizarTabla} />
        {/* Tabla de préstamos */}
        <TablePrestamos storage={storage} />
      </div>
    </>
  );
};

export default PrestamosUser;
