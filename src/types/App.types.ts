

export type MismatchError = {
  message: string
}

export type Meta = {
  limit: number,
  offset: number,
  count: number
}


export type Delete = {
  status?: {
    message: string
  },
  success: boolean
}

export type Payload = {
  status: { message: string },
  data: Data
}
export type Data = {
  id: number,
  first_name: string,
  last_name: string,
  email: string,
  created_at: string
  article_count: number
}
