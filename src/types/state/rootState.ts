import { UsersState } from "./usersState";
import { AuthenticationState } from "./authenticationState";
import { RespondentState } from "./respondentState";
import { SliderState } from "./sliderState";

export interface RootState {
  "authentication" : AuthenticationState;
  "users" : UsersState;
  "respondent": RespondentState;
  "slider": SliderState;
}