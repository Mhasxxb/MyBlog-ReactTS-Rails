import { api } from "../api"
import { API_URL } from "../../config"
import { ApiArticleResponse, ApiArticle } from "../../App.types"

export const updateArticleApi = async (
    path: string,
    id: string,
    article: ApiArticle
): Promise<any> => {
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

        console.log(response);
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