import React, { useContext, useEffect } from "react";
import { CoffeeContext } from "../CoffeeContext/CoffeeContext";
import CoffeeCard from "./CoffeeCard";


const CoffeeSection = ({ slice }) => {
  const { coffees, setCoffees } = useContext(CoffeeContext);

  const getCoffees = async () => {
    const data = await fetch("https://cafe-de-altura.vercel.app/api/products");
    return data.json();
  };

  useEffect(() => {
    getCoffees().then((data) => setCoffees(data.products));
  }, []);

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {coffees.slice(0, slice).map((coffee) => {
        return <CoffeeCard coffee={coffee} key={coffee._id} />;
      })}
     
    </div>
  );
};

export default CoffeeSection;
