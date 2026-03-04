import { api } from "../apiAxiosWrapper"
import { API_URL } from "../../config"
import { ShowArticle } from "../../types/articlesType/articlesType"

export const articleApi = async (path: string, id: string | null): Promise<ShowArticle> => {
    const token = localStorage.getItem("authToken")
    try {
        const response = await api.get(`${API_URL}${path}/${id}`, {
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${token}`
            }
        })
        console.log(response.data.data)
        const result = {
            data: response.data.data,
            success: true
        }
        return result

    }
    catch (error: any) {
        const result: ShowArticle = {
            error: error.response.data,
            success: false
        }
        return result

    }
}