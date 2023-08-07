import React from "react";
import HeroImage from "../assets/HeroImage.png";
import Buttons from "./Buttons";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="flex items-center p-10 bg-[#E3DED74D]">
      <div className="flex flex-col gap-4">
        <p className="text-[#2A5B45] font-bold">De la planta a tu taza</p>
        <h1 className="text-4xl font-bold">
          El mejor café del mundo, ahora en tu casa.
        </h1>
        <p className="text-sm text-[#111827]">
          Trabajamos con agricultores de todo el mundo para seleccionar los
          mejores granos de café y que puedas viajar desde la comodidad de tu
          hogar.
        </p>
        <div className="flex items-center gap-2">
          <Buttons
            className="bg-[#1F1815] w-[168px] h-[40px] border-[#1F1815] rounded text-white"
            buttonName="Descubrir orígenes"
          />
          <Link to={"/store"}>
            <Buttons
              className="bg-[#2A5B45] w-[137px] h-[40px] border-[#2A5B45] rounded text-white"
              buttonName="Comprar café"
            />
          </Link>
        </div>
      </div>
      <img src={HeroImage} />
    </div>
  );
};

export default HeroSection;
