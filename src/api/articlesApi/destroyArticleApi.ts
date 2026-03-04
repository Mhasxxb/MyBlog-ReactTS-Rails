import { api } from "../apiAxiosWrapper";
import { API_URL } from "../../config";
import { AxiosError } from "axios";

type ArticleDeletionResponse = {
    message?: string,
    error?: string,
    success: boolean,
    status: number
}
export const destroyArticle = async (id: string) => {
    const token: string | null = localStorage.getItem("authToken");
    try {
        const response = await api.delete(
            `${API_URL}api/v1/articles/${id}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: "application/json",
                    Authorization: `Bearer ${token}`
                }
            });
        const result: ArticleDeletionResponse = {
            message: response.data.message,
            status: response.status,
            success: true
        }
        return result
    }
    catch (error: any) {
        const result: ArticleDeletionResponse = {
            error: error.response.data.error,
            success: false,
            status: error.response.status
        }
        return result
    }
}