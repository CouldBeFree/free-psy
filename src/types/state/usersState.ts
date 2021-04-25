import { CurrentUser } from "../currentUser";

export interface UsersState {
  isSubmitting: boolean;
  isLoading: boolean;
  users: null | CurrentUser[];
  validationBackendErrors: null | string;
  currentRespondent: null | CurrentUser;
}