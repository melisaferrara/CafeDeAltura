import React, { useContext } from "react";
import { CoffeeContext } from "../CoffeeContext/CoffeeContext";

const CoffeeCard = ({ coffee }) => {
  const { setCartItems, cartItems } = useContext(CoffeeContext);

  const handleClickAdd = (coffee) => {
    const itemsInCart = cartItems.find((item) => item._id === coffee._id);

    if (itemsInCart) {
      setCartItems((prev) =>
        prev.map((item) =>
          item._id === coffee._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems((prev) => [...prev, { ...coffee, quantity: 1 }]);
    }
  };

  
  return (
    <div className="flex flex-col items-center gap-6 w-72 h-96 border rounded-lg p-10 hover:bg-[#E3DED7]">
      <img src={coffee.img_url} />
      <div className="flex flex-col items-center">
        <p className="font-bold">{coffee.brand}</p>
        <span>{coffee.price},00€</span>
      </div>
      <button
        onClick={() => handleClickAdd(coffee)}
        className="bg-[#2A5B45B2] hover:bg-[#2A5B45] text-white rounded w-16 h-8 p-2 flex items-center"
      >
        Añadir
      </button>
    </div>
  );
};

export default CoffeeCard;
