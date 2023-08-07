import React from "react";
import phoneGray from "../assets/phoneGRay.png";
import Icon from "../assets/IconEmail.svg";
import Links from "./Links";

const Contact = () => {
  return (
    <div className="bg-[#E3DED7] h-[588] w-[552] flex flex-col justify-center gap-8 p-8">
      <h3 className="font-bold text-[#111827]">
        Entra en contacto con nosotros
      </h3>
      <p className="text-[#6B7280]">
        Si tienes dudas, ponte en contacto con nosotros a través del formulario
        y te responderemos lo antes posible.
      </p>
      <div>
        <p className="text-[#6B7280]">
          También puedes ponerte en contacto con nostros en nuestra dirección o
          a través del teléfono de la tienda.
        </p>
      </div>
      <div className="text-[#6B7280]">
        <p>742 Evergreen Terrace</p>
        <p>Springfield, OR 12345</p>
      </div>
      <div className="flex gap-3 text-[#6B7280]">
        <img src={phoneGray} />
        <p>+1 (555) 123-4567</p>
      </div>
      <div className="flex gap-3 text-[#6B7280]">
        <img src={Icon} />
        <p>support@example.com</p>
      </div>
      <div className="flex gap-1">
        <p className="text-[#6B7280]">¿Buscas un trabajo?</p>
        <Links linkName="Ver nuestras ofertas." className="font-bold" />
      </div>
    </div>
  );
};

export default Contact;
