import { Data, Meta } from "../App.types"


export type UpdateUser = {
  first_name?: string,
  last_name?: string | null
}
export type ApiResponse = {
  status: number;
  payload: {
    message: string
    data?: Data
    errors?: string[]
  }
  success: boolean
}
export type UserIndexResponse = {
  status: number,
  payload?: {
    data: Data[],
    meta: Meta
  },
  success?: boolean,
  error?: string
}