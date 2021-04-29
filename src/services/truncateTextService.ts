export const truncate = (text: string): string => {
  const maxLength = 100;
  return `${text.substring(0, maxLength)}...`
}