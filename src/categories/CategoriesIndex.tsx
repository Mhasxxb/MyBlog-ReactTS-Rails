import type { JSX } from "react"
import CategoryCard from "./CategoryCard"

function CategoryIndex(): JSX.Element {
    return (
        <>
            <div className="my-10">
                <CategoryCard name="Category" />
                <CategoryCard name="Category of mine" />
                <CategoryCard name="chaa" />
                <CategoryCard name="cakcbaenwoino" />
            </div>
        </>
    )
}

export default CategoryIndex