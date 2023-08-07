import React from "react";
import coffeeCup from "../assets/coffeeCup.png";
import { Link } from "react-router-dom";
import Buttons from "./Buttons";
import Phone from "../assets/Phone.png";
import IconEmail from "../assets/IconEmail.svg";

const Footer = () => {
  return (
    <>
      <div className="bg-[#1F1815] h-[310px] text-white flex p-8 gap-80 items-center">
        <div className="flex flex-col gap-4">
          <Link to={"/"}>
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-bold">cafedealtura.com</h2>
              <img src={coffeeCup} />
            </div>
          </Link>
          <h3 className="font-bold">Te ayudamos en</h3>
          <div className="flex flex-col gap-4">
            <div className="bg-[#515051] w-[182px] h-[48px] text-white rounded flex items-center gap-2 justify-center">
              <img src={Phone} />
              <Buttons buttonName="+34 919 49 05 18" className="" />
            </div>
            <div className="bg-[#515051] w-[232pX] h-[48px] text-white rounded flex items-center gap-2 justify-center">
              <img src={IconEmail} />
              <Buttons buttonName="hola@cafedealtura.com" className="" />
            </div>
          </div>
        </div>
        <div className="flex gap-32">
          <ul className="flex flex-col gap-4">
            <Link to={"store"}>
              <li>Tienda</li>
            </Link>
            <li>Suscripción</li>
            <li>Para empresas</li>
            <li>Sobre nosotros</li>
            <li>Contacto</li>
          </ul>

          <div className="flex flex-col gap-4">
            <a href="#">Política de privacidad</a>
            <a href="#">Política de cookies</a>
            <a href="#">Términos y condiciones</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
