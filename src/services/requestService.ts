import axios, { AxiosResponse } from "axios";
import { CurrentUser } from "../types/currentUser";
import { MessageInterface } from "../types/messageInterface";
import { PrimaryInfoFormData } from "../types/primaryInfoFormData";
import { correctionUrl } from "./correctionUrlService";
import { persistanceService } from "./persistenceService";

const instance = axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:5050/api/v1/',
  headers: {
    'Content-Type': 'application/json'
  }
});

export const authApi = {
  register: (name: string, password: string, email: string, userType: string): Promise<AxiosResponse> => {

    return instance.post("auth/register", {name, email, password, userType })
      .then(response => {
        axios.defaults.headers.common = {'Authorization': `Bearer ${response.data.token}`};
        return response.data.token});
  },

  authMe: (): Promise<CurrentUser> => {
    

    const token = persistanceService.get('psy-free-token');

    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };

    return instance.get("auth/me", config)
      .then(response => correctionUrl(response.data.data));
  },

  login: ( email: string,  password: string ): Promise<AxiosResponse> => {  
    return instance.post("auth/login", { password, email })
      .then(response => {
        axios.defaults.headers.common = {'Authorization': `Bearer ${response.data.token}`};
        return response.data.token});
  },

  logout: (): Promise<AxiosResponse> => {  
    return instance.get("auth/logout");
  }
}

export const profileApi = {
  setPhoto: (file: File, id: string): Promise<CurrentUser> => {
    const formData = new FormData();
    formData.append('thumb', file);
    return instance.put(`/users/${id}`, formData, { headers: { 'Content-Type': 'multipart/form-data' } })
      .then(response => correctionUrl(response.data.data));
  },
  setInfo: (primaryInfo: PrimaryInfoFormData, id: string): Promise<CurrentUser> => {

    return instance.put(`/users/${id}`, primaryInfo )
      .then(response => correctionUrl(response.data.data));
  }
}

export const usersApi = {
  getUsers: (userType: string): Promise<CurrentUser[]> => {
    const token = persistanceService.get('psy-free-token');

    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };

    const queryParams: { [key: string]: string } = {
      'user': 'psychologist',
      'psychologist': 'user'
    }
    return instance.get(`users?user=${queryParams[userType]}`)
      .then(response => response.data.data.map((user: CurrentUser) => correctionUrl(user)));
  },
  getMessages: (name: string): Promise<MessageInterface[]> => {
    
    const token = persistanceService.get('psy-free-token');

    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };
    
    return instance.get("/users/messages", {
      params: {
        user: name
      }
    }).then(response => response.data.data);
  }
}

