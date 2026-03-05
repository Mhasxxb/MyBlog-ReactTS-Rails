import { useEffect, useState, type JSX } from "react";
import ArticleCard from "./ArticleCard";
import { articleIndexApi } from "../api/articlesApi/indexArticle";
import { usePagination } from "../context/PaginationContext";
import PaginationControls from "../helpers/PaginationHelper";
import { Article } from "../types/articlesType/articlesType";
import { toast } from "react-toastify";

function ArticleIndex(): JSX.Element {
  const { limit, offset, setTotalCount, resetOffset } = usePagination();
  const [articles, setArticles] = useState<Article[] | undefined>([]);
  const [check, setCheck] = useState<boolean>(false);

  async function getArticlesInfo(offset: number) {
    const articlesInfo = await articleIndexApi(`api/v1/articles/`, offset);
    return articlesInfo;
  }

  useEffect(() => {
    const fetchArticles = async () => {
      const result = await getArticlesInfo(offset); // wait for resolved data
      if (result.success) {
        setArticles(result.response.articles);
        setTotalCount(result.response.meta?.count as number);
      }
      // handle error message
      else {
        toast.error("Something went wrong")
      }
    };

    fetchArticles();
  }, [limit, offset, check]);

  useEffect(() => {
    resetOffset();
    setCheck(!check);
  }, []);

  return (
    <>
      <div className="my-10">
        {articles !== undefined ? (
          <>
            <PaginationControls />
            {articles.map((article) => {
              return (
                <div key={article.id}>
                  <ArticleCard
                    truncate="truncate"
                    articleBody={article}
                    type={0}
                  />
                </div>
              );
            })}
            <PaginationControls />
          </>
        ) : (
          <p>Nothing to show</p>
        )}
      </div>
    </>
  );
}

export default ArticleIndex;
