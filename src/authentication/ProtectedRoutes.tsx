import { Navigate, Outlet } from "react-router-dom";
import { useEffect, type ReactElement } from "react";
import { useAuth } from "../context/AuthenticateContext";
import { toast } from "react-toastify";

function ProtectedRoute(): ReactElement {
  const { isAuthenticated } = useAuth();
  useEffect(() => {
    const publicRoutes = ["/", "/login", "/signup"];

    if (!isAuthenticated && !publicRoutes.includes(location.pathname)) {
      toast.warn("Please login first");
    }
  }, [location.pathname, isAuthenticated]);
  
  if (!isAuthenticated && !localStorage.getItem("id") == null) {
    toast.warn("You need to sign up before performing this action!");
    return <Navigate to="/" replace />;
  } else {
    return <Outlet />; 
  }
}

export default ProtectedRoute;
