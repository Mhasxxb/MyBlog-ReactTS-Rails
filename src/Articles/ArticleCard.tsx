import { JSX } from "react";
import { Link } from "react-router-dom";

function ArticleCard({ truncate }: { truncate: string }): JSX.Element {
    return (
        <div className="flex justify-center">
            <div className=" shadow-2xl w-3xl m-10 outline-2 outline-gray-100 bg-amber-50 rounded-2xl p-5 shadow-gray-400/70">
                <header className="text-center">
                    <i className="font-semibold text-shadow-lg/5 text-gray-500">By: <em className="cursor-pointer">Name</em></i>
                    <div className="text-purple-600 text-sm  font-semibold">
                        <span className="hover:text-shadow-lg/5 transition-all cursor-pointer">category1 </span>
                        <span className="hover:text-shadow-lg/5 transition-all cursor-pointer">category2 </span>
                        <span className="hover:text-shadow-lg/5 transition-all cursor-pointer">category3 </span>

                    </div>
                </header>
                <div className="my-3 mx-7 h-px bg-purple-300"></div>
                <div>
                    <h3 className="text-2xl text-shadow-lg/15 hover:text-shadow-lg/20 transition-all my-2 font-semibold cursor-pointer text-purple-800">
                        Title
                    </h3>
                    <p className={" text-purple-600 text-shadow-lg/10 space-y-2 my-5 mx-5" + " " + truncate}>
                        Description. Description. Description. Description. Description. Description. Description. Description. Description. Description. Description. Description. Description. Description. Description. Description. Description. Description. Description. Description. Description. Description. Description. Description. Description. Description. Description. Description. Description. Description. Description. Description. Description. Description. Description.
                    </p>

                    <div className="flex justify-between mx-2">
                        <div>
                            <Link to=":id">
                                <button className="cursor-pointer px-2 p-1 mx-3 border border-green-500 text-green-500 rounded hover:bg-green-500 hover:text-amber-50 hover:shadow-2xl hover:shadow-green-900 transition_all">Show</button>
                            </Link>
                            <Link to=":id/edit">
                                <button className="cursor-pointer px-2 p-1 mx-3 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-amber-50 hover:shadow-2xl hover:shadow-blue-900 transition_all">Edit</button>
                            </Link>
                        </div>
                        <div>
                            <Link to={"/"}>
                                <button className="cursor-pointer px-2 p-1 mx-3 border border-red-500 text-red-500 rounded hover:bg-red-500 hover:text-amber-50 hover:shadow-2xl hover:shadow-red-900 transition_all">Delete</button>
                            </Link>
                                
                        </div>
                    </div>

                </div>
                <div className="h-px bg-purple-300" style={{ margin: "20px -21px" }}></div>
                <footer className="shadow-2xl text-purple-500 text-shadow-lg/8">
                    <p>Created <b>2 min</b> ago.</p>
                </footer>
            </div>
        </div>
    );
}

export default ArticleCard