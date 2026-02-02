import { useState, type JSX } from "react"
import Form from "../FormHelper"
import { Button } from "@headlessui/react"

function Login(): JSX.Element {
    let [selection, setSelection] = useState<"username" | "email">("username")
    let [username, setUsername] = useState("");
    let [email, setEmail] = useState("");
    let [nameClass, setNameClass] = useState("block");
    let [emailClass, setEmailClass] = useState("hidden");
    let [passwordType, setPasswordType] = useState<"password" | "text">("password");

    function togglePasswordType() {
        if (passwordType === "password") {
            setPasswordType("text")
        }
        else {
            setPasswordType("password")
        }

    }

    function handleToggle(val: "username" | "email"): void {
        if (val === "username") {
            setEmail("")
            setSelection(val)
            setNameClass("block")
            setEmailClass("hidden")
        }
        else {
            setUsername("")
            setSelection(val)
            setEmailClass("block")
            setNameClass("hidden")
        }
    }
    return (
        <>
            <div className="space-y-6 my-7">

                <p className="text-center text-purple-600 font-semibold text-shadow-lg/20">Login using</p>

                <div className="flex justify-between mx-60">
                    <div className="flex items-center space-x-1">
                        <input type="radio" className="accent-purple-600" onChange={(): void => handleToggle("username")} name="choice" id="Username" checked={selection === "username"} />
                        <label htmlFor="Username" className="text-purple-700/60 text-shadow-lg/10 font-semibold">Username</label>
                    </div>
                    <div className="flex items-center space-x-1">
                        <input type="radio" className="checked:accent-purple-600" onChange={(): void => { handleToggle("email") }} name="choice" id="Email" checked={selection === "email"} />
                        <label htmlFor="Email" className="text-purple-700/60 text-shadow-lg/10 font-semibold">Email</label>
                    </div>
                </div>



                <div id="username" className={nameClass}>
                    <div className="flex justify-between mx-20" >
                        <label htmlFor="Username" className="text-purple-800 text-shadow-lg/10 font-semibold">Username: </label>
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter username" className="border-2 px-2 text-shadow-lg/5 text-purple-600/90 border-gray-400/50 rounded focus:outline-0 w-80 focus:border-purple-400" id="Username" />
                    </div>
                </div>

                <div id="email" className={emailClass}>
                    <div className="flex justify-between mx-20">
                        <label htmlFor="Email" className="text-purple-800 text-shadow-lg/10 font-semibold">Email: </label>
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" className="border-2 px-2 text-shadow-lg/5 text-purple-600/90 border-gray-400/50 rounded focus:outline-0 w-80 focus:border-purple-400" id="Email" />
                    </div>
                </div>

                <div className="flex justify-between items-center mx-20">
                    <label htmlFor="Password" className="text-purple-800 text-shadow-lg/10 font-semibold">Password: </label>

                    {/* 1. Wrap the input and SVG in a relative container */}
                    <div className="relative w-80">
                        <input
                            type={passwordType}
                            placeholder="Enter Password"
                            className="border-2 pl-2 pr-10 text-shadow-lg/5 text-purple-600/90 border-gray-400/50 rounded focus:outline-0 w-full focus:border-purple-400"
                            id="Password"
                        />

                        {/* 2. Position the SVG absolutely */}
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

                <Button className="inline-flex items-center gap-2 rounded-md cursor-pointer bg-purple-950 px-3 py-1.5 font-semibold text-white focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white shadow-[0_12px_30px_rgba(156,163,175,0.60)] transition-all hover:outline-purple-900 hover:shadow-[0_12px_30px_rgba(156,163,175,0.95)] data-hover:bg-purple-900 data-open:bg-purple-900">
                    Sign up
                </Button>
                <p className="py-3 text-purple-800 text-shadow-lg/10 font-semibold">Already have an account <a className="font-extrabold text-purple-800/60 text-shadow-lg/10 hover:text-shadow-lg/15 transition-all" href="">login</a> instead.</p>

            </div>
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