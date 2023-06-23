import React from "react";
import { Link } from "react-router-dom";

var bgNegocio1 = require("../img/bg-negocio1.jpg");

export function Negocio1() {
  return (
    <div className="max-w-[auto] h-[auto] w-full relative">
      <div className="bg-white mt-0">
        <img className="w-[100%] mx-auto" src={bgNegocio1} alt="logoStudyEver" />
      </div>

      <div className="grid grid-cols-1 py-0">
        <div className="p-4">
          <h2 className="font-semibold text-green-500">Taliboings</h2>
          <p className="text-sm py-2 font-semibold">
            Te quitan el calor y te quedas el sabor.
          </p>
          <p className="text-sm py-2"><b>Categoria:</b> comida.          </p>
          <p className="text-sm py-2">
            Negocio orgullosamente politécnico y proveniente del plantel UPIICSA, 
            reconocido por el Instituto Mexicano de Ejecutivos de Finanzas en su capitulo Universitario,
            mesas directivas locales en su región CDMX norte.
          </p>
          <p className="text-sm py-2">
            Con un gran historial de ventas, en esta ocasión trae una oferta especial gracias a su indiscutible
            y delicioso sabor.
            Cualquier Gomiboing a precio normal por $6 extras banderilla de tamarindo, pero pedido por esta página, será gratis.
          </p>
          <p className="font-semibold text-green-500 text-sm py-4">
            Cualquier Gomiboing a precio normal por $6 extras banderilla de tamarindo, pero pedido por esta página, será gratis.
          </p>
          <button className="bg-green-500 hover:bg-green-700 text-white text-sm font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline relative top-1">
            <a href="https://www.instagram.com/taliboings/?igshid=NGExMmI2YTkyZg" target="_blank">Contactar</a>
          </button>
        </div>
      </div>
      <div className="relative inset-0 md:inset-y-0 w-full max-w-xs mx-auto text-gray-700"></div>
      <div className="py-0">
        <div className="px-4">
          <button className="bg-white border-green-500 border-2 hover:bg-green-700 text-green-500 text-sm font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ">
            <Link to="/">Regresar</Link>
          </button>
        </div>
      </div>
      <div className="relative inset-0 md:inset-y-0 w-full max-w-xs mx-auto text-gray-700"></div>
      <footer className="text-xl text-center mx-5 mt-4">
        Copyright ©<b>Study</b>
        <b className="text-green-500">Ever</b> 2023.
      </footer>
    </div>
  );
}
