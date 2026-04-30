import React, { useState } from "react";

import { useRouter } from "next/navigation";

import axios from "axios";

import { useForm, type SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { LoginSchema, type LoginSchemaTypes } from "../../schemas/AuthSchema";

import InputAndLabel from "../../components/InputAndLabel/InputAndLabel";
import AuthForm from "../../components/AuthForm/AuthForm";

import { BASE_URL } from "../../consts/consts";

import "../../styles/Authorization.scss";

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginSchemaTypes>({
    resolver: yupResolver(LoginSchema),
    mode: "onBlur",
  });

  const [serverError, setServerError] = useState<string>();

  const router = useRouter();

  const onSubmit: SubmitHandler<LoginSchemaTypes> = (data) => {
    async function sendData() {
      try {
        const response = await axios.post(`${BASE_URL}/auth/login`, data);

        sessionStorage.setItem("name", response.data.data.user.name);
        sessionStorage.setItem("email", response.data.data.user.email);

        router.push("/");
      } catch (err: unknown) {
        if (axios.isAxiosError(err)) {
          const serverResponse = err.response?.data;
          setServerError(serverResponse?.error || "Unexpected error occured");
        }
      }
    }
    sendData();
  };

  return (
    <AuthForm heading="Log In">
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputAndLabel
          label="Log in"
          type="text"
          name="login"
          autocomplete="off"
          placeholder="Enter username"
          register={register}
          errors={errors}
        />

        <InputAndLabel
          label="Password"
          type="password"
          name="password"
          autocomplete="new-password"
          placeholder="Password"
          register={register}
          errors={errors}
        />
        {serverError && <p className="error-message">{serverError}</p>}
        <button disabled={!isValid} type="submit">
          Sign In
        </button>
      </form>
    </AuthForm>
  );
};

export default Login;
