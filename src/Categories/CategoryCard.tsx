import type { JSX } from "react"

function CategoryCard({ name }: { name: string }): JSX.Element {
    return (
        <>
            <div className="max-w-3xl mx-auto mt-10 space-x-55 rounded-xl outline-2 outline-gray-100 bg-amber-50 shadow-2xl shadow-gray-400/70 p-6">
                <div className="flex justify-between text-xl mx-10">
                    <h2 className="text-purple-800 font-bold cursor-pointer text-shadow-lg/20">{name}</h2>
                    <h2 className="text-purple-800 font-bold text-shadow-lg/20">{10} Articles</h2>
                </div>
                <div className="h-px w-full my-3 space-x-6 bg-purple-500"></div>
                <div className="flex justify-between mx-2">
                    <div className="flex justify-between mx-4 space-x-10">
                        {/* <button className="cursor-pointer px-2 p-1 mx-3 border border-green-500 text-green-500 rounded hover:bg-green-500 hover:text-amber-50 hover:shadow-2xl hover:shadow-green-900 transition_all">View</button> */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 cursor-pointer text-green-500 rounded hover:bg-green-500 hover:text-amber-50 hover:shadow-2xl hover:shadow-green-900 transition_all">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>

                        {/* <button className="cursor-pointer px-2 p-1 mx-3 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-amber-50 hover:shadow-2xl hover:shadow-blue-900 transition_all">Edit</button> */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 cursor-pointer border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-amber-50 hover:shadow-2xl hover:shadow-blue-900 transition_all">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                        </svg>

                    </div>
                    <div className="mx-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 cursor-pointer mx-3 text-red-500 rounded hover:bg-red-500 hover:text-amber-50 hover:shadow-2xl hover:shadow-red-900 transition_all">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                        </svg>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CategoryCard