import CardsSection from "../Components/CardsSection";
import checkIlustration from "../assets/checkIlustration.png";
import carIlustration from "../assets/carIlustration.png";
import giftIlustration from "../assets/giftIlustration.png";
import Footer from "../Components/Footer";
import CoffeeSection from "../Components/CoffeeSection";
import HeroSection from "../Components/HeroSection";
import Contact from "../Components/Contact";
import Form from "../Components/Form";
import { Link } from "react-router-dom";
import Links from "../Components/Links";
import FeatureSection from "../Components/FeatureSection";
import QuestionsSection from "../Components/QuestionsSection";
import arrowUp from "../assets/arrowUp.png";
import arrowDown from "../assets/arrowDown.png";
import arrow from "../assets/arrow.png";
import arrowWhite from "../assets/arrowWhite.png";

const Home = () => {
  return (
    <>
      <HeroSection />
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
      <div className="h-[603px] flex flex-col gap-4">
        <h3 className="font-bold text-[#2A5B45] p-8 flex justify-center text-2xl">
          Novedades
        </h3>
        <CoffeeSection slice={4} />
        <div className="flex justify-center">
          <Link to={"/store"}>
            <Links linkName="Ver todos" icon={arrow} />
          </Link>
        </div>
      </div>
      <div className="bg-[#2A5B45] h-[621px] flex flex-col gap-5 items-center p-8">
        <h1 className="text-white text-2xl font-bold flex justify-center">
          Preguntas frecuentes
        </h1>
        <QuestionsSection
          question="¿Cómo hago el pedido?"
          text="Selecciona el café que desees probar y completa el proceso de compra. Si lo prefieres, te preguntaremos cada cuánto quieres que te lo mandemos a casa y así nunca te quedarás sin café."
          icon={arrowUp}
          className="w-[668px] h-[140px] bg-white rounded-xl p-4 flex flex-col gap-2"
        />
        <QuestionsSection
          question="¿Por qué los precios son tan bajos?"
          text="Viajamos constantemente para encontrar los mejores granos y a los agricultores más exigentes. Si podemos ofrecerte estos precios es porque tratamos directamente con los productores de café, sin intermediarios. Así obtenemos el mejor precio para ti y la persona que está detrás de los granos de café recibe el mayor beneficio posible. "
          icon={arrowUp}
          className="w-[668px] h-[180px] bg-white rounded-xl p-4 flex flex-col gap-2"
        />
        <QuestionsSection
          question="¿Es posible enviar café a mi oficina? "
          icon={arrowDown}
          className="w-[668px] h-[72px] bg-white rounded-xl p-4 flex flex-col"
        />
        <Links
          linkName="Resolvemos tus dudas"
          className="text-white"
          icon={arrowWhite}
        />
      </div>
      <FeatureSection />
      <div className="flex h-[552px]">
        <Contact />
        <Form />
      </div>
      <Footer />
    </>
  );
};

export default Home;
