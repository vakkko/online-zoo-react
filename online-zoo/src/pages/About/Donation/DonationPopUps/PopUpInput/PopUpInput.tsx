import { useState, type ChangeEvent } from "react";

import { cardRegex, nameRegex } from "@/schemas/AuthSchema";

import type { PopUpInputProps } from "./PopUpInput.types";

const PopUpInput: React.FC<PopUpInputProps> = ({
  htmlFor,
  label,
  type,
  id,
  placeholder,
  autocomplete,
  value,
  setState,
  maxLength,
}) => {
  const [errorMsg, setErrorMsg] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setState(value);

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (id === "name") {
      if (!nameRegex.test(value) && value.length > 0) {
        setErrorMsg("Name should contains only letters");
        return;
      }
      setErrorMsg("");
    } else if (id === "email") {
      if (!emailRegex.test(value) && value.length > 0) {
        setErrorMsg("Email should follow the standard email format");
        return;
      }
      setErrorMsg("");
    } else if (id === "card") {
      if (!cardRegex.test(value)) {
        setErrorMsg("Card number should contain only numeric characters.");
        return;
      }
      setErrorMsg("");
    } else if (id === "cvv") {
      if (!cardRegex.test(value)) {
        setErrorMsg("Cvv should contain only numeric characters.");
        return;
      }
      setErrorMsg("");
    }
  };
  return (
    <>
      <label htmlFor={htmlFor}>
        <span className="asterisk">*</span> {label}
      </label>
      <br />
      <input
        value={value}
        onChange={handleChange}
        type={type}
        id={id}
        placeholder={placeholder}
        autoComplete={autocomplete}
        maxLength={maxLength}
      />
      <p className="err-msg">{errorMsg}</p>
    </>
  );
};

export default PopUpInput;
