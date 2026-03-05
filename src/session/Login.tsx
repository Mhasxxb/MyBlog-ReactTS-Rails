import { ChangeEvent, useState, type JSX } from "react";
import Form from "../helpers/FormHelper";
import { Button } from "@headlessui/react";
import { Link, useNavigate } from "react-router-dom";
import { authenticationApi } from "../api/authenticationApi/authentication";
import { AuthApiResponse, User } from "../types/authTypes/authTypes";
import { useAuth } from "../context/AuthenticateContext";
import { toast } from "react-toastify";
import EyeIcon from "../shared/EyeIcon";

function Login(): JSX.Element {
  const [passwordType, setPasswordType] = useState<"password" | "text">(
    "password",
  );
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigate();

  function togglePasswordType() {
    if (passwordType === "password") {
      setPasswordType("text");
    } else {
      setPasswordType("password");
    }
  }
  
  const user: User = {
    email: email,
    password: password,
  };

  const { login } = useAuth();
  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();

    try {
      const result: AuthApiResponse = await authenticationApi(user, "login");

      if (result.status === 200 && result.token) {
        toast.success(`${result.payload.status.message}`);
        const user: string = JSON.stringify(result?.payload?.data);
        login(result.token, user); // context controls storage
        navigate(`/users/${result?.payload?.data?.id}`);
      } else {
        toast.error(`${result.payload.status.message}`);
        console.log(result);
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <div className="space-y-6 my-7">
          <div className="flex justify-between mx-20">
            <label
              htmlFor="Email"
              className="text-purple-800 text-shadow-lg/10 font-semibold"
            >
              Email:{" "}
            </label>
            <div className="w-80">
              <input
                type="text"
                placeholder="Enter Email"
                className="border-2 px-2 text-shadow-lg/5 text-purple-600/90 border-gray-400/50 rounded focus:outline-0 w-full focus:border-purple-400"
                id="Email"
                value={email}
                onChange={(
                  e: ChangeEvent<HTMLInputElement, HTMLInputElement>,
                ) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="flex justify-between items-center mx-20">
            <label
              htmlFor="Password"
              className="text-purple-800 text-shadow-lg/10 font-semibold"
            >
              Password:{" "}
            </label>
            {/*wrap the input and icon*/}
            <div className="relative w-80">
              <input
                type={passwordType}
                value={password}
                placeholder="Enter Password"
                className="border-2 pl-2 pr-10 text-shadow-lg/5 text-purple-600/90 border-gray-400/50 rounded focus:outline-0 w-full focus:border-purple-400"
                id="Password"
                onChange={(
                  e: ChangeEvent<HTMLInputElement, HTMLInputElement>,
                ) => {
                  setPassword(e.target.value);
                }}
              />
              {/* sett the position of the icon */}
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer text-gray-500 hover:text-purple-600">
                <EyeIcon togglePasswordType={togglePasswordType} />
              </div>
            </div>
          </div>
        </div>
        <div className="text-center my-3">
          <Button
            type="submit"
            className="inline-flex items-center gap-2 rounded-md cursor-pointer bg-purple-950 px-3 py-1.5 font-semibold text-white focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white shadow-[0_12px_30px_rgba(156,163,175,0.60)] transition-all hover:outline-purple-900 hover:shadow-[0_12px_30px_rgba(156,163,175,0.95)] data-hover:bg-purple-900 data-open:bg-purple-900"
          >
            Login
          </Button>
          <p className="py-3 text-purple-800 text-shadow-lg/10 font-semibold">
            Don't have an account{" "}
            <Link
              to="/signup"
              className="font-extrabold text-purple-800/60 text-shadow-lg/10 hover:text-shadow-lg/15 transition-all"
            >
              sign up
            </Link>{" "}
            instead.
          </p>
        </div>
      </form>
    </>
  );
}
function LoginForm(): JSX.Element {
  return (
    <>
      <Form title="Login Form">
        <Login />
      </Form>
    </>
  );
}

export default LoginForm;
