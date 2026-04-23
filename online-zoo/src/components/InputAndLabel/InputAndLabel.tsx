import React from "react";

import type { InputAndLabelProps } from "./InputAndLabel.types";

const InputAndLabel: React.FC<InputAndLabelProps> = ({
  label,
  type,
  name,
  placeholder,
  autocomplete,
}) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label> <br />
      <input
        type={type}
        id={name}
        placeholder={placeholder}
        autoComplete={autocomplete}
      />
    </div>
  );
};

export default InputAndLabel;
