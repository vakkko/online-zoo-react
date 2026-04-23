import React, { useState } from "react";

import { Link } from "react-router";

import PageNavigation from "../PageNavigation/PageNavigation";
import SocialNetworks from "../SocialNetworks/SocialNetworks";

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
            <img src="./images/about/profile.png" alt="user" />
            <span className="user-name hidden"></span>
          </button>
          {showAuthorization && (
            <div className="authorization-box">
              <ul>
                <li>
                  <Link to={"login"}>Sign in</Link>
                </li>
                <li>
                  <Link to={"register"}>Register</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div id="auth-overlay" className="hidden"></div>
        <button className="btn-humburger-menu">
          <img src="../../assets/images/hamburger.png" alt="hamburger menu" />
        </button>
      </div>
    </header>
  );
};

export default Header;
