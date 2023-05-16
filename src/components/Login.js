import { useState } from "react";
import { useAuth } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "./Alert";


var logo = require('../img/Logo.png')

export function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { login, loginWithGoogle, resetPassword } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(user.email, user.password);
      navigate("/");
    } catch (error) {
      //En dado caso que quiera personalizar los mensajes de error de inputs
      /*console.log(error.code);
      if (error.code === "auth/internal-error") {
        setError("Correo invalido");
      }*/
      setError(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await loginWithGoogle();
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleResetPassword =  async () => {
    if(!user.email) return setError("Por favor, ingresa tu email")
    try {
      await resetPassword(user.email)
      setError('Te hemos enviado a tu correo un link para recuperar tu contraseña')
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <div className="w-full max-w-xs m-auto">
      {error && <Alert message={error} />}

      <img src={logo} alt="logo-rsa"/>
      
      <form
        onSubmit={handleSubmit}
        className="bg-slate-50 shadow-md rounded px-6 pt-6 pb-6 mb-4"
      >
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Correo
          </label>
          <input
            type="email"
            name="email"
            placeholder="tucorreo@ejemplo.com"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Contraseña
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="******"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleChange}
          />
        </div>

      <button className="bg-blue-700 hover:bg-blue-800 text-white text-sm font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
          Iniciar sesión
        </button>
        <a href="#!" className="flex justify-center font-bold text-sm text-blue-400 pt-3"
        onClick={handleResetPassword}
        >¿Olvidaste tu contraseña?</a>
      </form>

      <p className="my-4 text-sm flex justify-between px-2 text-blue-200">¿No tienes una cuenta?<Link to='/Register' className="underline text-blue-100">Registrate</Link></p>

      <button onClick={handleGoogleSignIn} className="bg-slate-50 hover:bg-slate-400 text-black text-sm shadow-md rounded border-2 border-gray-300 py-2 px-4 w-full">Iniciar sesión con Google</button>
    </div>
  );
}
