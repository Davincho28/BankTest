import { useNavigate } from "react-router-dom"

function App() {

  const navigate=useNavigate()

  const onSubmit=(e)=>{
    e.preventDefault()
    const email=document.getElementById("email").value
    const password=document.getElementById("password").value
    console.log(email)
    console.log(password)
    if(email=="usuario@test.com"&&password=="123"){
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);
      navigate("/home")
    }else{
      if(email=="admin@test.com"&&password=="123"){
        navigate("/home")
      }else{
        console.error("error")
      }
    }

  }




  return (
    <>
      <form className="w-full h-full max-w-sm mx-auto p-6 border border-black rounded-xl shadow-lg">
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
              id="email"
              placeholder="Email"
              type="email"
              className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
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
              id="password"
              placeholder="Contraseña"
              type="password"
              className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            onClick={onSubmit}
          >
            Iniciar sesión
          </button>
        </div>
      </form>
    </>
  );
}

export default App;
