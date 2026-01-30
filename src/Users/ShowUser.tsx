import type { JSX } from "react"

function UserProfile(): JSX.Element {
    function toggleContributions(): void {

    }
    return (
        <>
            {/* header for pic and name email */}
            <div className="max-w-3xl mx-auto my-10 rounded-xl outline-2 outline-gray-100 bg-amber-50 shadow-2xl shadow-gray-400/70 p-6">
                <div className="flex items-center space-y-5 gap-8">

                    {/* Profile Image */}
                    <img
                        src="src/assets/profile_pic.webp"
                        alt="profile pic"
                        className="w-28 h-28 rounded-full border border-white cursor-pointer shadow-2xl shadow-gray-700/60 hover:shadow-gray-700/90 transition-all"
                    />

                    {/* Content */}
                    <div className="flex flex-col flex-1 gap-4">

                        {/* Top Stats */}
                        <div className="flex justify-evenly gap-12">

                            {/* Articles Block */}
                            <div className="flex flex-col space-y-2.5 items-center text-shadow-lg/10">
                                <h5 className="text-purple-700 font-semibold">5</h5>
                                <h5 className="font-semibold text-gray-700">Articles</h5>
                            </div>
                            {/* Active Since Block */}
                            <div className="flex flex-col space-y-2.5 items-center text-shadow-lg/10">
                                <h5 className="text-purple-700 font-semibold">12-01-2020</h5>
                                <h5 className="font-semibold text-gray-700">Active since</h5>
                            </div>

                        </div>
                        <div className="h-px bg-purple-500" />

                        {/* Bottom Rows */}
                        <div className="grid grid-cols-2 gap-y-2 font-medium text-gray-800">
                            <button className="cursor-pointer px-2 p-1 mx-3 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-amber-50 hover:shadow-2xl hover:shadow-blue-900 transition_all">Edit profile</button>
                            <button className="cursor-pointer px-2 p-1 mx-3 border border-red-500 text-red-500 rounded hover:bg-red-500 hover:text-amber-50 hover:shadow-2xl hover:shadow-red-900 transition_all">Delete profile</button>
                        </div>
                    </div>
                </div>
                <div className="space-y-2 my-5">
                    <h2 className="text-purple-800 font-semibold text-shadow-lg/10">M.HASXXB</h2>
                    <h2 className="text-purple-700 font-semibold text-shadow-lg/10">muhmmedhaseeb2003@gmail.com</h2>

                    <p className="text-purple-600 text-center font-semibold text-shadow-lg/10">Admin - MyBlog</p>
                    <p className="text-purple-500 text-center font-semibold text-shadow-lg/10">Made {5} contributions so far</p>
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