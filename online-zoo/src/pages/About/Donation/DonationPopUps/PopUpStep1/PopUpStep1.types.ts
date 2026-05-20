import type { Dispatch, SetStateAction } from "react";

export interface PopUpStep1Props {
  handleNextClick: () => void;
  amount: string;
  setAmount: Dispatch<SetStateAction<string>>;
  petId: string;
  setPetId: Dispatch<SetStateAction<string>>;
}
