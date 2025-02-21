import React, { useEffect, useState } from "react";
import TablePrestamos from "./tables/TablePrestamos";
import FormSolicitarMonto from "./forms/FormSolicitarMonto";

const PrestamosUser = ({actualizarTabla,setActualizarTabla}) => {

  const [storage, setstorage] = useState([])

  useEffect(() => {
    const data= JSON.parse(localStorage.getItem("monto"))
    data&&setstorage(data)
  }, [actualizarTabla])
  

  return (
    <>
      {/* Sección de préstamos y tabla */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormSolicitarMonto actualizarTabla={actualizarTabla} setActualizarTabla={setActualizarTabla} />
        {/* Tabla de préstamos */}
        <TablePrestamos storage={storage} />
      </div>
    </>
  );
};

export default PrestamosUser;
