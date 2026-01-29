import type { JSX } from "react"
type CardProp = {
    title: string,
    body: string
}

function Card({ title, body }: CardProp): JSX.Element {
    return (
        <>
            <div className="w-70 mx-15 my-7 p-10 border border-purple-300 hover:bg-purple-50 hover:border-gray-200 transition-all rounded-2xl hover:shadow-2xl  hover:shadow-gray-400/70">
                <h3 className="font-semibold">
                    {title}
                </h3>
                <div className="my-3 mx-5 h-px bg-gray-400/70"></div>
                <div>
                    <p>
                        {body}
                    </p>
                </div>
            </div>
        </>
    )
}

export default Card