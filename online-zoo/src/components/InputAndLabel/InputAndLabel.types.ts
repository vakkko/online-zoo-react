import type { FieldErrors, UseFormRegister } from "react-hook-form";
import type {
  LoginSchemaTypes,
  ResgisterSchemaTypes,
} from "../../schemas/AuthSchema";

export interface InputAndLabelProps {
  label: string;
  type: string;
  name: "login" | "password" | "name" | "email" | "confirm_password";
  placeholder: string;
  autocomplete: string;
  register: UseFormRegister<LoginSchemaTypes | ResgisterSchemaTypes>;
  errors: FieldErrors<ResgisterSchemaTypes>;
}
