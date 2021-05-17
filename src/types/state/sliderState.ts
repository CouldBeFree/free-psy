import { CurrentUser } from "../currentUser";

export interface SliderState {
  users: CurrentUser[] | null,
  isLoading: boolean,
  validationBackendErrors: string | null,
}