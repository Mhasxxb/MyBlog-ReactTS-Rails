import { api } from "../apiAxiosWrapper"
import { API_URL } from "../../config"
import { ApiArticleResponse, ApiArticle } from "../../types/articlesType/articlesType"

export const updateArticleApi = async (
    path: string,
    id: string,
    article: ApiArticle
): Promise<ApiArticleResponse> => {
    const token = localStorage.getItem("authToken");
    if (!token) {
        // Handle missing token, e.g., by returning an error or redirecting.
        return Promise.reject(new Error('Auth token not found'));
    }

    try {
        const response = await api.patch(
            `${API_URL}${path}/articles/${id}`,
            { article: article },
            {
                headers: {
                    Accept: "application/json",
                    Authorization: `Bearer ${token}`
                }
            })
        const result: ApiArticleResponse = {
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
