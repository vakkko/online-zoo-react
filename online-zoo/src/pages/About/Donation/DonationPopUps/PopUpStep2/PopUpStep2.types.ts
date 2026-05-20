import type { Dispatch, SetStateAction } from "react";

export interface PopUpStep2Props {
  handleNextClick: () => void;
  handleBackClick: () => void;
  name: string | null;
  setName: Dispatch<SetStateAction<string | null>>;
  email: string | null;
  setEmail: Dispatch<SetStateAction<string | null>>;
  enableNextStep2: boolean | "" | null;
}
