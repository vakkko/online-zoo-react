import React from "react";

import type { AuthFormProps } from "./AuthForm.types";

const AuthForm: React.FC<AuthFormProps> = ({ children, heading }) => {
  return (
    <main className="authorization-main">
      <div className="registration-container">
        <div className="registration-card">
          <h3>{heading}</h3>
          {children}
        </div>
      </div>
    </main>
  );
};

export default AuthForm;
