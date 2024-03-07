import { useParams } from "react-router-dom"
import { useState, useEffect, Fragment } from "react"
import { CategoryContainer, Title } from "./Category.styles"
import ProductCard from "../../components/productCard/ProductCard.jsx"
import Spinner from "../../components/spinner/Spinner.jsx"
import { selectCategoriesMap, selectCategoriesIsLoading } from "../../store/categories/category.selector"
import { useSelector } from "react-redux"
import { CategoryItem } from "../../store/categories/category.types"

type CategoryRouteParams = {
  category: string
}


const Category = () => {
  const { category } = useParams<keyof CategoryRouteParams>() as CategoryRouteParams
  const [products, setProducts] = useState<CategoryItem[]>([])
  const categoriesMap = useSelector(selectCategoriesMap)
  const isLoading = useSelector(selectCategoriesIsLoading)

  useEffect(() => {
    setProducts(categoriesMap[category])
  }, [category, categoriesMap])

  return (
    <Fragment>
      <Title>{category.toUpperCase()}</Title>
      {
        isLoading
          ? <Spinner />
          : <CategoryContainer>
            {
              products && products.map(product => <ProductCard key={product.id} product={product} />)
            }
          </CategoryContainer>
      }
    </Fragment>
  )
}

export default Category
