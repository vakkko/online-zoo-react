import React from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { LoginSchema, type LoginSchemaTypes } from "../../schemas/AuthSchema";

import InputAndLabel from "../../components/InputAndLabel/InputAndLabel";

import "../../styles/Authorization.scss";

const Login: React.FC = () => {
  const { register } = useForm<LoginSchemaTypes>({
    resolver: yupResolver(LoginSchema),
    mode: "onBlur",
  });

  return (
    <main className="authorization-main">
      <div className="registration-container">
        <div className="registration-card">
          <h3>Sign In</h3>
          <form>
            <InputAndLabel
              label="Log in"
              type="text"
              name="login"
              autocomplete="off"
              placeholder="Enter username"
              register={register}
            />

            <InputAndLabel
              label="Password"
              type="password"
              name="password"
              autocomplete="new-password"
              placeholder="Password"
              register={register}
            />

            <button disabled type="submit">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Login;
