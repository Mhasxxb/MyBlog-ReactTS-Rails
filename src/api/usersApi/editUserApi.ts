import { api } from "../apiAxiosWrapper";
import { API_URL } from "../../config"
import { ApiResponse, UpdateUser } from "../../types/userTypes/userTypes"

export const updateUserApi = async (
  path: string,
  id: string,
  userBody: UpdateUser
): Promise<ApiResponse> => {

  const token = localStorage.getItem("authToken");
  if (!token) {
    // Handle missing token, e.g., by returning an error or redirecting.
    return Promise.reject(new Error('Auth token not found'));
  }

  try {
    const response = await api.patch(
      `${API_URL}${path}/users/${id}`,
      { user: userBody },
      {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`
        }
      }
    )

    const result: ApiResponse = {
      payload: response.data,
      status: response.status,
      success: true
    }
    return result
  }
  catch (error: any) {
    const result: ApiResponse = {
      payload: error.response.data,
      status: error.response.status,
      success: false
    }
    console.log(result);
    return result
  }
}