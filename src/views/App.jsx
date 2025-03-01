import { useNavigate } from "react-router-dom";
import { hookForm } from "../hooks/hooksforms";
import { alerts } from "../alerts/alerts";

function App() {
  const { inputChange,onsubmit } = hookForm();
   //alertas
   const { modalAlert } = alerts();
   //Navigar a la pestaña de inicio
   const navigate = useNavigate();
 
   //Validacion de usuarios traias de api o lo que sea
   const users = JSON.stringify([
     {
       email: "usuario@test.com",
       password: "123",
     },
     {
       email: "admin@test.com",
       password: "123",
     },
   ]);
 

  //Diligenciar formulario
  const handleSubmit = async (event) => {
    event.preventDefault()
    const { email, password } = onsubmit();
    const dataUsers = JSON.parse(users);
    const acces = dataUsers.find(
      (user) => email == user.email && password == user.password
    );

    if (acces) {
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      navigate("/home");
    } else {
      modalAlert({
        title: "Error",
        text: "Usuario o contraseña incorrectos intente nuevamente",
        icon: "error",
      });
    }
  };

  return (
    <div className="h-screen grid place-items-center">
      <form
        className="w-full max-w-sm mx-auto p-6 border border-black rounded-xl shadow-lg"
        onSubmit={handleSubmit}
      >
        <h1 className="text-4xl text-bold">Iniciar sesion</h1>
        <p>Ingrese sus credenciales para acceder</p>
        <div className="flex flex-col space-y-4 mt-2">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-900"
            >
              Email address
            </label>
            <input
              required
              id="email"
              placeholder="Email"
              type="email"
              className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              onChange={(event) => {
                inputChange(event);
              }}
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-900"
            >
              Contraseña
            </label>
            <input
              required
              id="password"
              placeholder="Contraseña"
              type="password"
              className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              onChange={(event) => {
                inputChange(event);
              }}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Iniciar sesión
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
