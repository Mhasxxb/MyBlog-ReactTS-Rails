import { Navigate, Outlet } from "react-router-dom";
import type { ReactElement } from "react"
import { useAuth } from "../context/AuthenticateContext";
import { toast } from "react-toastify";

function ProtectedRoute(): ReactElement {
    const { isAuthenticated } = useAuth()
    if (isAuthenticated) {
        return <Outlet />
    }
    else {
        if(localStorage.getItem('id') == null){
            toast.warn("You need to sign up before performing this action!")
        }
        return <Navigate to="/" replace />
    }
};

export default ProtectedRoute;