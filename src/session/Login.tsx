import { ChangeEvent, useState, type JSX } from "react"
import Form from "../helpers/FormHelper"
import { Button } from "@headlessui/react"
import { Link, useNavigate } from "react-router-dom"
import { authenticationApi } from "../api/authentication/authenticationApi";
import { AuthApiResponse, User } from "../App.types";
import { useAuth } from "../context/AuthenticateContext";
import { toast } from "react-toastify";

function Login(): JSX.Element {
    const [passwordType, setPasswordType] = useState<"password" | "text">("password");
    const navigate = useNavigate()
    function togglePasswordType() {
        if (passwordType === "password") {
            setPasswordType("text")
        }
        else {
            setPasswordType("password")
        }

    }
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const user: User = {
        email: email,
        password: password
    }
    // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    //     e.preventDefault()
    //     try {
    //         const result: ApiResponse = await authenticationApi(user, "login")
    //         console.log(result)
    //         if (result.status === 200) {
    //             console.log(result.status)
    //             navigate(`/users/${result.payload.data.email}`)
    //         }
    //     }
    //     catch (error) {
    //         console.log(error)
    //     }
    // }

    const { login } = useAuth()
    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ): Promise<void> => {
        e.preventDefault();

        try {
            const result: AuthApiResponse = await authenticationApi(user, "login");

            if (result.status === 200 && result.token) {
                toast.success(`${result.payload.status.message}`)
                const user: string = JSON.stringify(result?.payload?.data)
                login(result.token, user);   // context controls storage
                navigate(`/users/${result?.payload?.data?.id}`);
            }
            else {
                toast.error(`${result.payload.status.message}`)
                console.log(result)
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            <form action=""
                onSubmit={handleSubmit}>
                <div className="space-y-6 my-7">
                    <div className="flex justify-between mx-20">
                        <label htmlFor="Email" className="text-purple-800 text-shadow-lg/10 font-semibold">Email: </label>
                        <div className="w-80">
                            <input type="text"
                                placeholder="Enter Email"
                                className="border-2 px-2 text-shadow-lg/5 text-purple-600/90 border-gray-400/50 rounded focus:outline-0 w-full focus:border-purple-400" id="Email"
                                value={email}
                                onChange={(e: ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
                                    setEmail(e.target.value)
                                }}
                            />
                        </div>
                    </div>
                    <div className="flex justify-between items-center mx-20">
                        <label htmlFor="Password" className="text-purple-800 text-shadow-lg/10 font-semibold">Password: </label>
                        {/*wrap the input and icon*/}
                        <div className="relative w-80">
                            <input
                                type={passwordType}
                                value={password}
                                placeholder="Enter Password"
                                className="border-2 pl-2 pr-10 text-shadow-lg/5 text-purple-600/90 border-gray-400/50 rounded focus:outline-0 w-full focus:border-purple-400"
                                id="Password"
                                onChange={(e: ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
                                    setPassword(e.target.value)
                                }}
                            />
                            {/* sett the position of the icon */}
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer text-gray-500 hover:text-purple-600">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" onClick={(): void => togglePasswordType()} className="size-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center my-3">
                    <Button type="submit" className="inline-flex items-center gap-2 rounded-md cursor-pointer bg-purple-950 px-3 py-1.5 font-semibold text-white focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white shadow-[0_12px_30px_rgba(156,163,175,0.60)] transition-all hover:outline-purple-900 hover:shadow-[0_12px_30px_rgba(156,163,175,0.95)] data-hover:bg-purple-900 data-open:bg-purple-900">
                        Login
                    </Button>
                    <p className="py-3 text-purple-800 text-shadow-lg/10 font-semibold">
                        Don't have an account <Link to="/signup"
                            className="font-extrabold text-purple-800/60 text-shadow-lg/10 hover:text-shadow-lg/15 transition-all">
                            sign up
                        </Link> instead.
                    </p>
                </div>
            </form>
        </>
    )
}
function LoginForm(): JSX.Element {
    return (
        <>
            <Form title="Login Form">
                <Login />
            </Form>
        </>
    )
}
export default LoginForm