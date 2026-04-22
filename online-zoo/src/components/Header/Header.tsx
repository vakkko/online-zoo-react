import React from "react";

import PageNavigation from "../PageNavigation/PageNavigation";
import SocialNetworks from "../SocialNetworks/SocialNetworks";

const Header: React.FC = () => {
  return (
    <header>
      <div className="logo-links">
        <img src="/images/about/logo.png" alt="zoo logo" />
        <PageNavigation />
        <SocialNetworks />
        <div className="user-box">
          <button className="user-avatar">
            <img src="./images/about/profile.png" alt="user" />
            <span className="user-name hidden"></span>
          </button>
          <div className="pop-up-authorization hidden">
            <button className="btn-cancel-auth">
              <img
                src="../../assets/images/donation-pop-up/x.png"
                alt="cancel icon"
              />
            </button>

            <h3>Would you like to sign in or register?</h3>
            <ul>
              <li>
                <a href="../signIn/index.html">Sign in</a>
              </li>
              <li>
                <a href="../register/index.html">Register</a>
              </li>
            </ul>
          </div>
          <div className="pop-up-sign-out hidden">
            <button className="btn-cancel-sign-out">
              <img
                src="../../assets/images/donation-pop-up/x.png"
                alt="cancel icon"
              />
            </button>
            <ul>
              <li className="user-name"></li>
              <li className="user-email"></li>
            </ul>
            <button className="btn-sign-out">Sign Out</button>
          </div>
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
