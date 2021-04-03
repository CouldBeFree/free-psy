import { LoginFormData } from "../loginFormData";

export interface FetchLoginAction {
  type: string;
  payload: LoginFormData;
}