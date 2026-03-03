import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthenticateContext";
import { toast } from "react-toastify";



const PublicOnlyRoute = () => {
    const { isAuthenticated } = useAuth()
    const last: null | string = sessionStorage.getItem("lastRoute")
    console.log(last);
    if (!isAuthenticated) {
        return <Outlet />
    }
    else {
        toast.warn("Action forbidden!")
        return <Navigate to={!!last ? last : `/users/${sessionStorage.getItem("id")?.toString()}`} replace />;
    }
}

export default PublicOnlyRoute;

