import { CurrentUser } from "../currentUser";
import { MessageInterface } from "../messageInterface";

export interface RespondentState {
  currentRespondent: null | CurrentUser;
  messages: { [key: string]: MessageInterface[];};
  isSubmitting: boolean;
  isLoading: boolean;
  backendErrors: null | string;
}