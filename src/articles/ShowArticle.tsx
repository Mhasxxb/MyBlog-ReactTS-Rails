import { useEffect, useState, type JSX } from "react";
import ArticleCard from "./ArticleCard";
import { articleApi } from "../api/articlesApi/showArticle";
import { useParams } from "react-router-dom";
import { Article } from "../types/articlesType/articlesType";

function ShowArticle(): JSX.Element {
  const [article, setArticle] = useState<Article | null>();
  const { id } = useParams<{ id: string }>();

  const getArticle = async () => {
    try {
      const response = await articleApi("api/v1/articles", id as string);
      console.log(response);

      if (response.success) {
        setArticle(response.data);
        console.log(response.data);
      } else {
        console.log(response.error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getArticle();
  }, []);

  return (
    <>
      {article ? (
        <ArticleCard truncate={""} articleBody={article} type={1} />
      ) : (
        <p>An error occured</p>
      )}
    </>
  );
}

export default ShowArticle;
