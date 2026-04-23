import React from "react";

import type { InputAndLabelProps } from "./InputAndLabel.types";

const InputAndLabel: React.FC<InputAndLabelProps> = ({
  label,
  type,
  name,
  placeholder,
  autocomplete,
  register,
  errors,
}) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label> <br />
      <input
        {...register(name)}
        type={type}
        id={name}
        placeholder={placeholder}
        autoComplete={autocomplete}
      />
      <p className="error-message">{errors[name]?.message}</p>
    </div>
  );
};

export default InputAndLabel;
