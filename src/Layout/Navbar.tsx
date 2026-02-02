import type { JSX } from "react";
import '@tailwindplus/elements'
import DropDown from "./DropDown";

function Navbar(): JSX.Element {
    return (
        <>
            <nav>
                <ul className="bg-purple-900 py-2 flex items-center shadow-2xl shadow-grey-100">
                    <li className="text-amber-200 mx-4 text-2xl cursor-pointer font-bold">MyBlog</li>
                    <li className="text-amber-200 font-semibold mx-4 cursor-pointer py-4">Bloggers</li>
                    <li className="text-amber-200 mx-4 cursor-pointer py-4">
                        <DropDown title="Article" firstVal="View articles" secondVal="Add article" />
                    </li>
                    <li className="text-amber-200 mx-4 cursor-pointer py-4">
                        <DropDown title="Categories" firstVal="View categories" secondVal="Add category" />
                    </li>
                    <li className="text-amber-200 mx-4 cursor-pointer py-4">
                        <DropDown title={"User"} firstVal="Show profile" secondVal="Edit details" />
                    </li>
                    <li className="text-amber-200 mx-4 font-semibold cursor-pointer py-4">About us</li>
                    <li className="text-amber-200 mx-4 text- font-semibold cursor-pointer py-4">Login</li>

                </ul>
            </nav>
        </>
    )
}

export default Navbar   