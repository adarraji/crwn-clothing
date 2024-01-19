import { useParams } from "react-router-dom"
import { useContext, useState, useEffect, Fragment } from "react"
import { CategoriesContext } from "../../context/categoryContext"
import { CategoryContainer, Title } from "./Category.styles.jsx"
import ProductCard from "../../components/productCard/ProductCard"


const Category = () => {
  const { category } = useParams()
  const { categoriesMap } = useContext(CategoriesContext)
  const [products, setProducts] = useState([])

  useEffect(() => {
    setProducts(categoriesMap[category])
  }, [category, categoriesMap])

  return (
    <Fragment>
      <Title>{category.toUpperCase()}</Title>
      <CategoryContainer>
        {
          products && products.map(product => <ProductCard key={product.id} product={product} />)
        }
      </CategoryContainer>
    </Fragment>
  )
}

export default Category
