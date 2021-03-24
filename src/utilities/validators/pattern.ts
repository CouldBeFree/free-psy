export const passwordPattern = (value: string): string | undefined => {
  const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  return value.match(pattern) ? undefined : "Введіть принаймні 1 велику літеру, 1 малу літеру та 1 цифру"
};

export const emailPattern = (value: string): string | undefined => {
  const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return value.match(pattern) ? undefined : "Введіть коректну адресу до і після '@'";
};