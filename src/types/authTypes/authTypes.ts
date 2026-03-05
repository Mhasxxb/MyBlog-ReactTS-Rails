import { Data } from "../App.types";

export type AuthApiResponse = {
  status: number;
  payload: {
    status: {
      message: string
      errors?: string[]
    },
    data?: Data
  },
  token?: string
}

export type User = {
  first_name?: string,
  last_name?: string | null,
  email: string,
  password: string
}
