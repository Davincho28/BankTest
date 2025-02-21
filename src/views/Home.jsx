import React, { useEffect, useState } from "react";
import PrestamosUser from "../componentes/prestamos/PrestamosUser";
import MessageWelcome from "../componentes/bienvenida/MessageWelcome";
import PrestamosAdmin from "../componentes/prestamos/PrestamosAdmin";

const Home = () => {
  const [admin, setadmin] = useState(false);
  const [emailUser, setEmailUser] = useState("");
  const [actualizarTabla, setActualizarTabla] = useState(0)

  useEffect(() => {
    const email = localStorage.getItem("email"); // 'Juan'
    email == "admin@test.com" && setadmin(true);
    setEmailUser(email);
    console.log("ingreso del usuario");
    console.log(email);
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <MessageWelcome email={emailUser} />
      {!admin && <PrestamosUser actualizarTabla={actualizarTabla} setActualizarTabla={setActualizarTabla} />}
      {admin&&<PrestamosAdmin/>}
    </div>
  );
};

export default Home;
