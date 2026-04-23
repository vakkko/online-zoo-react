import React from "react";

import "../../styles/Authorization.scss";

const Login: React.FC = () => {
  return (
    <main className="authorization-main">
      <div className="registration-container">
        <div className="registration-card">
          <h3>Sign In</h3>
          <form>
            <label htmlFor="login">Log in</label>
            <input
              type="text"
              id="login"
              min="3"
              placeholder="Enter username"
              required
              autoComplete="off"
            />
            <p className="err-msg login hidden">
              Login should be at least 3 characters and only Englishe letters
              are allowed
            </p>

            <label htmlFor="password">Password</label>
            <input
              placeholder="Password"
              type="password"
              id="password"
              min="6"
              autoComplete="new-password"
              required
            />
            <p className="err-msg password hidden">
              Passowrd should be at least 6 characters and 1 special character
            </p>

            <button disabled type="submit">
              Sign In
            </button>
          </form>
          <p className="response-msg hidden"></p>
        </div>
      </div>
    </main>
  );
};

export default Login;
