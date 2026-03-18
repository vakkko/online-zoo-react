import React from "react";

const SocialNetworks: React.FC = () => {
  return (
    <div className="social-networks">
      <a
        href="https://www.youtube.com/@RSSchool"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/images/about/youTube.png" alt="youtube logo" />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.instagram.com/rsschool_en?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
      >
        <img src="/images/about/instagram.png" alt="instagram logo" />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.facebook.com/rsschoolEN"
      >
        <img src="/images/about/facebook.png" alt="facebook logo" />
      </a>
    </div>
  );
};

export default SocialNetworks;
