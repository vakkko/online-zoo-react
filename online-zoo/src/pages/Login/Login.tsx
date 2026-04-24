import React from "react";

import { useNavigate } from "react-router";

import { useForm, type SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import axios from "axios";

import { LoginSchema, type LoginSchemaTypes } from "../../schemas/AuthSchema";

import InputAndLabel from "../../components/InputAndLabel/InputAndLabel";

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

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<LoginSchemaTypes> = (data) => {
    async function sendData() {
      try {
        const response = await axios.post(`${BASE_URL}/auth/login`, data);
        console.log("response", response);
        if (response.statusText !== "OK") {
          throw new Error("Somegin went wrong");
        }
        navigate("/");
      } catch (err) {
        console.error(err);
      }
    }
    sendData();
  };

  return (
    <main className="authorization-main">
      <div className="registration-container">
        <div className="registration-card">
          <h3>Sign In</h3>
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

            <button disabled={!isValid} type="submit">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Login;
