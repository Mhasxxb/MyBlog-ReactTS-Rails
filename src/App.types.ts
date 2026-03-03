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
  article_count: number
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
export type ApiArticleResponse = {
  id?: number,
  message?: string,
  error?: string[],
  status: number,
  success: boolean
}
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
export type ApiArticle = {
  title: string,
  description: string
}
export type Payload = {
  status: { message: string },
  data: Data
}
export type MismatchError = {
  message: string
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
export type Article = {
  id: number,
  title: string,
  description: string,
  writer: string,
  user_id: number
  created_at: string
}
export type ArticleIndexType = {
  response: {
    articles?: Article[],
    meta?: Meta,
    error?: string
  }
  success: boolean
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
  resetOffset: () => void
}
export type Delete = {
  status?: {
    message: string
  },
  success: boolean
}
export type ShowArticle = {
  data?: Article,
  error?: string,
  success: boolean
}
// "status": {
// "message": "Bye! Your account has been successfully cancelled. We hope to see you again soon."
// }