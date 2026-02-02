import type { JSX } from "react"

function UserCard(): JSX.Element {
    return (
        <>
            <div className="max-w-3xl mx-auto mt-10 space-x-55 rounded-xl outline-2 outline-gray-100 bg-amber-50 shadow-2xl shadow-gray-400/70 p-6">
                <div className="flex items-center">
                    <div className="flex flex-1 flex-col space-y-3 items-center">
                        <img className="w-32 rounded-full cursor-pointer shadow-2xl shadow-gray-500 border-2 border-gray-400 hover:shadow-gray-700" src="/profile_pic.webp" alt="" />
                        <h2 className="text-purple-800 font-semibold cursor-pointer text-shadow-lg/20">@M.hasxxb</h2>
                    </div>
                    {/* <div className="h-px w-10 space-x-6 bg-purple-500"></div> */}
                    <div className="flex-2">

                        <h2 className="text-purple-800 font-semibold text-shadow-lg/20 " >Made {5} Contributions so far.</h2>
                    </div>
                </div>

                <div className="h-px w-full my-3 space-x-6 bg-purple-500"></div>

                <div className="flex justify-between mx-2">
                    <div>
                        <button className="cursor-pointer px-2 p-1 mx-3 border border-green-500 text-green-500 rounded hover:bg-green-500 hover:text-amber-50 hover:shadow-2xl hover:shadow-green-900 transition_all">View</button>
                        <button className="cursor-pointer px-2 p-1 mx-3 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-amber-50 hover:shadow-2xl hover:shadow-blue-900 transition_all">Edit</button>
                    </div>
                    <div>
                        <button className="cursor-pointer px-2 p-1 mx-3 border border-red-500 text-red-500 rounded hover:bg-red-500 hover:text-amber-50 hover:shadow-2xl hover:shadow-red-900 transition_all">Delete</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default UserCard