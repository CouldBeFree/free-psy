import { UsersState } from "./usersState";
import { AuthenticationState } from "./authenticationState";
import { RespondentState } from "./respondentState";

export interface RootState {
  "authentication" : AuthenticationState;
  "users" : UsersState;
  "respondent": RespondentState;
}