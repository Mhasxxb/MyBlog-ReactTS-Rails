import { useEffect, useState, type JSX } from "react"
import ArticleCard from "./ArticleCard"
import { articleIndexApi } from "../api/articlesApi/indexArticleApi"
import { usePagination } from "../context/PaginationContext"
import PaginationControls from "../helpers/PaginationHelper"
import { Article } from "../App.types"

function ArticleIndex(): JSX.Element {
    const { limit, offset, setTotalCount, resetOffset } = usePagination()
    const [check, setCheck] = useState<boolean>(false)
    useEffect(() => {
        resetOffset()
        setCheck(!check)
    }, [])

    const [articles, setArticles] = useState<Article[]>([])
    async function getArticlesInfo(offset: number) {
        const articlesInfo = await articleIndexApi(`api/v1/articles/`, offset);

        console.log(`api/v1/users/?limit=${limit}&offset=${offset}`);
        return articlesInfo;
    }

    useEffect(() => {
        const fetchArticles = async () => {
            console.log(offset);
            const result = await getArticlesInfo(offset); // wait for resolved data
            console.log(result);
            if (result.success) {
                console.log(result);
                setArticles(result.response.articles)
                setTotalCount(result.response.meta.count as number)
            }
            // handle error message
            else {

            }
        };

        fetchArticles();
    }, [limit, offset, check]);

    return (
        <>
            <div className="my-10">
                {articles.length > 0 ?
                    <>
                        <PaginationControls />
                        {articles.map((article) => {
                            return (
                                <div key={article.id}>
                                    <ArticleCard truncate='truncate' articleBody={article} type={0} />
                                </div>
                            )
                        })}
                        <PaginationControls />
                    </> :
                    <p>nothing to show</p>
                }
            </div>
        </>
    )
}

export default ArticleIndex