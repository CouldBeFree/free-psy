import { CurrentUserInterface } from "./currentUser";

export interface SetCurrentUserActionInterface {
  type: string;
  payload: CurrentUserInterface
}