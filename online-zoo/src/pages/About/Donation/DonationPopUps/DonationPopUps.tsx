import { useState, type Dispatch, type SetStateAction } from "react";

import InitialPopUp from "./InitialPopUp/InitialPopUp";
import PopUpStep1 from "./PopUpStep1/PopUpStep1";

import type { DonationPopUpsProps } from "./DonationPopUps.types";

import "./DonationPopUps.scss";
import PopUpStep2 from "./PopUpStep2/PopUpStep2";
import PopUpStep3 from "./PopUpStep3/PopUpStep3";

const DonationPopUps: React.FC<DonationPopUpsProps> = ({
  handleInitialPopUpClose,
  showInitialPopUp,
}) => {
  const [showStep1, setShowStep1] = useState<boolean>(false);
  const [showStep2, setShowStep2] = useState<boolean>(false);
  const [showStep3, setShowStep3] = useState<boolean>(false);

  const handleShowStep = (
    setShowStep: Dispatch<SetStateAction<boolean>>,
    setCloseStep?: Dispatch<SetStateAction<boolean>>,
  ) => {
    setShowStep(true);
    if (setCloseStep) setCloseStep(false);
  };

  return (
    <div className="donation-pop-up-container">
      {showInitialPopUp && (
        <InitialPopUp
          handleShowStep1={() => handleShowStep(setShowStep1)}
          handleInitialPopUpClose={handleInitialPopUpClose}
        />
      )}
      {showStep1 && (
        <PopUpStep1
          handleNextClick={() => handleShowStep(setShowStep2, setShowStep1)}
        />
      )}
      {showStep2 && (
        <PopUpStep2
          handleNextClick={() => handleShowStep(setShowStep3, setShowStep2)}
        />
      )}
      {showStep3 && <PopUpStep3 />}
    </div>
  );
};

export default DonationPopUps;
