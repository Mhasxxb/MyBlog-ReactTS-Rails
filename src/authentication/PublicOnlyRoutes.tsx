import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthenticateContext";
import { toast } from "react-toastify";



const PublicOnlyRoute = () => {
    const { isAuthenticated } = useAuth()
    const last: null | string = sessionStorage.getItem("lastRoute")
    const userId = localStorage.getItem("id");
    console.log(last);
    if (!isAuthenticated) {
        return <Outlet />
    }
    else {
        if (localStorage.getItem("id") != null){
            toast.warn("Action forbidden!")
        }
        return <Navigate to={last ?? (userId ? `/users/${userId}` : '/users')} replace />;
    }
}

export default PublicOnlyRoute;

