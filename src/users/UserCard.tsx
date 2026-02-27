import { useEffect, useState, type JSX } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Data, Delete } from "../App.types"
import { capitalize } from "../config";
import { destroyUser } from "../api/api/authenticationApi";

type UserCardProps = {
    user: Data
}

function UserCard({ user }: UserCardProps): JSX.Element {
    // console.log(user);
    const name: string = capitalize(user.first_name) + " " + capitalize(user.last_name)
    const contributions = 0
    const [deleteUser, setDeleteUser] = useState<boolean>(false)
    const navigate = useNavigate()



    useEffect(() => {
        const signOut = async () => {
            const result: Delete = await destroyUser()
            console.log(result);
            return result.success
        }

        const handleStorage = async () => {
            try {
                if (await signOut()) {
                    localStorage.clear()
                    sessionStorage.clear()
                }
            }
            catch (e: any) {
                console.log(e);
            }
        }

        if (deleteUser) {
            setDeleteUser(false)
            handleStorage()
            navigate('/')
        }

    }, [deleteUser])

    const handleDelete = () => {
        setDeleteUser(confirm("Are you sure you want to delete your profile?"))
    }

    return (
        <>
            <div className="max-w-3xl mx-auto mt-10 space-x-55 rounded-xl outline-2 outline-gray-100 bg-amber-50 shadow-2xl shadow-gray-400/70 p-6">
                <div className="flex items-center w-full">
                    <div className="flex flex-1 flex-col space-y-3 items-center">
                        <div
                            className="w-28 h-28 flex justify-around items-center rounded-full border-2 text-center border-gray-500 bg-gray-300 cursor-pointer shadow-2xl font-bold text-purple-950 text-6xl shadow-gray-700/60 hover:shadow-gray-700/90 transition-all"
                        >
                            {`${user.first_name[0].toUpperCase()}${user.last_name[0] ? user.last_name[0].toUpperCase():""}`}
                            { }
                        </div>
                        <h2 className="text-purple-800 font-semibold cursor-pointer text-shadow-lg/20">{name}</h2>
                    </div>

                    <div className="flex-4">

                        <h2 className="text-purple-800 font-semibold text-shadow-lg/20 " >Made {contributions} Contributions so far.</h2>
                    </div>
                </div>

                <div className="h-px w-full my-3 space-x-6 bg-purple-500"></div>

                {user.id.toString() === localStorage.getItem("id") ?
                    <div className="flex justify-between mx-2">
                        <div>
                            <Link to={`/users/${user.id}`}>
                                <button className="cursor-pointer px-2 p-1 mx-3 border border-green-500 text-green-500 rounded hover:bg-green-500 hover:text-amber-50 hover:shadow-2xl hover:shadow-green-900 transition_all">
                                    View
                                </button>
                            </Link>

                            <Link to={`/users/${user.id}/edit`} className="cursor-pointer px-2 p-1 mx-3 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-amber-50 hover:shadow-2xl hover:shadow-blue-900 transition_all ">
                                <button>
                                    Edit
                                </button>
                            </Link>
                        </div>
                        <div>
                            <button className="cursor-pointer px-2 p-1 mx-3 border border-red-500 text-red-500 rounded hover:bg-red-500 hover:text-amber-50 hover:shadow-2xl hover:shadow-red-900 transition_all"
                                onClick={handleDelete}>
                                Delete
                            </button>

                        </div>
                    </div> :
                    <div className="flex mx-2 justify-end">
                        <Link to={`/users/${user.id}`}>
                            <button className="cursor-pointer px-2 p-1 mx-3 border border-green-500 text-green-500 rounded hover:bg-green-500 hover:text-amber-50 hover:shadow-2xl hover:shadow-green-900 transition_all">
                                View
                            </button>
                        </Link>
                    </div>
                }
            </div>
        </>
    )
}

export default UserCard