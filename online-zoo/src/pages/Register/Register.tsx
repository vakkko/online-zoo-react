"use client";

import React from "react";

import { useForm } from "react-hook-form";

import AuthForm from "@/components/AuthForm/AuthForm";
import InputAndLabel from "@/components/InputAndLabel/InputAndLabel";

import "../../styles/Authorization.scss";
import {
  type ResgisterSchemaTypes,
  RegisterSchema,
} from "@/schemas/AuthSchema";
import { yupResolver } from "@hookform/resolvers/yup";

const Register: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useForm<ResgisterSchemaTypes>({
    resolver: yupResolver(RegisterSchema),
    mode: "onBlur",
  });
  return (
    <AuthForm heading="Register">
      <form>
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

        <button type="submit">Register</button>
      </form>
    </AuthForm>
  );
};

export default Register;
