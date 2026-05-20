import { useEffect, useState, type Dispatch, type SetStateAction } from "react";

import InitialPopUp from "./InitialPopUp/InitialPopUp";
import PopUpStep1 from "./PopUpStep1/PopUpStep1";
import PopUpStep2 from "./PopUpStep2/PopUpStep2";
import PopUpStep3 from "./PopUpStep3/PopUpStep3";

import type { DonationPopUpsProps } from "./DonationPopUps.types";

import { emailRegex, nameRegex } from "@/schemas/AuthSchema";

import "./DonationPopUps.scss";
import axios from "axios";
import { BASE_URL } from "@/consts/consts";

const DonationPopUps: React.FC<DonationPopUpsProps> = ({
  handleInitialPopUpClose,
  showInitialPopUp,
}) => {
  const [showStep1, setShowStep1] = useState<boolean>(false);
  const [showStep2, setShowStep2] = useState<boolean>(false);
  const [showStep3, setShowStep3] = useState<boolean>(false);

  const [amount, setAmount] = useState<string>("");
  const [petId, setPetId] = useState<string>("");
  const [name, setName] = useState<string | null>(() =>
    sessionStorage.getItem("name"),
  );
  const [email, setEmail] = useState<string | null>(() =>
    sessionStorage.getItem("email"),
  );

  const handleShowStep = (
    setShowStep: Dispatch<SetStateAction<boolean>>,
    setCloseStep?: Dispatch<SetStateAction<boolean>>,
  ) => {
    setShowStep(true);
    if (setCloseStep) setCloseStep(false);
  };

  const enableNextStep1 = amount.length && petId.length;
  const enableNextStep2 =
    name &&
    email &&
    name.length > 3 &&
    nameRegex.test(name) &&
    emailRegex.test(email);

  const handlePostData = async () => {
    try {
      if (!enableNextStep1 && !enableNextStep2) return;
      const amountToNum = Number(amount);
      const petIdToNum = Number(petId);
      const response = await axios.post(`${BASE_URL}/donations`, {
        name,
        email,
        amount: amountToNum,
        petId: petIdToNum,
      });
    } catch (e) {
      console.error(e);
    }
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
          amount={amount}
          setAmount={setAmount}
          petId={petId}
          setPetId={setPetId}
          enableNextStep1={enableNextStep1}
        />
      )}
      {showStep2 && (
        <PopUpStep2
          handleNextClick={() => handleShowStep(setShowStep3, setShowStep2)}
          handleBackClick={() => handleShowStep(setShowStep1, setShowStep2)}
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          enableNextStep2={enableNextStep2}
        />
      )}
      {showStep3 && (
        <PopUpStep3
          handleBackClick={() => handleShowStep(setShowStep2, setShowStep3)}
          handlePostData={handlePostData}
        />
      )}
    </div>
  );
};

export default DonationPopUps;
