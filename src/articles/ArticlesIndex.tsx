import type { JSX } from "react"
import ArticleCard from "./ArticleCard"
function ArticleIndex(): JSX.Element {
    return (
        <>
            <div className="my-10">
                <ArticleCard truncate="truncate" />
                <ArticleCard truncate="truncate" />
                <ArticleCard truncate="truncate" />
                <ArticleCard truncate="truncate" />
                <ArticleCard truncate="truncate" />
            </div>
        </>
    )
}

export default ArticleIndex