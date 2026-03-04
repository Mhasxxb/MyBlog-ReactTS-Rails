import { ArticleIndexType } from "../../types/articlesType/articlesType"
import { API_URL } from "../../config"
import { api } from "../apiAxiosWrapper"


export const articleIndexApi = async (path: string, offset: number = 0, limit: number = 3): Promise<any> => {
    const token = localStorage.getItem("authToken")
    try {
        const response = await api.get(`${API_URL}${path}?limit=${limit}&offset=${offset}`, {
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${token}`
            }
        })
        let result: ArticleIndexType = {
            response: response.data,
            success: true
        }
        return result
    }
    catch (error: any) {
        let result: ArticleIndexType = {
            response: error.response.data,
            success: false
        }
        return result
    }
}