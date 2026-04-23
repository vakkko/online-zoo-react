import type { UseFormRegister } from "react-hook-form";
import type { LoginSchemaTypes } from "../../schemas/AuthSchema";

export interface InputAndLabelProps {
  label: string;
  type: string;
  name: "login" | "password";
  placeholder: string;
  autocomplete: string;
  register: UseFormRegister<LoginSchemaTypes>;
}
