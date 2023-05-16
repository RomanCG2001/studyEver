import { useAuth } from "../context/authContext";
import { useState, useRef } from "react";

//Pitudo NEFO, aqui agregue los botones de upload file y los botones para cifrar y descifrar
//Como veras, está de la verga el diseño kajskaskj, pero ya después lo arreglo
//Podrias bien trabajar aqui las funciones de cifrado/descifrado o bien, cree dos componentes
//DecodeRSA y EncodeRSA, mi idea era hacer ahi la funcion y exportarlo aqui pero no me salio :(((
//Así que, espero no te revuelvas en mi código spaguetti jaksjaksjkas
//Mi idea es que al momento de dar click en cifrar o descifrar, se generen automaticamente las llaves
//Y qué cifre o descifre, pero que descargue el archivo automaticamente
//Espero de verdad puedas ayudarme en esto, ya me desespere :((((
//Ahi luego me dices cuanto te debo miamor, teamo <3

export function Home() {
  const { user, logOut, loading } = useAuth();
  const [file, setFile] = useState(false);
  const [file2, setFile2] = useState(false);

  const fileInputField = useRef(null);
  const fileInputField2 = useRef(null);

  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) return <h1 className="text-white">Cargando</h1>;

  const handleFileChange = (e) => {
    setFile(e.target.files[0].name);
  };

  const handleFileChange2 = (e) => {
    setFile2(e.target.files[0].name);
  };

  return (
    <div className="relative inset-0 md:inset-y-0 right w-full max-w-xs m-auto text-gray-700">
      <div className="absolute inset-x-0 bottom-20 bg-white rounded shadow-md px-6 pt-6 pb-6 mb-4">
        <h1 className="text-xl">Bienvenido al Cifrado/Descifrado en RSA: </h1>
        <h1 className="text-blue-500 text-xl py-2">
          {user.displayName || user.email}
        </h1>
        <div className="py-2">
          <button
            onClick={handleLogOut}
            className="bg-red-500 hover:bg-red-700 text-white text-sm font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          >
            Cerrar sesión
          </button>
        </div>
      </div>
      <div
        id="Encriptador"
        className="absolute right-80 bottom-28 bg-slate-400 text-slate-200 text-sm font-bold py-4 px-4 rounded w-full"
      >
        <a>{file}</a>
        <input
          id="fileUploading"
          type="file"
          onChange={handleFileChange}
          ref={fileInputField}
        />
        <label
          className="text-gray-700"
          htmlFor="file"
          onClick={() => fileInputField.current.click()}
        >
          1. Busca un archivo con extensión .txt para cifrarlo, una vez subido
          el archivo, da click en cifrar.
        </label>
        <button
          onClick={""}
          className="relative top-2 bg-blue-400 hover:bg-blue-500 text-slate-200 text-sm font-bold py-2 px-4 rounded w-full"
        >
          Cifrar
        </button>
      </div>
      <div
        id="Desencriptador"
        className="absolute left-80 bottom-28 bg-slate-400 text-slate-200 text-sm font-bold py-4 px-4 rounded w-full"
      >
        <a>{file2}</a>
        <input
          id="fileUploading"
          type="file"
          onChange={handleFileChange2}
          ref={fileInputField2}
        />
        <label
          className="text-gray-700"
          htmlFor="file"
          onClick={() => fileInputField2.current.click()}
        >
          2. Busca un archivo con extensión .rsa para descifrarlo, una vez
          subido el archivo, da click en descifrar
        </label>
        <button
          onClick={""}
          className="relative top-2 bg-blue-500 hover:bg-blue-600 text-slate-200 text-sm font-bold py-2 px-4 rounded w-full"
        >
          Descifrar
        </button>
      </div>
    </div>
  );
}
