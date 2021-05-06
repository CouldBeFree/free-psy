export const persistanceService = {

  set: (key: string, data: string): void => {
    localStorage.setItem(key, JSON.stringify(data));
  },
  
  get: (key: string): string => {
      const token: string | null = localStorage.getItem(key);
      return token && JSON.parse(token);
  },

  delete: (key: string): void => {
    localStorage.removeItem(key);
  }
}