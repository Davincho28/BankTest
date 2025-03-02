import { useNavigate } from "react-router-dom";
import { alerts } from "../alerts/alerts";

export const controllerMessageWelcome = () => {
  const navigate = useNavigate();
  const cerrarSesion = async () => {
    const { modalAlert } = alerts();
    modalAlert({
      title: "Espera un momento",
      text: "Estamos cerrando tu sesion",
      icon: "info",
      allowOutsideClick: false,
    });
    localStorage.removeItem("isAdmin");
    localStorage.removeItem("email");
    await new Promise((resolve) => setTimeout(resolve, 2000));
    navigate("/");
  };

  return {
    cerrarSesion,
  };
};
