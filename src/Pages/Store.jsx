import React from "react";
import Footer from "../Components/Footer";
import CardsSection from "../Components/CardsSection";
import checkIlustration from "../assets/checkIlustration.png";
import carIlustration from "../assets/carIlustration.png";
import giftIlustration from "../assets/giftIlustration.png";
import CoffeeSection from "../Components/CoffeeSection";

const Store = () => {
  return (
    <>
      <div className="h-[938] p-10">
        <h1 className="text-[#2A5B45] text-2xl font-bold flex justify-center p-5">
          Últimos orígenes
        </h1>

        <CoffeeSection slice={8} />
      </div>
      <div className="h-[380px] flex bg-custom-image bg-cover bg-center bg-no-repeat justify-center items-center gap-3 text-center">
        <CardsSection
          img={checkIlustration}
          title="Recibe tu pedido sin preocuparte"
          text="Tienes cosas más importantes en la cabeza, por eso con nuestra suscripción de café, nunca te quedarás sin tu taza de la mañana. "
        />
        <CardsSection
          img={carIlustration}
          title="Envío en 24/48h"
          text="Pide tu café antes de las 12h y lo recibirás al día siguiente."
        />
        <CardsSection
          img={giftIlustration}
          title="Descuentos y beneficios"
          text="Cada dos meses, te regalamos una bolsa de un nuevo origen sorpresa, para que lo descubras junto a nosotros."
        />
      </div>
      <Footer />
    </>
  );
};

export default Store;
