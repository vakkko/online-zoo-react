import { useState, type ChangeEvent } from "react";

import { nameRegex } from "@/schemas/AuthSchema";

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
}) => {
  const [errorMsg, setErrorMsg] = useState<string>("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setState(value);

    if (id === "name") {
      if (!nameRegex.test(value)) {
        setErrorMsg("Name should contains only letters");
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
      />
      <p className="err-msg">{errorMsg}</p>
    </>
  );
};

export default PopUpInput;
