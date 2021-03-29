import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://jsonplaceholder.typicode.com/todos/'
});

export const registerAPI = () => instance.get('1');