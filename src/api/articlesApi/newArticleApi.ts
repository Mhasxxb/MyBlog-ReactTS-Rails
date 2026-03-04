import { api } from "../apiAxiosWrapper"
import { API_URL } from "../../config"
import { ApiArticleResponse, ApiArticle } from "../../types/articlesType/articlesType"

export const newArticleApi = async (
    path: string,
    article: ApiArticle
): Promise<any> => {
    const token = localStorage.getItem("authToken");
    if (!token) {
        // Handle missing token, e.g., by returning an error or redirecting.
        return Promise.reject(new Error('Auth token not found'));
    }

    try {
        const response = await api.post(
            `${API_URL}${path}/articles/`,
            { article: article },
            {
                headers: {
                    Accept: "application/json",
                    Authorization: `Bearer ${token}`
                }
            })

        console.log(response);
        const result: ApiArticleResponse = {
            id: response.data.article.id,
            message: response.data.message,
            status: response.status,
            success: true
        }
        return result
    }
    catch (error: any) {
        console.log(error.response);
        const result: ApiArticleResponse = {
            error: error.response.data.error,
            status: error.response.status,
            success: false
        }
        return result
    }

}