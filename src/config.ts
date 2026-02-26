export const API_URL: string = "http://localhost:4000/"

export function capitalize(str: string): string {
  // Access the first character, convert to uppercase, and concatenate with the rest of the string
  return str.charAt(0).toUpperCase() + str.slice(1);
}