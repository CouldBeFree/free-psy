import { AxiosResponse } from "axios";
import { CurrentUser } from "../types/currentUser";

export const correctionUrl = (response: AxiosResponse): CurrentUser => {
  const currentUser = response.data.data;
  if (currentUser.photo) {
    currentUser.photo = `http://localhost:5050/${currentUser.photo.replace("\\", "/")}`;
  }
  return currentUser;
}