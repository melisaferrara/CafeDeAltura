import React, { useContext } from "react";
import SelectedProducts from "../CartComponents/SelectedProducts";
import SelectedSend from "../CartComponents/SelectedSend";
import TotalAmount from "../CartComponents/TotalAmount";

const Cart = () => {
  return (
    <div className="h-[772px] p-8">
      <div className="p-5 flex items-center gap-8 justify-between ">
        <SelectedProducts />
        <TotalAmount />
      </div>
      <div>
        <SelectedSend
          sendTime={"Envío 5-7 días"}
          sendOption={"Opción estándar sin seguimiento"}
          price={"GRATIS"}
          value={0}
        />
        <hr className="w-[792px]"/>
        <SelectedSend
          sendTime={"Envío urgente 24h "}
          sendOption={
            "Recibe tu pedido en las siguientes 24h (Para pedidos realizados antes de las 13:00)."
          }
          price={"9,00€"}
          value={9}
        />
      </div>
    </div>
  );
};

export default Cart;
