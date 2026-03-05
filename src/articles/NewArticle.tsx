import { useState, type JSX } from "react";
import Form from "../helpers/FormHelper";
import { newArticleApi } from "../api/articlesApi/newArticle";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ApiArticleResponse } from "../types/articlesType/articlesType";

function NewLayout(): JSX.Element {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();
    console.log("sub");
    if (confirm("Do you want to post this article?")) {
      try {
        const response: ApiArticleResponse = await newArticleApi("api/v1", {
          title: title,
          description: description,
        });
        if (response.success == true) {
          toast.success(response.message);
          navigate(`/articles/${response.id}`);
        } else {
          response.error ? toast.error(response.error[0]) : null;
        }
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong.");
      }
    }
  };

  return (
    <form
      onSubmit={(e: React.FormEvent<HTMLFormElement>): void => {
        handleSubmit(e);
      }}
    >
      <div>
        <div className="space-y-6 my-7">
          <div className="space-y-6 my-7">
            <div className="flex justify-between mx-20">
              <label
                htmlFor="Title"
                className="text-purple-800 text-shadow-lg/10 font-semibold"
              >
                Title:{" "}
              </label>
              <input
                type="text"
                placeholder="Add a title"
                value={title}
                className="border-2 px-2 text-shadow-lg/5 text-purple-600/90 border-gray-400/50 rounded focus:outline-0 w-80 focus:border-purple-400"
                id="Title"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </div>
            <div className="flex justify-between mx-20">
              <label
                htmlFor="Description"
                className="text-purple-800 text-shadow-lg/10 font-semibold"
              >
                Description:{" "}
              </label>
              <textarea
                placeholder="Add your description"
                value={description}
                rows={5}
                className="border-2 px-2 text-shadow-lg/5 text-purple-600/90 border-gray-400/50 rounded focus:outline-0 w-80 focus:border-purple-400"
                id="Description"
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
        <div className="text-center my-3">
          <button
            type="submit"
            className="inline-flex items-center my-5 gap-2 rounded-md cursor-pointer bg-purple-950 px-3 py-1.5 font-semibold text-white focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white shadow-[0_12px_30px_rgba(156,163,175,0.60)] transition-all hover:outline-purple-900 hover:shadow-[0_12px_30px_rgba(156,163,175,0.95)] data-hover:bg-purple-900 data-open:bg-purple-900"
          >
            Create article
          </button>
        </div>
      </div>
    </form>
  );
}

function NewArticle(): JSX.Element {
  return (
    <>
      <Form title="Add your article">
        <NewLayout />
      </Form>
    </>
  );
}

export default NewArticle;
