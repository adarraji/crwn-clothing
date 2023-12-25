import { useParams } from "react-router-dom"
import { useContext, useState, useEffect } from "react"
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
    <div className="category-container">
      {
        products && products.map(product => <ProductCard key={product.id} product={product} />)
      }
    </div>
  )
}

export default Category
