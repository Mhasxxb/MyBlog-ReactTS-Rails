import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthenticateContext";



const PublicOnlyRoute = () => {
    const { isAuthenticated } = useAuth()
    const last: null | string = sessionStorage.getItem("lastRoute")
    console.log(last);
    return !isAuthenticated ? <Outlet /> : <Navigate to={!!last ? last : `/users/${sessionStorage.getItem("id")?.toString()}`} replace />;
}

export default PublicOnlyRoute;