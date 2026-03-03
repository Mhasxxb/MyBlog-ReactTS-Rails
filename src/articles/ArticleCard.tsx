import { JSX, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { timeAgo } from "../config";
import { destroyArticle } from "../api/articlesApi/destroyArticleApi";
import { toast } from "react-toastify";

function ArticleCard({ truncate, articleBody, type }: { truncate: string, articleBody: any, type: 0 | 1 }): JSX.Element {
    const navigate = useNavigate()
    const [block, setBlock] = useState<string>('')
    const handleDelete = async (id: string) => {
        const confirmed = window.confirm("Are you sure you want to delete this article?");
        if (!confirmed) return;

        try {
            const result = await destroyArticle(id);

            if (!result.success) {
                alert(result.error || "Failed to delete the article.");
                return;
            }

            toast.success("Article deleted successfully.");
            if (type == 0) {
                setBlock("none")
            }
            else {
                navigate("/articles")
            }
        } catch (error) {
            console.error("Error deleting article:", error);
            toast.error("Something went wrong while deleting the article.");
        }
    };

    return (
        <div className="flex justify-center" style={{ display: `${block}` }}>
            <div className=" shadow-2xl w-full max-w-3xl m-10 outline-2 outline-gray-100 bg-amber-50 rounded-2xl p-5 shadow-gray-400/70">
                <header className="text-center">
                    <i className="font-semibold text-shadow-lg/5 text-gray-500">By:
                        <Link to={`/users/${articleBody.user_id}`}>
                            <em className="cursor-pointer">{articleBody.writer}</em>
                        </Link>
                    </i>
                    <div className="text-purple-600 text-sm  font-semibold">
                        <span className="hover:text-shadow-lg/5 transition-all cursor-pointer">category1 </span>
                        <span className="hover:text-shadow-lg/5 transition-all cursor-pointer">category2 </span>
                        <span className="hover:text-shadow-lg/5 transition-all cursor-pointer">category3 </span>

                    </div>
                </header>
                <div className="my-3 mx-7 h-px bg-purple-300"></div>
                <div>
                    <h3 className="">
                        <Link to={`/articles/${articleBody.id}`} className="cursor-pointer text-2xl text-shadow-lg/15 hover:text-shadow-lg/20 mx-5 transition-all my-2 font-semibold text-purple-800">{articleBody.title}</Link>
                    </h3>
                    <p className={" text-purple-600 text-shadow-lg/10 space-y-2 my-5 mx-5" + " " + truncate}>
                        {articleBody.description}
                    </p>

                    {type == 0 && articleBody.user_id == localStorage.getItem('id') ? <div className="flex justify-between mx-2">
                        <div>
                            <Link to={`/articles/${articleBody.id}`}>
                                <button className="cursor-pointer px-2 p-1 mx-3 border border-green-500 text-green-500 rounded hover:bg-green-500 hover:text-amber-50 hover:shadow-2xl hover:shadow-green-900 transition-all">Show</button>
                            </Link>
                            <Link to={`/articles/${articleBody.id}/edit`}>
                                <button className="cursor-pointer px-2 p-1 mx-3 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-amber-50 hover:shadow-2xl hover:shadow-blue-900 transition-all">Edit</button>
                            </Link>
                        </div>
                        <div>
                            <button className="cursor-pointer px-2 p-1 mx-3 border border-red-500 text-red-500 rounded hover:bg-red-500 hover:text-amber-50 hover:shadow-2xl hover:shadow-red-900 transition-all"
                                onClick={() => {
                                    handleDelete(articleBody.id)
                                }}
                                id="disable-del-btn"
                            >
                                Delete
                            </button>
                        </div>
                    </div> : type == 0 ?
                        <div className="flex justify-end mx-2">
                            <Link to={`/articles/${articleBody.id}`}>
                                <button className="cursor-pointer px-2 p-1 mx-3 border border-green-500 text-green-500 rounded hover:bg-green-500 hover:text-amber-50 hover:shadow-2xl hover:shadow-green-900 transition-all">Show</button>
                            </Link>
                        </div> : type == 1 && articleBody.user_id == localStorage.getItem('id') ?

                            <div>

                                <Link to={`/articles/${articleBody.id}/edit`}>
                                    <button className="cursor-pointer px-2 p-1 mx-3 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-amber-50 hover:shadow-2xl hover:shadow-blue-900 transition-all">Edit</button>
                                </Link>
                                <button className="cursor-pointer px-2 p-1 mx-3 border border-red-500 text-red-500 rounded hover:bg-red-500 hover:text-amber-50 hover:shadow-2xl hover:shadow-red-900 transition-all"
                                    onClick={() => {
                                        handleDelete(articleBody.id)
                                    }}
                                >
                                    Delete
                                </button>
                            </div> :
                            null
                    }

                </div>
                <div className="h-px bg-purple-300" style={{ margin: "20px -21px" }}></div>
                <footer className="shadow-2xl text-purple-500 text-shadow-lg/8">
                    <p>Created <b>{timeAgo(articleBody.created_at)}</b>{timeAgo(articleBody.created_at) == "just now" ? "" : " ago"}.</p>
                </footer>
            </div>
        </div>
    );
}

export default ArticleCard