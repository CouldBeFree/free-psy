import { CurrentUser } from "../currentUser";
import { MessageInterface } from "../messageInterface";

export interface RespondentState {
  currentRespondent: null | CurrentUser;
  messages: null | MessageInterface[];
  isSubmitting: boolean;
  isLoading: boolean;
  backendErrors: null | string;
}