import { CurrentUser } from "../currentUser";

export interface GetUserSlidersSuccessAction {
  type: string;
  payload: CurrentUser[];
}