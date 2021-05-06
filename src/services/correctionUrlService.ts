import { CurrentUser } from "../types/currentUser";

export const correctionUrl = (currentUser: CurrentUser): CurrentUser => {
  if (currentUser.photo) {
    currentUser.photo = `https://chat-server-app-node.herokuapp.com/api/v1/${currentUser.photo.replace("\\", "/")}`;
  }
  return currentUser;
}