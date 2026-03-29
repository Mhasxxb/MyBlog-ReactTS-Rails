import { JSX, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { timeAgo } from "../lib/timeAgo";
import { destroyArticle } from "../api/articlesApi/destroyArticle";
import { toast } from "react-toastify";
import { Article } from "../types/articlesType/articlesType";
import Button from "../shared/Button";

function ArticleCard({
  truncate,
  articleBody,
  type,
}: {
  truncate: string;
  articleBody: Article;
  type: 0 | 1;
}): JSX.Element {
  const navigate = useNavigate();
  const [block, setBlock] = useState<boolean>(true);
  const handleDelete = async (id?: string) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this article?",
    );
    if (!confirmed) return;

    try {
      const result = await destroyArticle(id as string);

      if (!result.success) {
        alert(result.error || "Failed to delete the article.");
        return;
      }

      toast.success("Article deleted successfully.");
      if (type === 0) {
        setBlock(false);
      } else {
        navigate("/articles");
      }
    } catch (error) {
      console.error("Error deleting article:", error);
      toast.error("Something went wrong while deleting the article.");
    }
  };

  return block ? (
    <div className="flex justify-center" style={{ display: `${block}` }}>
      <div className=" shadow-2xl w-full max-w-3xl m-10 outline-2 outline-gray-100 bg-amber-50 rounded-2xl p-5 shadow-gray-400/70">
        <header className="text-center">
          <i className="font-semibold text-shadow-lg/5 text-gray-500">
            By:
            <Link to={`/users/${articleBody.user_id}`}>
              <em className="cursor-pointer">{articleBody.writer}</em>
            </Link>
          </i>
          <div className="text-purple-600 text-sm  font-semibold">
            <span className="hover:text-shadow-lg/5 transition-all cursor-pointer">
              category1{" "}
            </span>
            <span className="hover:text-shadow-lg/5 transition-all cursor-pointer">
              category2{" "}
            </span>
            <span className="hover:text-shadow-lg/5 transition-all cursor-pointer">
              category3{" "}
            </span>
          </div>
        </header>
        <div className="my-3 mx-7 h-px bg-purple-300"></div>
        <div>
          <h3 className="">
            <Link
              to={`/articles/${articleBody.id}`}
              className="cursor-pointer text-2xl text-shadow-lg/15 hover:text-shadow-lg/20 mx-5 transition-all my-2 font-semibold text-purple-800"
            >
              {articleBody.title}
            </Link>
          </h3>
          <p
            className={
              " text-purple-600 text-shadow-lg/10 space-y-2 my-5 mx-5" +
              " " +
              truncate
            }
          >
            {articleBody.description}
          </p>

          {type === 0 &&
          articleBody.user_id.toString() === localStorage.getItem("id") ? (
            <div className="flex justify-between mx-2">
              <div>
                <Link to={`/articles/${articleBody.id}`}>
                  <Button text="Show" color="green" />
                </Link>
                <Link to={`/articles/${articleBody.id}/edit`}>
                  <Button text="Edit" color="blue" />
                </Link>
              </div>
              <div>
                <Button
                  text="Delete"
                  color="red"
                  onClick={handleDelete}
                  id={articleBody.id.toString()}
                />
              </div>
            </div>
          ) : type === 0 ? (
            <div className="flex justify-end mx-2">
              <Link to={`/articles/${articleBody.id}`}>
                <Button text="Show" color="green" />
              </Link>
            </div>
          ) : type === 1 &&
            articleBody.user_id.toString() === localStorage.getItem("id") ? (
            <div>
              <Link to={`/articles/${articleBody.id}/edit`}>
                <Button text="Edit" color="blue"/>
              </Link>
              <Button
                text="Delete"
                color="red"
                onClick={handleDelete}
                id={articleBody.id.toString()}
              />
            </div>
          ) : null}
        </div>
        <div
          className="h-px bg-purple-300"
          style={{ margin: "20px -21px" }}
        ></div>
        <footer className="shadow-2xl text-purple-500 text-shadow-lg/8">
          <p>
            Created <b>{timeAgo(articleBody.created_at)}</b>
            {timeAgo(articleBody.created_at) == "just now" ? "" : " ago"}.
          </p>
        </footer>
      </div>
    </div>
  ) : (
    <></>
  );
}

export default ArticleCard;
