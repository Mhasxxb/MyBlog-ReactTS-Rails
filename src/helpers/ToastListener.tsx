import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";

const ToastListener = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.message) {
      toast.warn(location.state.message);
    }
  }, [location.state]);

  return null;
};

export default ToastListener;