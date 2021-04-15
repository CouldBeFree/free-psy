import { PrimaryInfoFormData } from "../primaryInfoFormData";

export interface FetchSetInfoAction {
  type: string;
  payload: {
    primaryInfo: PrimaryInfoFormData;
    id: string;
  };
}