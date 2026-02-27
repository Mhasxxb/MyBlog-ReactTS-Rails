// AuthContext.tsx
import { createContext, useContext, useEffect, useState } from "react";
import { AuthContextType } from "../App.types";
import { api } from "../api/api";


const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) setIsAuthenticated(true);
  }, []);

  const login = (token: string, user: string) => {
    const curUser = JSON.parse(user)
    localStorage.setItem("authToken", token);
    localStorage.setItem("id", curUser.id);
    localStorage.setItem("first_name", curUser.first_name);
    localStorage.setItem("last_name", curUser.last_name);
    localStorage.setItem("email", curUser.email);

    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    sessionStorage.removeItem("id");
    sessionStorage.removeItem("lastRoute");

    setIsAuthenticated(false);
  };

  useEffect(() => {
    const interceptor = api.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response?.status === 401) {
          console.log(error.response);
          logout();
        }
        return Promise.reject(error);
      }
    );

    return () => {
      api.interceptors.response.eject(interceptor);
    };
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
    )
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used inside AuthProvider");
  return context;
};