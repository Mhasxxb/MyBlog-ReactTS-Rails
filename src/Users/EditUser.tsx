import type { JSX } from "react"
import Form from "../FormHelper"
import { Button } from "@headlessui/react"

function EditingLayout(): JSX.Element {
    return (
        <>
            <div>
                <div className="space-y-6 my-7">
                    <div className="flex justify-between mx-20">
                        <label htmlFor="Username" className="text-purple-800 text-shadow-lg/10 font-semibold">Username: </label>
                        <input type="text" placeholder="Enter username" className="border-2 px-2 text-shadow-lg/5 text-purple-600/90 border-gray-400/50 rounded focus:outline-0 w-80 focus:border-purple-400" id="Username" />
                    </div>
                    <div className="flex justify-between mx-20">
                        <label htmlFor="Email" className="text-purple-800 text-shadow-lg/10 font-semibold">Email: </label>
                        <input type="text" placeholder="Enter Email" className="border-2 px-2 text-shadow-lg/5 text-purple-600/90 border-gray-400/50 rounded focus:outline-0 w-80 focus:border-purple-400" id="Email" />
                    </div>

                </div>
                <div className="text-center my-3">

                    <Button className="inline-flex items-center gap-2 rounded-md cursor-pointer my-5 bg-purple-950 px-3 py-1.5 font-semibold text-white focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white shadow-[0_12px_30px_rgba(156,163,175,0.60)] transition-all hover:outline-purple-900 hover:shadow-[0_12px_30px_rgba(156,163,175,0.95)] data-hover:bg-purple-900 data-open:bg-purple-900">
                        Update profile
                    </Button>

                </div>
            </div >

        </>
    )
}
function EditUser(): JSX.Element {
    return (
        <>
            <Form title="Edit profile">
                <EditingLayout />
            </Form>
        </>
    )
}

export default EditUser