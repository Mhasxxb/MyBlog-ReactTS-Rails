import type { JSX } from "react";
import '@tailwindplus/elements'
import DropDown from "./DropDown";
import { Link } from "react-router-dom";

function Navbar(): JSX.Element {
    return (
        <>
            <nav>
                <ul className="bg-purple-900 py-2 flex items-center shadow-2xl shadow-grey-100">
                    <li className="text-amber-200 mx-4 text-2xl cursor-pointer font-bold"><Link to={"/"}>MyBlog</Link></li>
                    <li className="text-amber-200 font-semibold mx-4 cursor-pointer py-4"><Link to={"users"}>Bloggers</Link></li>
                    <li className="text-amber-200 mx-4 cursor-pointer py-4">
                        <DropDown title="Article" firstVal="View articles" firstRoute="articles" secondVal="Add article" secondRoute="articles/new" />
                    </li>
                    <li className="text-amber-200 mx-4 cursor-pointer py-4">
                        <DropDown title="Categories" firstVal="View categories" firstRoute="categories" secondVal="Add category" secondRoute="categories/new" />
                    </li>
                    <li className="text-amber-200 mx-4 cursor-pointer py-4">
                        <DropDown title={"User"} firstVal="Show profile" firstRoute="users/:id" secondVal="Edit details" secondRoute="users/:id/edit" />
                    </li>
                    <li className="text-amber-200 mx-4 font-semibold cursor-pointer py-4"><Link to={"about"}>About us</Link></li>
                    <li className="text-amber-200 mx-4 text- font-semibold cursor-pointer py-4"><Link to={"login"}>Login</Link></li>

                </ul>
            </nav>
        </>
    )
}

export default Navbar   