import InitialPopUp from "./InitialPopUp/InitialPopUp";

import "./DonationPopUps.scss";
import type { DonationPopUpsProps } from "./DonationPopUps.types";

const DonationPopUps: React.FC<DonationPopUpsProps> = ({
  handleInitialPopUpClose,
  showInitialPopUp,
}) => {
  return (
    <div className="donation-pop-up-container">
      {showInitialPopUp && (
        <InitialPopUp handleInitialPopUpClose={handleInitialPopUpClose} />
      )}
    </div>
  );
};

export default DonationPopUps;
