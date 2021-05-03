import { FieldValidator } from 'final-form';

export const required: FieldValidator<string> = (value) => (value ? undefined : 'Заповніть поле');
export const minLength = (amount: number): FieldValidator<string> => (value) => (value.length < amount ? `Введіть мінімум ${amount} символи` : undefined);
export const maxLength = (amount: number): FieldValidator<string> => (value) => (value.length > amount ? `Дозволено максимум ${amount} символи` : undefined);
export const repeatPassword: FieldValidator<string> = (value, allValues: any) => {
  return (allValues.password === allValues.rePassword ? undefined : 'Паролі не співпадають')};
export const composeValidators = (...validators: Array<FieldValidator<string>>): FieldValidator<string> => (value, allValues) => {
  return validators.reduce((error, validator) => error || validator(value, allValues), undefined);
}

export const passwordPattern = (value: string): string | undefined => {
  const pattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}/;
  return value.match(pattern) ? undefined : "Введіть принаймні 1 цифру"
};

export const emailPattern = (value: string): string | undefined => {
  const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return value.match(pattern) ? undefined : "Введіть коректну адресу до і після '@'";
};