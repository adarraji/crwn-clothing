import { Fragment } from "react"
import CategoryPreview from "../../components/categoryPreview/CategoryPreview"
import { selectCategoriesMap, selectCategoriesIsLoading } from "../../store/categories/category.selector"
import { useSelector } from "react-redux"
import Spinner from "../../components/spinner/Spinner"

const CategoriesPreview = () => {

    const categoriesMap = useSelector(selectCategoriesMap)
    const isLoading = useSelector(selectCategoriesIsLoading)

    return (
        <Fragment>
            {
                isLoading
                    ? <Spinner />
                    : Object.keys(categoriesMap).map(title => {
                        const products = categoriesMap[title]
                        return <CategoryPreview key={title} title={title} products={products} />
                    })
            }
        </Fragment>
    )
}

export default CategoriesPreview
