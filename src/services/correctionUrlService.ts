import { CurrentUser } from "../types/currentUser";

export const correctionUrl = (currentUser: CurrentUser): CurrentUser => {
  if (currentUser.photo) {
    currentUser.photo = `http://localhost:5050/${currentUser.photo.replace("\\", "/")}`;
  }
  return currentUser;
}