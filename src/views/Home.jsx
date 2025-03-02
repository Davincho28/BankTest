import React, { useEffect, useState } from "react";
import PrestamosUser from "../componentes/prestamos/PrestamosUser";
import MessageWelcome from "../componentes/bienvenida/MessageWelcome";
import PrestamosAdmin from "../componentes/prestamos/PrestamosAdmin";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [emailUser, setEmailUser] = useState("");
  const [isAdmin, setisAdmin] = useState(false);
  const [actualizarTabla, setActualizarTabla] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    views();
  }, []);

  const views = async () => {
    const email = localStorage.getItem("email");
    const admin = localStorage.getItem("isAdmin");

    //Si no existe la propiedad email
    if (!email) {
      navigate("/404");
      return;
    }
    setEmailUser(email);
    setisAdmin(admin);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Mensaje de bienvenid@ */}
      <MessageWelcome email={emailUser} />
      {/*Vista NO es administrador */}
      {isAdmin == "false" && (
        <PrestamosUser
          actualizarTabla={actualizarTabla}
          setActualizarTabla={setActualizarTabla}
        />
      )}
      {/* Vista de SI es administrador */}
      {isAdmin == "true" && <PrestamosAdmin />}
    </div>
  );
};

export default Home;
