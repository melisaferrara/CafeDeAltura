import React from "react";

const CardsSection = ({ img, title, text }) => {
  return (
    <div className="flex flex-col justify-center gap-2 w-[316px] h-[232px] items-center bg-[#F7F5F3] rounded-lg p-2">
      <img className="w-16" src={img} />
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="text-[#111827] text-sm">{text}</p>
    </div>
  );
};

export default CardsSection;
