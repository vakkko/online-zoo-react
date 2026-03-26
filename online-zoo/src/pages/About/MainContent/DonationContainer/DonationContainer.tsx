import React from "react";

import "./DonationContainer.scss";

const DonationContainer: React.FC = () => {
  return (
    <div className="donation-container">
      <div>
        <h3>Your donation makes a difference!</h3>
        <p>
          The Online Zoo's animal webcams are some of the most famous on the
          internet. Tune in to watch your favourite animals — live, 24/7!
        </p>
      </div>
      <div className="donation-button-box">
        <h4>Quick Donate</h4>
        <button className="btn-donate">
          $ donation amount
          <img src="/images/about/arrow-right.png" alt="right arrow" />
        </button>
      </div>
    </div>
  );
};

export default DonationContainer;
