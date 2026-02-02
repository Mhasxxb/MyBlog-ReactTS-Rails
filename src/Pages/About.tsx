import type { JSX } from "react"

function About(): JSX.Element {
    return (
        <>

            <div className="max-w-3xl mx-auto shadow-2xl m-10 outline-2 outline-gray-100 bg-amber-50 rounded-2xl p-5 shadow-gray-400/70">

                <h1 className="text-3xl text-center text-shadow-lg/15 font-bold">About MyBlog</h1>
                <div className="my-3 mx-5 h-px bg-black/70" />
                <div className="p-5 text-shadow-lg/15">
                    <p>
                        We are a learning-driven platform built for people who are curious, ambitious, and eager to grow in the world of technology. Our goal is simple: make complex concepts easy to understand and practical to apply.
                    </p>
                    <br />
                    <p>
                        From programming fundamentals to modern web development, we focus on clarity, real-world examples, and structured learning. Whether you're a beginner taking your first steps or someone refining professional skills, we aim to support your journey with content that actually makes sense.
                    </p>
                    <br />
                    <p>
                        We believe learning should be:
                    </p>
                    <br />
                    <ul className=" list-disc list-inside space-y-1">
                        <li><strong>Accessible</strong> - no unnecessary jargon</li>
                        <li><strong>Practical</strong> - focused on real use cases</li>
                        <li><strong>Consistent</strong> - built step by step, not rushed</li>
                    </ul>
                    <br />
                    <p>
                        Our platform is more than just articles and tutorials — it's a growing community of learners and developers who value strong foundations and continuous improvement.
                    </p>
                    <br />
                    <strong>Learn. </strong>
                    <strong>Build. </strong>
                    <strong>Grow. </strong>
                    <br />
                    <p>That's what we stand for.</p>
                </div>
            </div>

        </>
    )
}

export default About