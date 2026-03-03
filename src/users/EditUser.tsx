import { ChangeEvent, useEffect, useState, type JSX } from "react"
import Form from "../helpers/FormHelper"
import { updateUserApi } from "../api/usersApi/editUserApi"
import { useNavigate, useParams } from "react-router-dom"

function EditingLayout(): JSX.Element {
    // HANDLE THIS USING CONTEXT API
    let [fName, setFName] = useState<string>(localStorage.getItem("first_name") || "")
    let [lName, setLName] = useState<string>(localStorage.getItem("last_name") || "")
    // let [email, setEmail] = useState<string>(localStorage.getItem("email") as string)
    const { id } = useParams<{ id: string }>()

    const navigate = useNavigate()

    useEffect(() => {
        console.log(id, localStorage.getItem("id"));
        if (localStorage.getItem("id") === null) {
            console.log(1);
            navigate(`/users/${localStorage.getItem("id")}`)
        }
        else if (id !== localStorage.getItem("id")) {
            console.log(2);
            navigate(`/users/${localStorage.getItem("id")}`)
        }
    }, [])
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (confirm("Are you sure you want to make these changes?")) {
            try {
                const result = await updateUserApi("api/v1", id as string, user)
                if (result.success == true) {
                    // navigate(`users/${id}`)
                    console.log(result);
                    localStorage.setItem("first_name", result?.payload?.data?.first_name as string)
                    localStorage.setItem("last_name", result?.payload?.data?.last_name as string)
                    navigate(`/users/${id}`)
                }
            }
            catch (error: any) {
                console.log(error);
            }
        }
    }

    const user = {
        first_name: fName,
        last_name: lName,
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="space-y-6 my-7">
                    <div className="flex justify-between mx-20">
                        <label htmlFor="Fnmae"
                            className="text-purple-800 text-shadow-lg/10 font-semibold">
                            First:
                        </label>
                        <input type="text"
                            value={fName}
                            placeholder="First Name"
                            className="border-2 px-2 ml-1 text-shadow-lg/5 mr-2 text-purple-600/90 border-gray-400/50 rounded focus:outline-0 w-80 focus:border-purple-400"
                            id="Fname"
                            onChange={(e: ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
                                setFName(e.target.value)
                            }}
                        />
                        <label htmlFor="Lname"
                            className="text-purple-800 text-shadow-lg/10 font-semibold">
                            Last:
                        </label>
                        <input type="text"
                            value={lName}
                            placeholder="Last Name"
                            className="border-2 px-2 text-shadow-lg/5 ml-1 text-purple-600/90 border-gray-400/50 rounded focus:outline-0 w-80 focus:border-purple-400"
                            id="Lname"
                            onChange={(e: ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
                                setLName(e.target.value)
                            }}
                        />
                    </div>
                    {/* <div className="flex justify-between mx-20">
                        <label htmlFor="Email" className="text-purple-800 text-shadow-lg/10 font-semibold">Email: </label>
                        <input type="text"
                            value={email}
                            placeholder="Enter Email"
                            className="border-2 px-2 text-shadow-lg/5 text-purple-600/90 border-gray-400/50 rounded focus:outline-0 w-full ml-10 focus:border-purple-400"
                            id="Email"
                            onChange={(e: ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
                                setEmail(e.target.value)
                            }}
                        />
                    </div> */}
                </div>
                <div className="text-center my-3">

                    <button className="inline-flex items-center gap-2 rounded-md cursor-pointer my-5 bg-purple-950 px-3 py-1.5 font-semibold text-white focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white shadow-[0_12px_30px_rgba(156,163,175,0.60)] transition-all hover:outline-purple-900 hover:shadow-[0_12px_30px_rgba(156,163,175,0.95)] data-hover:bg-purple-900 data-open:bg-purple-900">
                        Update profile
                    </button>

                </div>
            </form>
        </>
    )
}
function EditUser(): JSX.Element {
    return (
        <>
            <Form title="Edit profile">
                <EditingLayout />
            </Form>
        </>
    )
}

export default EditUser