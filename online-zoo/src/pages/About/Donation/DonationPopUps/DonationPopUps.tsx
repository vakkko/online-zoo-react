import { useState } from "react";

import InitialPopUp from "./InitialPopUp/InitialPopUp";
import PopUpStep1 from "./PopUpStep1/PopUpStep1";

import type { DonationPopUpsProps } from "./DonationPopUps.types";

import "./DonationPopUps.scss";

const DonationPopUps: React.FC<DonationPopUpsProps> = ({
  handleInitialPopUpClose,
  showInitialPopUp,
}) => {
  const [showStep1, setShowStep1] = useState<boolean>(false);

  const handleShowStep1 = () => {
    setShowStep1(true);
  };

  return (
    <div className="donation-pop-up-container">
      {showInitialPopUp && (
        <InitialPopUp
          handleShowStep1={handleShowStep1}
          handleInitialPopUpClose={handleInitialPopUpClose}
        />
      )}
      {showStep1 && <PopUpStep1 />}
    </div>
  );
};

export default DonationPopUps;
