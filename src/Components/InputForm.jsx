import React from "react";

const InputForm = ({ name, value, label, onChange, type, placeholder, className }) => {
  return (
    <>
      <label>{label}</label>
      <input className={className} type={type} name={name} value={value} onChange={onChange} placeholder={placeholder}/>
    </>
  );
};

export default InputForm;
