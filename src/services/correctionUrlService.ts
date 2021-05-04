import { CurrentUser } from "../types/currentUser";

export const correctionUrl = (currentUser: CurrentUser): CurrentUser => {
  if (currentUser.photo) {
    currentUser.photo = `https://server-psy-free.herokuapp.com/${currentUser.photo.replace("\\", "/")}`;
  }
  return currentUser;
}