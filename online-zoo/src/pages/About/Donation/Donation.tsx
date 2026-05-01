import React, { useState } from "react";

import DonationPopUps from "./DonationPopUps/DonationPopUps";

import "./Donation.scss";

const Donation: React.FC = () => {
  const [showDonationPopUp, setShowDonationPopUp] = useState<boolean>(false);
  const [showInitialPopUp, setShowInitialPopUp] = useState<boolean>(true);

  const handleShowPopUp = () => {
    setShowDonationPopUp(true);
    setShowInitialPopUp(true);
  };

  const handleInitialPopUpClose = () => {
    setShowInitialPopUp(false);
  };

  return (
    <>
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
          <button onClick={handleShowPopUp} className="btn-donate">
            $ donation amount
            <img src="/images/about/arrow-right.png" alt="right arrow" />
          </button>
        </div>
      </div>
      {showDonationPopUp && (
        <DonationPopUps
          showInitialPopUp={showInitialPopUp}
          handleInitialPopUpClose={handleInitialPopUpClose}
        />
      )}
    </>
  );
};

export default Donation;
