import { UsersState } from "./usersState";
import { AuthenticationState } from "./authenticationState";

export interface RootState {
  "authentication" : AuthenticationState;
  "users" : UsersState;
}