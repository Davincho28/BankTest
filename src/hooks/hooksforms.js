import { useState } from "react";

export const hookForm = () => {
  //Estados del input
  const [inputValue, setInputValue] = useState({});
  //funcion para capturar valores de los inputs
  const inputChange = ({ target }) => {
    const { value, id } = target;
    setInputValue({ ...inputValue, [id]: value })
  };

  //Capturar datos de un formulario
  const onsubmit = () => {
    return inputValue
  };

  return {
    inputChange,
    onsubmit,
  };
};
