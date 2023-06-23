import { useAuth } from "../context/authContext";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  BsChevronCompactLeft,
  BsChevronCompactRight,
  BsChevronCompactDown,
} from "react-icons/bs";

export function Home() {
  const { user, logOut, loading } = useAuth();

  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  const slides = [
    {
      url: "https://hertieschool-f4e6.kxcdn.com/fileadmin/_processed_/e/6/csm_kktdcmjhbcx8rjm6jgiv_b7aa36b769.jpeg",
    },
    {
      url: "https://www.bancos.live/static/8acca6c5f46f7f1ede86d61422e75b47/139c3/tarjeta-de-credito-ipn-bbva.jpg",
    },
    {
      url: "https://pbs.twimg.com/media/FvTz4EXWYAAZ1FY.jpg",
    },
    {
      url: "https://pbs.twimg.com/media/FwCyMBqWIAAawMw?format=jpg&name=small",
    },
    {
      url: "https://pbs.twimg.com/media/FvPAOBOWIAA3Xct?format=jpg&name=small",
    },
  ];

  const cardImg = [
    {
      url: "https://www.cnet.com/a/img/resize/f4fe658acb5af6f604ea5dd50536fee2fb0867cc/hub/2017/06/05/0fa9215e-55be-4067-9e51-10463956ce5c/fl-macbookprowwdc17.jpg?auto=webp&fit=cover&height=482&width=856",
    },
    {
      url: "https://img.global.news.samsung.com/mx/wp-content/uploads/2022/04/Tab-S8_main2-845x563.jpg",
    },
    {
      url: "https://i0.wp.com/tucochinito.com/wp-content/uploads/2021/08/descuentos-estudiantes-1.jpg?fit=1024%2C576&ssl=1",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  var logo = require("../img/Logo.png");
  var negocio1 = require("../img/Negocio1.jpg");

  if (loading) return <h1 className="text-white">Cargando</h1>;

  return (
    <div className="max-w-[auto] h-[auto] w-full py-4 relative">
      <div className="absolute bg-white top-0">
        <img className="w-[60%] mx-auto" src={logo} alt="logoStudyEver" />
      </div>
      <div className=" bg-white rounded shadow-md px-6 pt-24 pb-6 mb-4">
        <h1 className="text-xl text-center font-semibold">Bienvenido </h1>
        <h1 className="text-green-500 text-xl py-2 text-center">
          {user.displayName || user.email}
        </h1>
        <div className="py-2">
          <button
            onClick={handleLogOut}
            className="bg-green-500 hover:bg-green-700 text-white text-sm font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          >
            Cerrar sesión
          </button>
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-[390px] h-[240px] bg-center bg-cover duration-500"
      >
        <div className="z-0 absolute top-[48%] -translate-x-0 translate-y-[-50%] left-3 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        <div className="z-0 absolute top-[48%] -translate-x-0 translate-y-[-50%] right-3 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
      </div>

      <div className="relative inset-0 md:inset-y-0 w-full max-w-xs mx-auto text-gray-700"></div>

      <p className="text-xl text-center mx-5 mt-10">
        Descubre miles de ofertas y promociones exclusivas para estudiantes
        universitarios, sigue explorando <b>Study</b>
        <b className="text-green-500">Ever</b>.
      </p>

      <div className="absolute -translate-x-0 translate-y-[-50%] left-40 mt-10 text-2xl rounded-full p-2  text-black/50 cursor-pointer">
        <BsChevronCompactDown size={30} />
      </div>

      <div className="grid grid-cols-1 py-5 mt-20">
        <img
          className="w-[390px] h-[340px] align-center bg-center bg-cover mx-auto py-0"
          src={negocio1} 
          alt="logoNegocio1"
        />
        <div className="p-4">
          <h2 className="font-semibold text-green-500">Taliboings</h2>
          <p className="text-sm py-2">
          En la compra de cualquier gomiboing, llévate gratis una banderilla de tamarindo.
          </p>
          <button className="bg-green-500 hover:bg-green-700 text-white text-sm font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ">
            <Link to='/Negocio1'>Leer más</Link>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 py-5">
        <img
          style={{ backgroundImage: `url(${cardImg[0].url})` }}
          className="w-[390px] h-[200px] align-center bg-center bg-cover mx-auto py-0"
          alt=""
        />
        <div className="p-4">
          <h2 className="font-semibold text-green-500">Apple estudiantes</h2>
          <p className="text-sm py-2">
            Ahorra al comprar una Mac o iPad con los precios especiales de Apple
            para la educación.
          </p>
          <button className="bg-green-500 hover:bg-green-700 text-white text-sm font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            <a href="https://www.apple.com/mx-hed/store" target="_blank">Leer más</a>
          </button>
        </div>
      </div>
      <div className="relative inset-0 md:inset-y-0 w-full max-w-xs mx-auto text-gray-700"></div>
      <div className="grid grid-cols-1 py-5">
        <img
          style={{ backgroundImage: `url(${cardImg[1].url})` }}
          className="w-[390px] h-[200px] align-center bg-center bg-cover mx-auto py-0"
          alt=""
        />
        <div className="p-4">
          <h2 className="font-semibold text-green-500">Samsung estudiantes</h2>
          <p className="text-sm py-2">
            ¡Lleva tus clases a otro nivel! Los estudiantes pueden ahorrar hasta
            un 10% de descuento.
          </p>
          <button className="bg-green-500 hover:bg-green-700 text-white text-sm font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ">
          <a href="https://www.samsung.com/mx/students-offers/" target="_blank">Leer más</a>
          </button>
        </div>
      </div>
      <div className="relative inset-0 md:inset-y-0 w-full max-w-xs mx-auto text-gray-700"></div>
      <div className="grid grid-cols-1 py-5">
        <img
          style={{ backgroundImage: `url(${cardImg[2].url})` }}
          className="w-[390px] h-[200px] align-center bg-center bg-cover mx-auto py-0"
          alt=""
        />
        <div className="p-4">
          <h2 className="font-semibold text-green-500">Viajes de verano</h2>
          <p className="text-sm py-2">
            El descuento será de 25% y 50% por ciento para estudiantes y
            maestros, en el servicio de autotransporte federal y ferroviario y
            estará en vigor durante el periodo vacacional.
          </p>
          <button className="bg-green-500 hover:bg-green-700 text-white text-sm font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ">
          <a href="https://www.gob.mx/sct/articulos/descuento-a-estudiantes-y-maestros-que-viajen-durante-las-vacaciones-de-verano-276519#:~:text=El%20descuento%20ser%C3%A1%20de%2050,de%20agosto%20del%20presente%20a%C3%B1o." target="_blank">Leer más</a>
          </button>
        </div>
      </div>
      <div className="relative inset-0 md:inset-y-0 w-full max-w-xs mx-auto text-gray-700"></div>
      <footer className="text-xl text-center py-5 mx-5">
        Copyright ©<b>Study</b>
        <b className="text-green-500">Ever</b> 2023.
      </footer>
    </div>
  );
}
