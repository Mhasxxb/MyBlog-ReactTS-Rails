import { Navigate, Outlet } from "react-router-dom";
import type { ReactElement } from "react"
import { useAuth } from "../context/AuthenticateContext";

function ProtectedRoute(): ReactElement {
    const { isAuthenticated } = useAuth()
    if (isAuthenticated) {
        return <Outlet />
    }
    else {
        return <Navigate to="/" replace />
    }
};

export default ProtectedRoute;