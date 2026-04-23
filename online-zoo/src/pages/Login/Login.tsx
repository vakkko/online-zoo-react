import React from "react";

import { useForm } from "react-hook-form";

import InputAndLabel from "../../components/InputAndLabel/InputAndLabel";

import "../../styles/Authorization.scss";

const Login: React.FC = () => {
  const { register } = useForm();

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
