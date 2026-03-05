import { Meta } from "../App.types"

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

export type ApiArticle = {
  title: string,
  description: string
}

export type ShowArticle = {
  data?: Article,
  error?: string,
  success: boolean
}

export type ApiArticleResponse = {
  id?: number,
  message?: string,
  error?: string[],
  status: number,
  success: boolean
}
