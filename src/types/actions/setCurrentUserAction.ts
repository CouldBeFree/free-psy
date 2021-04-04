import { CurrentUser } from "../currentUser";

export interface SetCurrentUserAction {
  type: string;
  payload: CurrentUser
}