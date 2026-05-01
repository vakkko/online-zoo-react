import { useState } from "react";

import InitialPopUp from "./InitialPopUp/InitialPopUp";

import "./DonationPopUps.scss";

const DonationPopUps: React.FC = () => {
  const [showInitialPopUp, setShowInitialPopUp] = useState<boolean>(true);

  const handleInitialPopUpClose = () => {
    setShowInitialPopUp(false);
  };

  console.log(showInitialPopUp);

  return (
    <div className="donation-pop-up-container">
      {showInitialPopUp && (
        <InitialPopUp handleInitialPopUpClose={handleInitialPopUpClose} />
      )}
    </div>
  );
};

export default DonationPopUps;
