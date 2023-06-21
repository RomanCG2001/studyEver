import { useState } from "react";
import { useAuth } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "./Alert";


var logo = require('../img/Logo.png')

export function ResetPass() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { login, resetPassword } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) => {
    if (name === "email") {
        const emailRegex = /^[\w.-]+@alumno\.ipn\.mx$/;
        if (!emailRegex.test(value)) {
          setError("El correo debe tener la extensión @alumno.ipn.mx");
          return;
        }
      }
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(user.email, user.password);
      navigate("/");
    } catch (error) {
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

      <img className="mb-4" src={logo} alt="logoStudyEver"/>
      
      <form
        onSubmit={handleSubmit}
        className="bg-green-100 shadow-md rounded px-6 pt-6 pb-6 mb-4"
      >
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Usuario
          </label>
          <input
            type="email"
            name="email"
            placeholder="Correo Institucional"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleChange}
          />
        </div>
      <button onClick={handleResetPassword} className="bg-green-700 hover:bg-green-500 text-white text-sm font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
          Enviar
        </button>
      </form>

      <p className="my-4 text-sm flex justify-between px-2 text-green-600">¿Recuperaste tu contraseña?<Link to='/Login' className="underline text-green-500">Inicia sesión</Link></p>
    </div>
  );
}
