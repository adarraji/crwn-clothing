import { useParams } from "react-router-dom"
import { useContext, useState, useEffect, Fragment } from "react"
import { CategoriesContext } from "../../context/categoryContext"
import "./category.scss"
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
      <h2 className="title">{category.toUpperCase()}</h2>
    <div className="category-container">
      {
        products && products.map(product => <ProductCard key={product.id} product={product} />)
      }
    </div>
    </Fragment>
  )
}

export default Category
