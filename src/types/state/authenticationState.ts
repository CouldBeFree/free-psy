import { CurrentUser } from "../currentUser";

export interface AuthenticationState {
  isSubmitting: boolean;
  isAuthenticated: boolean | null;
  currentUser: null | CurrentUser;
  validationBackendErrors: null | string;
}