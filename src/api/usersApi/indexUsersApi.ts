import { api } from "../../api/apiAxiosWrapper";
import { API_URL } from "../../config"
import { UserIndexResponse } from "../../types/userTypes/userTypes"
export const userIndexApi = async (
    path: string,
    offset: number = 0,
    limit: number = 3
): Promise<UserIndexResponse> => {

    const token = localStorage.getItem("authToken")
    try {
        const response = await api.get(
            `${API_URL}${path}?limit=${limit}&offset=${offset}`,
            {
                headers: {
                    Accept: "application/json",
                    Authorization: `Bearer ${token}`
                }
            }
        )
        return {
            status: response.status,
            payload: response.data,
            success: true
        }
    }
    catch (error: any) {
        return {
            status: error.response.status,
            error: error.response?.data?.error,
            success: false
        }
    }
}