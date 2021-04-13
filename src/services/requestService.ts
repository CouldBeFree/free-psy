import axios, { AxiosResponse } from "axios";
import { CurrentUser } from "../types/currentUser";
import { PrimaryInfoFormData } from "../types/primaryInfoFormData";
import { correctionUrl } from "./correctionUrlService";

const instance = axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:5050/',
  headers: {
    'Content-Type': 'application/json'
  }
});

export const authApi = {
  register: (name: string, password: string, email: string, userType: string): Promise<AxiosResponse> => {
    return instance.post("api/v1/auth/register", {name, email, password, userType });
  },

  authMe: (): Promise<CurrentUser> => {
    return instance.get("api/v1/auth/me")
      .then(response => correctionUrl(response));
  },

  login: ( email: string,  password: string ): Promise<AxiosResponse> => {  
    return instance.post("api/v1/auth/login", { password, email });
  },

  logout: (): Promise<AxiosResponse> => {  
    return instance.get("api/v1/auth/logout");
  }
}

export const profileApi = {
  setPhoto: (file: File, id: string): Promise<CurrentUser> => {
    const formData = new FormData();
    formData.append('thumb', file);
    return instance.put(`/api/v1/users/${id}`, formData, { headers: { 'Content-Type': 'multipart/form-data' } })
      .then(response => correctionUrl(response));
  },
  setInfo: (primaryInfo: PrimaryInfoFormData, id: string): Promise<CurrentUser> => {

    return instance.put(`/api/v1/users/${id}`, primaryInfo )
      .then(response => {
        return correctionUrl(response)});
  }
}

