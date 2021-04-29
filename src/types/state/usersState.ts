import { CurrentUser } from "../currentUser";
import { UsersStatus } from "../usersStatus";

export interface UsersState {
  isSubmitting: boolean;
  isLoading: boolean;
  users: null | CurrentUser[];
  usersStatus: null | UsersStatus[];
  validationBackendErrors: null | string;
}