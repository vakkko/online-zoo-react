import React from "react";

import "./HeroBanner.scss";

const HeroBanner: React.FC = () => {
  return (
    <div className="panda-container">
      <h1>Watch your favorite animal online</h1>
      <p>
        Explore the exciting and mysterious world of wild animals in a natural
        setting without leaving your home.
      </p>
      <button>
        view live cam
        <img src="/images/about/arrow-right.png" alt="right arrow" />
      </button>
    </div>
  );
};

export default HeroBanner;
