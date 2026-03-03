import { useEffect, useState, type JSX } from "react"
import Form from "../helpers/FormHelper"
import { articleApi } from "../api/articlesApi/showArticleApi"
import { Article, ApiArticle } from "../App.types"
import { useNavigate, useParams } from "react-router-dom"
import { updateArticleApi } from "../api/articlesApi/editArticleApi"
import { toast } from "react-toastify"
function EditingLayout(): JSX.Element {
    const [article, setArticle] = useState<Article | null>()
    const updatedValues: ApiArticle = {
        title: "",
        description: ""
    }
    const navigate = useNavigate()
    const { id } = useParams<{ id: string }>()
    const getArticle = async () => {
        try {
            const response = await articleApi("api/v1/articles", id as string)
            console.log(response);

            if (response.success) {
                setArticle(response.data)
                console.log(response.data);
                setTitle(response.data?.title as string)
                setDescription(response.data?.description as string)

            }
            else {
                console.log(response.error)
            }
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getArticle()
    }, [])

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()  
        if (confirm("Are you sure you want to make these changes?")) {
            try {

                let response = await updateArticleApi("api/v1", id as string, {
                    title: title,
                    description: description
                })
                if(response.success){
                    toast.success(response.message)
                    navigate(`/articles/${id}`)
                }
                else{
                    response.error? toast.error(response.error[0]): null
                }
                
            }
            catch (error) {
                toast.error("Something went wrong while updating the article.")
                console.log(error)
            }
        }
    }

    const [title, setTitle] = useState<string>(article?.title as string)
    const [description, setDescription] = useState<string>(article?.description as string)
    return (
        <form onSubmit={(e: React.FormEvent<HTMLFormElement>): void => {
            handleSubmit(e)
        }}>
            <div>
                <div className="space-y-6 my-7">
                    <div className="flex justify-between mx-20">
                        <label htmlFor="Title" className="text-purple-800 text-shadow-lg/10 font-semibold">Title: </label>
                        <input type="text"
                            placeholder="Add a title"
                            value={title} className="border-2 px-2 text-shadow-lg/5 text-purple-600/90 border-gray-400/50 rounded focus:outline-0 w-80 focus:border-purple-400"
                            id="Title"
                            onChange={(e) => {
                                setTitle(e.target.value)
                            }}
                        />
                    </div>
                    <div className="flex justify-between mx-20">
                        <label htmlFor="Description" className="text-purple-800 text-shadow-lg/10 font-semibold">Description: </label>
                        <textarea placeholder="Add your description"
                            value={description}
                            rows={5}
                            className="border-2 px-2 text-shadow-lg/5 text-purple-600/90 border-gray-400/50 rounded focus:outline-0 w-80 focus:border-purple-400"
                            id="Description"
                            onChange={(e) => {
                                setDescription(e.target.value)
                                updatedValues.description = e.target.value
                            }}
                        />
                    </div>
                </div>
                <div className="text-center my-3">
                    <button className="inline-flex items-center my-5 gap-2 rounded-md cursor-pointer bg-purple-950 px-3 py-1.5 font-semibold text-white focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white shadow-[0_12px_30px_rgba(156,163,175,0.60)] transition-all hover:outline-purple-900 hover:shadow-[0_12px_30px_rgba(156,163,175,0.95)] data-hover:bg-purple-900 data-open:bg-purple-900">
                        Update article
                    </button>
                </div>
            </div >

        </form>
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