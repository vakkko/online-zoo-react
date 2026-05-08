import type { Dispatch, SetStateAction } from "react";

export interface PopUpInputProps {
  htmlFor: string;
  label: string;
  type: string;
  id: string;
  placeholder: string;
  autocomplete: string;
  value: string;
  setState: Dispatch<SetStateAction<string>>;
}
