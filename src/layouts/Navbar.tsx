import { type JSX } from "react";
import "@tailwindplus/elements";
import DropDown from "./DropDown";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthenticateContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Navbar(): JSX.Element {
  // HANDLE USER TOKEN TO UPDATE NAVBAR ASAP USER LOGS IN

  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = (): void => {
    if (confirm("Do you want to logout of MyBlog?")) {
      logout();
      toast.success("You have been logged out successfully");
      navigate("/");
    }
  };
  
  const id: string | null = localStorage.getItem("id");

  return (
    <>
      <nav>
        <ul className="bg-purple-900 py-2 flex items-center shadow-2xl shadow-grey-100">
          {isAuthenticated ? (
            // {/* AUTH REQRD */}
            <div className="mx-10 flex items-center justify-between w-full">
              <div className="flex items-center">
                <li className="text-amber-200 mx-4 text-2xl cursor-pointer font-bold">
                  MyBlog
                </li>
                <li className="text-amber-200 font-semibold mx-4 cursor-pointer py-4">
                  <Link to={"users"}>Bloggers</Link>
                </li>
                <li className="text-amber-200 mx-4 cursor-pointer py-4">
                  <DropDown
                    title={"Article"}
                    firstVal={"View articles"}
                    firstRoute={"articles"}
                    secondVal={"Add article"}
                    secondRoute={"articles/new"}
                  />
                </li>
                <li className="text-amber-200 mx-4 cursor-pointer py-4">
                  <DropDown
                    title={"Categories"}
                    firstVal={"View categories"}
                    firstRoute="categories"
                    secondVal={"Add category"}
                    secondRoute={"categories/new"}
                  />
                </li>
                <li className="text-amber-200 mx-4 cursor-pointer py-4">
                  <DropDown
                    title={"User"}
                    firstVal="Show profile"
                    firstRoute={`users/${id}`}
                    secondVal="Edit profile"
                    secondRoute={`users/${id}/edit`}
                  />
                </li>
              </div>
              <div className="flex">
                <li className="text-amber-200 mx-4 font-semibold cursor-pointer py-4">
                  <Link to={"about"}>About us</Link>
                </li>
                <li
                  className="text-amber-200 mx-4 text- font-semibold cursor-pointer py-4"
                  onClick={handleLogout}
                >
                  Logout
                </li>
              </div>
            </div>
          ) : (
            // {/* UNAUTH REQRD */}
            <>
              <div className="flex justify-between items-center w-full mx-10">
                <li className="text-amber-200 mx-4 text-2xl cursor-pointer font-bold">
                  <Link to={"/"}>MyBlog</Link>
                </li>
                <div className="flex">
                  <li className="text-amber-200 mx-4 font-semibold cursor-pointer py-4">
                    <Link to={"about"}>About us</Link>
                  </li>
                  <li className="text-amber-200 mx-4 text- font-semibold cursor-pointer py-4">
                    <Link to={"login"}>Login</Link>
                  </li>
                </div>
              </div>
            </>
          )}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
