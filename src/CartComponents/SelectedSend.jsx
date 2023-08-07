import React, { useContext } from "react";
import { CoffeeContext } from "../CoffeeContext/CoffeeContext";

const SelectedSend = ({ sendOption, sendTime, price, value }) => {
  const { setSendType } = useContext(CoffeeContext);
  const handleSend = (e) => {
    setSendType(Number(e.target.value));
  };
  
  return (
    <div className="flex flex-col gap-2 p-8 w-[792px]">
      <h3 className="font-bold text-lg">Seleccionar envío</h3>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          <input
            onClick={handleSend}
            className="w-4 h-4"
            type="radio"
            value={value}
            name="send"
            defaultChecked
          ></input>
          <label>
            <p className="font-bold">{sendTime}</p>
            <p>{sendOption}</p>
          </label>
        </div>
        <p className="font-bold">{price}</p>
      </div>
    </div>
  );
};

export default SelectedSend;
