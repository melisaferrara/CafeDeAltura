import React from "react";

const SelectedItemCard = ({ itemCart, handleMore, handleLess }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="flex gap-2 items-center">
        <button onClick={handleLess} className="font-bold">
          -
        </button>
        <span className="rounded-lg flex justify-center items-center bg-[#2A5B451A] w-5 h-5">{itemCart.quantity}</span>
        <button onClick={handleMore} className="font-bold">
          +
        </button>
      </div>
      <img className="w-14" src={itemCart.img_url} />
      <div className="flex gap-80">
        <div className="flex flex-col">
          <p>{itemCart.brand}</p>
          <p>Paquete de café, 250 gr</p>
        </div>
        <div>
          <span className="font-bold">{itemCart.price * itemCart.quantity},00€</span>
        </div>
      </div>
    </div>
  );
};

export default SelectedItemCard;
