import React, { useState } from "react";
import InputForm from "./InputForm";

const Form = () => {
  const [data, setData] = useState({});

  const handleChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col p-9 gap-6">
      <InputForm
        name="name"
        value={data?.name}
        onChange={handleChange}
        label="Nombre completo"
        type="text"
        className="w-[470px] h-[34px]"
      />
      <InputForm
        name="email"
        value={data?.email}
        onChange={handleChange}
        label="Email"
        type="text"
        className="w-[470px] h-[34px]"
      />
      <InputForm
        name="number"
        value={data?.number}
        onChange={handleChange}
        label="Teléfono"
        type="tel"
        placeholder="+1 (555) 987-6543"
        className="w-[470px] h-[34px]"
      />
      <InputForm
        name="help"
        value={data?.help}
        onChange={handleChange}
        placeholder="¿En qué podemos ayudarte?"
        className="w-[470px] h-[122px]"
      />
      <InputForm type="submit"/>
      <InputForm
        type="checkbox"
        label="Acepto la Política de Privacidad y los Términos y condiciones."
        className="text-sm font-bold underline"
      />
    </form>
  );
};

export default Form;
