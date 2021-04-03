import { RegisterFormDataInteface } from "../registerFormData";

export interface FetchRegisterAction {
  type: string;
  payload: RegisterFormDataInteface;
}