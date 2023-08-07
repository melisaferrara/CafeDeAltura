import React from "react";
import { Link, Outlet } from "react-router-dom";
import Phone from "../assets/Phone.png";
import coffeeCup from "../assets/coffeeCup.png";
import iconBag from "../assets/iconBag.png";
import Buttons from "./Buttons";

const Nav = () => {
  return (
    <>
      <nav className="flex items-center bg-[#2B2A2B] text-white h-16 gap-16 p-4">
        <Link to={"/"}>
          <div className="flex items-center gap-2 opacity-80">
            <h2 className="text-2xl">cafedealtura.com</h2>
            <img src={coffeeCup} />
          </div>
        </Link>

        <ul className="flex gap-5">
          <Link to={"store"}>
            <li>Tienda</li>
          </Link>
          <li>Suscripción</li>
          <li>Para empresas</li>
          <li>Sobre nosotros</li>
          <li>Contacto</li>
        </ul>

        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            <img src={Phone} />
            <span>+34 919 49 05 18</span>
          </div>
         <Buttons buttonName={"Iniciar sesión"} className='bg-[#515051] w-32 h-10 border-[#515051] rounded'/>
        </div>
        <Link to={"cart"}>
          <div>
            <img src={iconBag} />
          </div>
        </Link>
      </nav>
      <Outlet />
      <div className="flex justify-center bg-[#2B2A2B] text-white h-[40px] items-center">
        <p>Todos los derechos reservados - Café de Altura SL - 2022</p>
      </div>
    </>
  );
};

export default Nav;
