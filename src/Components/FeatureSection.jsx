import React from "react";
import Links from "./Links";
import featureImg from "../assets/featureImg.png"
import arrow from "../assets/arrow.png";

const FeatureSection = () => {
  return (
    <div className="flex items-center gap-5 p-8 bg-[#F7F5F3]">
      <div className="flex flex-col gap-4">
        <h3 className="font-bold text-[#2A5B45] text-2xl">Pruébalo en nuestro coffee shop</h3>
        <p className="text-[#111827]">
          Visita nuestra cafetería en el centro de la ciudad para probar los
          granos de café antes de hacer tu pedido y llévate un descuento
        </p>
        <Links linkName="Cómo llegar" icon={arrow}/>
      </div>
      <img src={featureImg} />
    </div>
  );
};

export default FeatureSection;
