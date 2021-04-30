import { CurrentUser } from "../currentUser";

export interface GetUsersSuccessAction {
  type: string;
  payload: CurrentUser[];
}