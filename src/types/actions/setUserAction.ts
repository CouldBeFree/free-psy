import { UsersStatus } from "../usersStatus";

export interface SetUserAction {
  type: string;
  payload: UsersStatus[];
}