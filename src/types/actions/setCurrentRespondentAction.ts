import { CurrentUser } from "../currentUser";

export interface SetCurrentRespondentAction {
  type: string;
  payload: CurrentUser;
}