import { useParams } from "react-router-dom"
import { useState, useEffect, Fragment } from "react"
import { CategoryContainer, Title } from "./Category.styles.jsx"

import ProductCard from "../../components/productCard/ProductCard"
import Spinner from "../../components/spinner/Spinner.jsx"

import { selectCategoriesMap, selectCategoriesIsLoading } from "../../store/categories/category.selector"
import { useSelector } from "react-redux"


const Category = () => {
  const { category } = useParams()
  const [products, setProducts] = useState([])
  const categoriesMap = useSelector(selectCategoriesMap)
  const isLoading = useSelector(selectCategoriesIsLoading)

  useEffect(() => {
    setProducts(categoriesMap[category])
  }, [category, categoriesMap])

  return (
    <Fragment>
      <Title>{category.toUpperCase()}</Title>
      {
        isLoading ? <Spinner /> : <CategoryContainer>
          {
            products && products.map(product => <ProductCard key={product.id} product={product} />)
          }
        </CategoryContainer>
      }
    </Fragment>
  )
}

export default Category
