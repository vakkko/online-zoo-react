import * as yup from "yup";

const loginRegex = /^[a-zA-Z ]/;
const passwordRegex = /^(?=.*[^a-zA-Z0-9])[a-zA-Z]/;

const requiredText = (name: string) => name + " is required";

export const LoginSchema = yup.object({
  login: yup
    .string()
    .required(requiredText("Login"))
    .min(4, "Should be at least 3 characters long")
    .matches(loginRegex, "Login should start with a letter"),
  password: yup
    .string()
    .required(requiredText("Password"))
    .min(7, "Should be at least 6 characters long")
    .matches(passwordRegex, "Should contain at least 1 specail character"),
});

export type LoginSchemaTypes = yup.InferType<typeof LoginSchema>;
