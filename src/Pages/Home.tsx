import type { JSX } from "react"
import Card from "./Card"
import { Button } from "@headlessui/react"

function Home(): JSX.Element {
    return (
        <>
            <div className=" shadow-2xl m-10 outline-2 outline-gray-100 bg-amber-50 rounded-2xl p-5 shadow-gray-400/70">

                <h1 className="text-3xl text-center font-bold">MyBlog</h1>
                <div className="my-3 mx-5 h-px bg-purple-950/70" />
                <div className="p-5 m-5">
                    <p>
                        Welcome to <strong>MyBlog</strong> your online solution to manage your blogs.
                    </p>
                    <div className="my-5 h-px bg-purple-950/7" />
                    <h2 className="text-xl"><strong>Why us?</strong></h2>
                    <div className="flex justify-center">
                        <Card
                            title="Beginner Friendly"
                            body="Concepts explained step by step with no unnecessary jargon." />
                        <Card
                            title="Practical Learning"
                            body="Real-world examples you can apply immediately." />
                        <Card
                            title="Strong Foundations"
                            body="Focus on core principles that actually matter long term." />
                    </div>
                    <div className="my-5 h-px bg-purple-950/25" />
                    <h2 className="text-xl"><strong>Featured Categories</strong></h2>
                    <div className="">
                        <ul className="list-disc list-inside my-2 mx-10">
                            <li>Web Development</li>
                            <li>JavaScript & React</li>
                            <li>Backend & Databases</li>
                            <li>Programming Fundamental</li>
                            <li>UI / UX Basics</li>
                            <li>Career & Learning Guides</li>
                        </ul>
                    </div>
                    <div className="my-5 h-px bg-purple-950/25" />
                    <h2 className="text-xl font-bold">Ready to start learning.</h2>
                    <div className="text-center my-3">

                        <Button className="inline-flex items-center gap-2 rounded-md cursor-pointer bg-purple-950 px-3 py-1.5 font-semibold text-white focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white shadow-[0_12px_30px_rgba(156,163,175,0.60)] transition-all hover:outline-purple-900 hover:shadow-[0_12px_30px_rgba(156,163,175,0.95)] data-hover:bg-purple-900 data-open:bg-purple-900">
                            Sign up
                        </Button>

                    </div>
                </div>
            </div>
        </>
    )
}

{/* <h2 className="text-xl"><strong></strong></h2>
                    <div className="">
                        
                    </div> */}

export default Home