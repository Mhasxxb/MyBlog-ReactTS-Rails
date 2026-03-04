import { api } from "../api"
import { API_URL } from "../../config"
import { ApiResponse } from "../../App.types"

export const userApi = async (path: string, id: string | null): Promise<ApiResponse> => {
    const token = localStorage.getItem("authToken")
    try {
        const response = await api.get(`${API_URL}${path}/${id}`, {
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${token}`
            }
        })
        const result: ApiResponse = {
            payload: response.data,
            status: response.status,
            success: true
        }
        return result
    }
    catch (error: any) {
        console.log("Error");
        const result: ApiResponse = {
            payload: error.response.data,
            status: error.response.status,
            success: false
        }
        return result
    }
}