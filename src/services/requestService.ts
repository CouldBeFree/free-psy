import axios, { AxiosResponse } from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:5050/',
  headers: {
    'Content-Type': 'application/json'
  }
});



export const authApi = {
  register: (name: string, password: string, email: string, userType: string): Promise<number> => {
    return instance.post("api/v1/auth/register", {name, email, password, userType }).then(response => response.status);
  },

  authMe: (): Promise<AxiosResponse> => {
    return instance.get("api/v1/auth/me");
  }
}

