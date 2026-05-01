import InitialPopUp from "./InitialPopUp/InitialPopUp";

import "./DonationPopUps.scss";

const DonationPopUps: React.FC = () => {
  return (
    <div className="donation-pop-up-container">
      <InitialPopUp />
    </div>
  );
};

export default DonationPopUps;
