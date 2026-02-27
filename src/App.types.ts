export type User = {
  first_name?: string,
  last_name?: string | null,
  email: string,
  password: string
}
export type UpdateUser = {
  first_name?: string,
  last_name?: string | null
}
export type Data = {
  id: number,
  first_name: string,
  last_name: string,
  email: string,
  created_at: string
}
export type ApiResponse = {
  status: number;
  payload: {
    status: {
      message: string
    },
    data?: Data
  }
  success: boolean
}
export type AuthApiResponse = {
  status: number;
  payload: {
    status: {
      message: string
    },
    data?: Data
  },
  token?: string
}
export type Payload = {
  status: { message: string },
  data: Data
}
export type MismatchError = {
  error: string
}

export interface AuthContextType {
  isAuthenticated: boolean;
  login: (token: string, userId: string) => void;
  logout: () => void;
}
type Meta = {
  count: number,
  limit: number,
  offset: number
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
export interface PaginationContextType {
  limit: number;
  offset: number;
  totalCount: number;
  currentPage: number;
  totalPages: number;
  goNext: () => void;
  goPrev: () => void;
  setTotalCount: (count: number) => void;
}
export type Delete = {
  status?: {
    message: string
  }
  success: boolean
}
// "status": {
// "message": "Bye! Your account has been successfully cancelled. We hope to see you again soon."
// }