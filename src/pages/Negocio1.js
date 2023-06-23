import React from 'react'
import { Link } from 'react-router-dom';

var logo = require("../img/Logo.png");

export function Negocio1() {
  return (
    <div className="max-w-[auto] h-[auto] w-full py-4 relative">
      <div className="fixed bg-white top-0">
        <img className="w-[60%] mx-auto" src={logo} alt="logoStudyEver" />
      </div>

      <div className="grid grid-cols-1 py-5 mt-20">
      <div className="p-4">
          <h2 className="font-semibold text-green-500">Taliboings</h2>
          <p className="text-sm py-2">¡Lleva tus clases a otro nivel!
Los estudiantes pueden ahorrar hasta un 10% de descuento.</p>
          <button className="bg-green-500 hover:bg-green-700 text-white text-sm font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ">Leer más</button>
        </div>
      </div>
      <div className="relative inset-0 md:inset-y-0 w-full max-w-xs mx-auto text-gray-700"></div>
      <div className="relative inset-0 md:inset-y-0 w-full max-w-xs mx-auto text-gray-700"></div>
      <div className="grid grid-cols-1 py-5 mt-20">
        <div className="p-4">
          <button className="bg-white border-green-500 border-2 hover:bg-green-700 text-green-500 text-sm font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ">
          <Link to='/'>Regresar</Link>
            </button>
        </div>
      </div>
      <div className="relative inset-0 md:inset-y-0 w-full max-w-xs mx-auto text-gray-700"></div>
      <footer className="text-xl text-center py-5 mx-5">Copyright © <b>Study</b><b className="text-green-500">Ever</b> 2023.</footer>

    </div>
  );
}

