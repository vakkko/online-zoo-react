import type { PopUpInputProps } from "./PopUpInput.types";

const PopUpInput: React.FC<PopUpInputProps> = ({
  htmlFor,
  label,
  type,
  id,
  placeholder,
  autocomplete,
}) => {
  return (
    <>
      <label htmlFor={htmlFor}>
        <span className="asterisk">*</span> {label}
      </label>
      <br />
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        autoComplete={autocomplete}
      />
    </>
  );
};

export default PopUpInput;
