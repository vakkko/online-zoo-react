import * as yup from "yup";

const loginRegex = /^[a-zA-Z ]/;
const passwordRegex = /^(?=.*[^a-zA-Z0-9])[a-zA-Z]/;
const nameRegex = /^[a-zA-Z\s]+$/;

const requiredText = (name: string) => name + " is required";

export const LoginSchema = yup.object({
  login: yup
    .string()
    .required(requiredText("Login"))
    .min(3, "Should be at least 3 characters long")
    .matches(loginRegex, "Login should start with a letter"),
  password: yup
    .string()
    .required(requiredText("Password"))
    .min(7, "Should be at least 6 characters long")
    .matches(passwordRegex, "Should contain at least 1 specail character"),
});

export const RegisterSchema = LoginSchema.concat(
  yup.object({
    email: yup.string().email("Invalid Email").required(requiredText("Email")),
    confirm_password: yup
      .string()
      .required()
      .oneOf([yup.ref("password")], "Passwords must match"),
    name: yup
      .string()
      .required(requiredText("Name"))
      .min(3, "At least 3 characters")
      .matches(nameRegex, "Only English letters are allowed"),
  }),
);

export type LoginSchemaTypes = yup.InferType<typeof LoginSchema>;
export type ResgisterSchemaTypes = yup.InferType<typeof RegisterSchema>;
