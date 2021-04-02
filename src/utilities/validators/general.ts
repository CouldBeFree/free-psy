import { FieldValidator } from 'final-form';

export const required: FieldValidator<string> = (value) => (value ? undefined : 'Заповніть поле');
export const minLength = (amount: number): FieldValidator<string> => (value) => (value.length < amount ? `Введіть мінімум ${amount} символи` : undefined);
export const maxLength = (amount: number): FieldValidator<string> => (value) => (value.length > amount ? `Дозволено максимум ${amount} символи` : undefined);
export const repeatPassword = (previousPassword: string): FieldValidator<string> => (value) => (value === previousPassword ? undefined : 'Паролі не співпадають');
export const composeValidators = (...validators: Array<FieldValidator<string>>): FieldValidator<string> => (value, allValues) => {
  return validators.reduce((error, validator) => error || validator(value, allValues), undefined);
}