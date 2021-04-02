import { CurrentUserInterface } from "./currentUser";

export interface AuthenticationStateInterface {
  isSubmitting: boolean;
  isAuthenticated: boolean | null;
  currentUser: null | CurrentUserInterface;
  validationErrors: null;
}