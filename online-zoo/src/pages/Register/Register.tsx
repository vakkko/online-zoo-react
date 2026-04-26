"use client";

import React from "react";

import { useForm } from "react-hook-form";

import AuthForm from "@/components/AuthForm/AuthForm";
import InputAndLabel from "@/components/InputAndLabel/InputAndLabel";

import "../../styles/Authorization.scss";

const Register: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useForm();
  return (
    <AuthForm heading="Register">
      <form>
        <InputAndLabel
          label="Login"
          id="login"
          type="text"
          placeholder="Enter username"
          autocomplete="off"
          register={register}
          error={errors}
        />

        <InputAndLabel
          label="Email"
          id="email"
          type="email"
          placeholder="Enter email"
          autocomplete="email"
          register={register}
          errors={errors}
        />

        <InputAndLabel
          label="Password"
          id="password"
          type="password"
          placeholder="Password"
          autocomplete="new-password"
          register={register}
          errors={errors}
        />

        <InputAndLabel
          label="Confirm password"
          id="confirmpassword"
          type="password"
          placeholder="Confirm password"
          autocomplete="new-password"
          register={register}
          errors={errors}
        />

        <InputAndLabel
          label="Name"
          id="name"
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
