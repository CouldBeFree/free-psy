import { FieldValidator } from 'final-form';

export const required = (value: string): string | undefined => (value ? undefined : 'Заповніть поле');
export const minLength = (amount: number): Function => (value: string): string | undefined => (value.length < amount ? `Введіть мінімум ${amount} символи` : undefined);
export const maxLength = (amount: number): Function => (value: string): string | undefined => (value.length > amount ? `Дозволено максимум ${amount} символи` : undefined);
export const repeatPassword = (previousPassword: string): Function => (value: string): string | undefined => (value === previousPassword ? undefined : 'Паролі не співпадають');
export const composeValidators = (...validators: Array<Function>): FieldValidator<string> => (value: string): string | undefined => {
  return validators.reduce((error, validator) => error || validator(value), undefined);
}