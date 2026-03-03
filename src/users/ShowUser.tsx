import { useEffect, useState, type JSX } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userApi } from "../api/usersApi/showUserApi";
import { ApiResponse, Delete } from "../App.types";
import { capitalize } from "../config";
import { useParams } from "react-router-dom";
import { destroyUser } from "../api/authentication/authenticationApi";
import { toast } from "react-toastify";

function UserProfile(): JSX.Element {

    const [user, setUser] = useState<ApiResponse | null>(null);
    const [deleteUser, setDeleteUser] = useState<boolean>(false)

    const navigate = useNavigate()
    async function getUserInfo(id: string) {
        const userInfo = await userApi(`api/v1/users/`, id);
        console.log(userInfo);
        return userInfo;
    }

    // HOW TO GET HREF 
    // const id: string = window.location.href.split('/')[4]

    // A BETTER WAY TO GET USER ID

    const { id } = useParams<{ id: string }>();


    console.log(window.location.href);

    useEffect(() => {
        const fetchUser = async () => {
            const result: ApiResponse = await getUserInfo(id as string); // wait for resolved data
            console.log(result);

            setUser(result); // now this is ApiResponse
            console.log(user)
        };

        fetchUser();
    }, [id]);

    useEffect(() => {
        const signOut = async () => {
            const result: Delete = await destroyUser()
            console.log(result);
            return result
        }

        const handleStorage = async () => {
            try {
                const result = await signOut()
                if (result.success) {
                    localStorage.clear()
                    sessionStorage.clear()
                    toast.success(`${result.status?.message}`)
                    navigate("/")
                }
            }
            catch (e: any) {
                console.log(e);
            }
        }

        if (deleteUser) {
            setDeleteUser(false)
            handleStorage()
        }

    }, [deleteUser])


    // HAVE TO COMPLETE THIS WHEN ARTICLES ARE ADDED
    // function toggleContributions(): void {

    // }

    const handleDelete = () => {
        setDeleteUser(confirm("Are you sure you want to delete your profile?"))
    }
    return (
        <>
            {/* header for pic and name email */}
            <div className="max-w-3xl mx-auto my-10 rounded-xl outline-2 outline-gray-100 bg-amber-50 shadow-2xl shadow-gray-400/70 p-6">
                <div className="flex items-center space-y-5 gap-8">

                    {/* Profile Image */}
                    <div
                        className="w-28 h-28 flex justify-around items-center rounded-full border-2 text-center border-gray-500 bg-gray-300 cursor-pointer shadow-2xl font-bold text-purple-950 text-6xl shadow-gray-700/60 hover:shadow-gray-700/90 transition-all"
                    >
                        {user && user.payload.data ? `${user.payload.data.first_name[0].toUpperCase()}${user.payload.data.last_name[0] ? user.payload.data.last_name[0].toUpperCase() : ""}` : null}
                    </div>

                    {/* Content */}
                    <div className="flex flex-col flex-1 gap-4">

                        {/* Top Stats */}
                        <div className="flex justify-evenly gap-12">

                            {/* Articles Block */}
                            <div className="flex flex-col space-y-2.5 items-center text-shadow-lg/10">
                                <h5 className="text-purple-700 font-semibold">{user?.payload.data?.article_count}</h5>
                                <h5 className="font-semibold text-gray-700">Articles</h5>
                            </div>
                            {/* Active Since Block */}
                            <div className="flex flex-col space-y-2.5 items-center text-shadow-lg/10">
                                {user && user.payload.data ? <h5 className="text-purple-700 font-semibold">{user.payload.data.created_at.slice(0, 10)}</h5> : null}
                                <h5 className="font-semibold text-gray-700">Active since</h5>
                            </div>

                        </div>
                        <div className="h-px bg-purple-500" />

                        {/* Bottom Rows */}
                        {user && user.payload.data && (user.payload.data.id).toString() === sessionStorage.getItem("id") ?
                            <div className="grid grid-cols-2 gap-y-2 font-medium text-gray-800">
                                <Link to="edit" className="cursor-pointer px-2 p-1 mx-3 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-amber-50 hover:shadow-2xl hover:shadow-blue-900 transition_all flex justify-center">
                                    <button >Edit profile</button>
                                </Link>


                                <button className="cursor-pointer px-2 p-1 mx-3 border border-red-500 text-red-500 rounded hover:bg-red-500 hover:text-amber-50 hover:shadow-2xl hover:shadow-red-900 transition_all flex justify-center"
                                    onClick={handleDelete}>Delete profile</button>

                            </div>
                            :
                            null
                        }
                    </div>
                </div>
                <div className="space-y-2 my-5">
                    <h2 className="text-purple-800 font-semibold text-shadow-lg/10"><span className="text-gray-900">Name: </span>{user && user.payload.data ? `${capitalize(user.payload.data.first_name)} ${capitalize(user.payload.data.last_name)}` : ""}</h2>
                    <h2 className="text-purple-700 font-semibold text-shadow-lg/10"><span className="text-gray-900">Email: </span>{user && user.payload.data ? `${user.payload.data.email}` : ""}</h2>

                    <p className="text-purple-600 text-center font-semibold text-shadow-lg/10">Writer - MyBlog</p>
                    <p className="text-purple-500 text-center font-semibold text-shadow-lg/10">Made {user?.payload.data?.article_count} contributions so far</p>
                </div>
                <div className="h-px min-w-full bg-purple-500 my-5" />
                <div>
                    <div className="flex flex-col items-center text-gray-500">
                        <p className="font-semibold cursor-pointer text-shadow-lg/10">Show contributions</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3 shadow-lg/10 bg-amber50 cursor-pointer">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserProfile