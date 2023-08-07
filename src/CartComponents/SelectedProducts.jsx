import React, { useContext } from "react";
import { CoffeeContext } from "../CoffeeContext/CoffeeContext";
import SelectedItemCard from "./SelectedItemCard";
import Cart from "../Pages/Cart";

const SelectedProducts = () => {
  const { cartItems, setCartItems } = useContext(CoffeeContext);

  const handleLess = (itemCart) => {
    const updatedCartItems = cartItems
      .map((item) =>
        item._id === itemCart._id
          ? {
              ...item,
              quantity: item.quantity === 0 ? 0 : item.quantity - 1,
            }
          : item
      )
      .filter((item) => item.quantity > 0);
    setCartItems(updatedCartItems);
  };

  const handleMore = (itemCart) => {
    const updatedCartItems = cartItems.map((item) =>
      item._id === itemCart._id
        ? {
            ...item,
            quantity: item.quantity + 1,
          }
        : item
    );
    setCartItems(updatedCartItems);
  };

  return (
    <div className="p-8 h-72 flex flex-col gap-4">
      <h3 className="font-bold text-lg">Productos</h3>
      {cartItems.map((itemCart) => (
        <SelectedItemCard
          key={itemCart._id}
          itemCart={itemCart}
          handleMore={() => handleMore(itemCart)}
          handleLess={() => handleLess(itemCart)}
        />
      ))}
    </div>
  );
};

export default SelectedProducts;
