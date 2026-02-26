import type { JSX } from "react"

function Form({ children, title }: { children: JSX.Element, title:string }): JSX.Element {
    return (
        <>
            <div className="max-w-2xl m-auto mt-10 rounded-xl outline-2 outline-gray-100 bg-amber-50 shadow-2xl shadow-gray-400/70 pt-6">
                <div>
                    <h2 className="text-center text-2xl my-3 text-purple-800 text-shadow-lg/15 font-semibold">{title}</h2>
                    <div className="h-px max-w-full bg-purple-500"></div>
                    {children}
                </div>
            </div>
        </>
    )
}

export default Form