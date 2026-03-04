import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthenticateContext";

const PublicOnlyRoute = () => {
  const { isAuthenticated } = useAuth();
  const last = sessionStorage.getItem("lastRoute");
  const userId = localStorage.getItem("id");

  // If user is logged in, redirect to their dashboard (or last route)
  if (isAuthenticated) {
    return (
      <Navigate
        to={last ?? (userId ? `/users/${userId}` : "/users")}
        state={{ message: "You are already logged in!" }}
        replace
      />
    );
  }

  // If user is not logged in, allow access to public route
  return <Outlet />;
};

export default PublicOnlyRoute;