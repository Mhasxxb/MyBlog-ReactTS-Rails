import { ChangeEvent, useState, type JSX } from "react";
import Form from "../helpers/FormHelper";
import { Button } from "@headlessui/react";
import { Link, useNavigate } from "react-router-dom";
import { User, AuthApiResponse } from "../types/authTypes/authTypes";
import { authenticationApi } from "../api/authenticationApi/authenticationApi";
import { useAuth } from "../context/AuthenticateContext";
import { toast } from "react-toastify";
import { MismatchError } from "../types/App.types";

function SignUp(): JSX.Element {
  let [passwordType, setPasswordType] = useState<"password" | "text">(
    "password",
  );
  let [confirmType, setConfirmType] = useState<"password" | "text">("password");

  function togglePasswordType() {
    if (passwordType === "password") {
      setPasswordType("text");
    } else {
      setPasswordType("password");
    }
  }
  function toggleConfirmType() {
    if (confirmType === "password") {
      setConfirmType("text");
    } else {
      setConfirmType("password");
    }
  }
  let [fName, setFName] = useState<string>("");
  let [lName, setLName] = useState<string>("");

  let [email, setEmail] = useState<string>("");
  let [password, setPassword] = useState<string>("");
  let [confirmPassword, setConfirmPassword] = useState<string>("");

  const user: User = {
    first_name: fName,
    last_name: lName,
    email: email,
    password: password,
  };

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();
    if (password != confirmPassword) {
      const error: MismatchError = {
        message: "Passwords do not match.",
      };
      toast.error(error.message);
    } else {
      try {
        const result: AuthApiResponse = await authenticationApi(user, "signup");

        if (result.status === 200 && result.token) {
          const user: string = JSON.stringify(result?.payload?.data);
          login(result.token, user);
          toast.success(`${result.payload.status.message}`);
          navigate(`/users/${result?.payload?.data?.id}`);
        } else {
          toast.error(`${result.payload.status.message}`);
          if (result.payload.status.errors) {
            toast.error(result.payload.status.errors[0]);
          }
        }
      } catch (error) {
        toast.error("Something went wrong.");
        console.log(error); //HANDLE THESE ERRORS
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="space-y-6 my-7">
          <div className="flex justify-between mx-20">
            <label
              htmlFor="Fnmae"
              className="text-purple-800 text-shadow-lg/10 font-semibold"
            >
              First:
            </label>
            <input
              type="text"
              placeholder="First Name"
              className="border-2 px-2 ml-1 text-shadow-lg/5 mr-1 text-purple-600/90 border-gray-400/50 rounded focus:outline-0 w-50 focus:border-purple-400"
              id="Fname"
              onChange={(
                e: ChangeEvent<HTMLInputElement, HTMLInputElement>,
              ) => {
                setFName(e.target.value);
              }}
            />
            <label
              htmlFor="Lname"
              className="text-purple-800 text-shadow-lg/10 font-semibold"
            >
              Last:
            </label>
            <input
              type="text"
              placeholder="Last Name"
              className="border-2 px-2 text-shadow-lg/5 ml-1 text-purple-600/90 border-gray-400/50 rounded focus:outline-0 w-50 focus:border-purple-400"
              id="Lname"
              onChange={(
                e: ChangeEvent<HTMLInputElement, HTMLInputElement>,
              ) => {
                setLName(e.target.value);
              }}
            />
          </div>
          <div className="flex justify-between mx-20">
            <label
              htmlFor="Email"
              className="text-purple-800 text-shadow-lg/10 font-semibold"
            >
              Email:
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              className="border-2 px-2 text-shadow-lg/5 text-purple-600/90 border-gray-400/50 rounded focus:outline-0 w-80 focus:border-purple-400"
              id="Email"
              onChange={(
                e: ChangeEvent<HTMLInputElement, HTMLInputElement>,
              ) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="flex justify-between items-center mx-20">
            <label
              htmlFor="Password"
              className="text-purple-800 text-shadow-lg/10 font-semibold"
            >
              Password:
            </label>
            {/*Wrap the input and SVG in a relative container */}
            <div className="relative w-80">
              <input
                type={passwordType}
                placeholder="Enter Password"
                className="border-2 pl-2 pr-10 text-shadow-lg/5 text-purple-600/90 border-gray-400/50 rounded focus:outline-0 w-full focus:border-purple-400"
                id="Password"
                onChange={(
                  e: ChangeEvent<HTMLInputElement, HTMLInputElement>,
                ) => {
                  setPassword(e.target.value);
                }}
              />

              {/* Position the SVG absolutely */}
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer text-gray-500 hover:text-purple-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5"
                  onClick={(): void => togglePasswordType()}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center mx-20">
            <label
              htmlFor="Password"
              className="text-purple-800 text-shadow-lg/10 font-semibold"
            >
              Confirm Password:
            </label>

            {/*Wrap the input and SVG in a relative container */}
            <div className="relative w-80">
              <input
                type={confirmType}
                placeholder="Confirm Password"
                className="border-2 pl-2 pr-10 text-shadow-lg/5 text-purple-600/90 border-gray-400/50 rounded focus:outline-0 w-full focus:border-purple-400"
                id="ConfirmPassword"
                onChange={(
                  e: ChangeEvent<HTMLInputElement, HTMLInputElement>,
                ) => {
                  setConfirmPassword(e.target.value);
                }}
              />

              {/* Position the SVG absolutely */}
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer text-gray-500 hover:text-purple-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5"
                  onClick={(): void => toggleConfirmType()}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center my-3">
          <Button
            type="submit"
            className="inline-flex items-center gap-2 rounded-md cursor-pointer bg-purple-950 px-3 py-1.5 font-semibold text-white focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white shadow-[0_12px_30px_rgba(156,163,175,0.60)] transition-all hover:outline-purple-900 hover:shadow-[0_12px_30px_rgba(156,163,175,0.95)] data-hover:bg-purple-900 data-open:bg-purple-900"
          >
            Sign up
          </Button>
          <p className="py-3 text-purple-800 text-shadow-lg/10 font-semibold">
            Already have an account{" "}
            <Link
              to="/login"
              className="font-extrabold text-purple-800/60 text-shadow-lg/10 hover:text-shadow-lg/15 transition-all"
            >
              login
            </Link>{" "}
            instead.
          </p>
        </div>
      </form>
    </>
  );
}
function SignUpForm(): JSX.Element {
  return (
    <>
      <Form title="Sign up Form">
        <SignUp />
      </Form>
    </>
  );
}

export default SignUpForm;
