import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const usePreviousRoute = () => {
  const location = useLocation();

  useEffect(() => {
    // Save the current path in sessionStorage

    if (location.pathname != "/login" && location.pathname != "/signup" && location.pathname != "/") {
      console.log("breached");
      sessionStorage.setItem("lastRoute", location.pathname);
    }
  }, [location]);
};