import { AxiosResponse } from "axios"
import { API_URL } from "../../config"
import { User, AuthApiResponse, Payload, Delete } from "../../App.types";
import { api } from "../api";

export const authenticationApi = async (userBody: User, method: "login" | "signup"): Promise<AuthApiResponse> => {

    try {
        const response: AxiosResponse<Payload> = await api.post(`${API_URL}auth/${method}`,
            { user: userBody }, {
            headers: {
                'Content-Type': 'application/json',
                Accept: "application/json"
            }
        });
        const authHeader: string = response.headers.authorization
        if (authHeader) {
            const token: string = authHeader.split(" ")[1]
            const userId: string = (response.data.data.id).toString()
            localStorage.setItem("authToken", token)
            localStorage.setItem("id", userId)
        }
        const result: AuthApiResponse = {
            status: response.status,
            payload: response.data,
            token: response.headers.authorization?.split(" ")[1]
        }
        return result
    }
    catch (error: any) {
        const result: AuthApiResponse = {
            status: error.response.status,
            payload: error.response.data
        }
        return result
    }

}

// auth/signup

export const destroyUser = async () => {
    const token: string | null = localStorage.getItem("authToken");
    if (!token) {
        // Or return an error response
        return { success: false, status: { message: "No auth token found." } };
    }
    try {
        const response: AxiosResponse<Payload> = await api.delete(`${API_URL}auth/signup`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: "application/json",
                    Authorization: `Bearer ${token}`
                }
            });
        const result: Delete = {
            status: {
                message: response.data.status.message
            },
            success: true
        }
        return result
    }
    catch (error: any) {
        const result: Delete = {
            success: false
        }
        return result
    }
}