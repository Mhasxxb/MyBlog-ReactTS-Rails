import type { JSX } from "react"
import Form from "../FormHelper"
import { Button } from "@headlessui/react"

function EditingLayout(): JSX.Element {
    return (
        <>
            <div>
                <div className="space-y-6 my-7">
                    <div className="flex justify-between mx-20">
                        <label htmlFor="Title" className="text-purple-800 text-shadow-lg/10 font-semibold">Title: </label>
                        <input type="text" placeholder="Add a title" className="border-2 px-2 text-shadow-lg/5 text-purple-600/90 border-gray-400/50 rounded focus:outline-0 w-80 focus:border-purple-400" id="Username" />
                    </div>
                    <div className="flex justify-between mx-20">
                        <label htmlFor="Description" className="text-purple-800 text-shadow-lg/10 font-semibold">Description: </label>
                        <input type="text" placeholder="Add your description" className="border-2 px-2 text-shadow-lg/5 text-purple-600/90 border-gray-400/50 rounded focus:outline-0 w-80 focus:border-purple-400" id="Email" />
                    </div>
                </div>
                <div className="text-center my-3">
                    <Button className="inline-flex items-center my-5 gap-2 rounded-md cursor-pointer bg-purple-950 px-3 py-1.5 font-semibold text-white focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white shadow-[0_12px_30px_rgba(156,163,175,0.60)] transition-all hover:outline-purple-900 hover:shadow-[0_12px_30px_rgba(156,163,175,0.95)] data-hover:bg-purple-900 data-open:bg-purple-900">
                        Update article
                    </Button>
                </div>
            </div >

        </>
    )
}
function EditArticle(): JSX.Element {
    return (
        <>
            <Form title="Edit your article">
                <EditingLayout />
            </Form>
        </>
    )
}

export default EditArticle