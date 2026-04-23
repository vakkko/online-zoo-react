import type { FieldValues, UseFormRegister } from "react-hook-form";

export interface InputAndLabelProps {
  label: string;
  type: string;
  name: string;
  placeholder: string;
  autocomplete: string;
  register: UseFormRegister<FieldValues>;
}
