"use client";

import React, { useState } from "react";

import { useRouter } from "next/navigation";

import PageNavigation from "../PageNavigation/PageNavigation";
import SocialNetworks from "../SocialNetworks/SocialNetworks";

const Header: React.FC = () => {
  const [showAuthorization, setShowAuthorization] = useState<boolean>(false);

  const router = useRouter();

  const handleAuthorizationToggle = () => {
    setShowAuthorization((prev) => !prev);
  };

  const handleNavigate = (url: string) => {
    router.push(url);
    setShowAuthorization(false);
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
