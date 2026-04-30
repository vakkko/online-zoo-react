import React from "react";

import { useRouter } from "next/navigation";

import type { AuthorizationBoxInterface } from "./AuthorizationBox.types";

const AuthorizationBox: React.FC<AuthorizationBoxInterface> = ({
  setShowAuthorization,
}) => {
  const router = useRouter();
  const handleNavigate = (url: string) => {
    router.push(url);
    setShowAuthorization(false);
  };
  return (
    <div className="authorization-box">
      <ul>
        <li>
          <a onClick={() => handleNavigate("/login")}>Sign in</a>
        </li>
        <li>
          <a onClick={() => handleNavigate("/register")}>Register</a>
        </li>
      </ul>
    </div>
  );
};

export default AuthorizationBox;
