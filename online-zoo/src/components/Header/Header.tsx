"use client";

import React, { useState } from "react";

import PageNavigation from "../PageNavigation/PageNavigation";
import SocialNetworks from "../SocialNetworks/SocialNetworks";
import AuthorizationBox from "./AuthorizationBox/AuthorizationBox";

const Header: React.FC = () => {
  const [showAuthorization, setShowAuthorization] = useState<boolean>(false);

  const handleAuthorizationToggle = () => {
    setShowAuthorization((prev) => !prev);
  };

  return (
    <header>
      <div className="logo-links">
        <img src="/images/about/logo.png" alt="zoo logo" />
        <PageNavigation />
        <SocialNetworks />
        <div className="user-box">
          <button onClick={handleAuthorizationToggle} className="user-avatar">
            <img src="/images/about/profile.png" alt="user" />
            <span className="user-name hidden"></span>
          </button>
          {showAuthorization && (
            <AuthorizationBox setShowAuthorization={setShowAuthorization} />
          )}
        </div>
        <div id="auth-overlay" className="hidden"></div>
        <button className="btn-humburger-menu">
          <img src="/images/about/hamburger.png" alt="hamburger menu" />
        </button>
      </div>
    </header>
  );
};

export default Header;
