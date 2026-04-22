import React from "react";
import PageNavigation from "../PageNavigation/PageNavigation";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="logos-and-links">
        <div>
          <img src="./images/about/logo-white.png" alt="white-logo" />
          <img src="./images/about/yem-digital.png" alt="yem digital" />
          <img
            src="./images/about/rs-school-js-logo.png"
            alt="rs school logo"
          />
        </div>
        <PageNavigation />
        <button>
          donate for volunteers
          <img src="./images/about/arrow-right.png" alt="right arrow" />
        </button>
      </div>
      <hr />
      <div className="credits-and-social-networks">
        <div className="credits">
          <span>© 2021 DinaK </span>
          <span>© Yem Digital </span>
          <span>© RSSchool </span>
        </div>
        <div className="social-networks">
          <a
            href="https://www.youtube.com/@RSSchool"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./images/about/youTube.png" alt="youtube logo" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/rsschool_en?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          >
            <img src="./images/about/instagram.png" alt="instagram logo" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/rsschoolEN"
          >
            <img src="./images/about/facebook.png" alt="facebook logo" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
