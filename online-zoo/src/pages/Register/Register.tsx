"use client";

import React, { useState } from "react";

import axios from "axios";

import { useForm, type SubmitHandler } from "react-hook-form";

import AuthForm from "@/components/AuthForm/AuthForm";
import InputAndLabel from "@/components/InputAndLabel/InputAndLabel";

import {
  type ResgisterSchemaTypes,
  RegisterSchema,
} from "@/schemas/AuthSchema";
import { yupResolver } from "@hookform/resolvers/yup";

import "../../styles/Authorization.scss";
import { BASE_URL } from "@/consts/consts";
import { useRouter } from "next/navigation";

const Register: React.FC = () => {
  const [serverError, setServerError] = useState<string>("");
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<ResgisterSchemaTypes>({
    resolver: yupResolver(RegisterSchema),
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<ResgisterSchemaTypes> = (data) => {
    const { confirm_password, ...otherData } = data;
    async function sendData() {
      try {
        const response = await axios.post(
          `${BASE_URL}/auth/register`,
          otherData,
        );

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
    <AuthForm heading="Register">
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputAndLabel
          label="Login"
          name="login"
          type="text"
          placeholder="Enter username"
          autocomplete="off"
          register={register}
          errors={errors}
        />

        <InputAndLabel
          label="Email"
          name="email"
          type="email"
          placeholder="Enter email"
          autocomplete="email"
          register={register}
          errors={errors}
        />

        <InputAndLabel
          label="Password"
          name="password"
          type="password"
          placeholder="Password"
          autocomplete="new-password"
          register={register}
          errors={errors}
        />

        <InputAndLabel
          label="Confirm password"
          name="confirm_password"
          type="password"
          placeholder="Confirm password"
          autocomplete="new-password"
          register={register}
          errors={errors}
        />

        <InputAndLabel
          label="Name"
          name="name"
          type="text"
          placeholder="name"
          autocomplete="username"
          register={register}
          errors={errors}
        />
        {serverError && <p className="error-message">{serverError}</p>}
        <button disabled={!isValid} type="submit">
          Register
        </button>
      </form>
    </AuthForm>
  );
};

export default Register;
