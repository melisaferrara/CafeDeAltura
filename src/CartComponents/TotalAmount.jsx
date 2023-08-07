import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CoffeeContext } from "../CoffeeContext/CoffeeContext";

const TotalAmount = () => {

  const [finalPrice, setFinalPrice] = useState()
  const {cartItems} = useContext(CoffeeContext)
  const {sendType} = useContext(CoffeeContext)

  useEffect(() =>{
    const totalPrice = cartItems.reduce((acc, items) =>{
    return acc + (items.quantity * items.price)
    },0)
    setFinalPrice(totalPrice)
  }, [cartItems])

  return (
    <div className=" w-96 h-72 p-5 bg-[#F7F5F3] flex flex-col gap-4">
      <h3 className="font-bold text-lg">Total del carrito</h3>
      <hr />
      <div className="flex justify-between">
        <p>SUBTOTAL</p>
        <p className="font-bold">{finalPrice},00€</p>
      </div>
      <div className="flex justify-between">
        <p>ENVÍO</p>
        <p className="font-bold">{sendType ? "9,00€" : "GRATIS" }</p>
      </div>
      <hr/>
      <div className="flex justify-between">
        <p className="font-bold">TOTAL</p>
        <div>
          <p className="flex justify-end">{finalPrice + sendType},00€</p>
          <p>incluye {(finalPrice * 0.21).toFixed(2)}€ de iva</p>
        </div>
      </div>
     <div className="flex gap-8 items-center justify-center">
     <button className="w-32 h-10  bg-[#2A5B45] text-white">Ir a checkout</button>
     <Link to={"/store"} className="font-bold text-[#2A5B45]">
      Seguir comprando
     </Link>
     </div>
    </div>
  );
};

export default TotalAmount;
