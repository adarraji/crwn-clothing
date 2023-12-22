import "./shop.scss"
import { useContext } from "react"
import { ProductsContext } from "../../context/productsContext"
import ProductCard from "../../components/productCard/ProductCard"

const Shop = () => {
    const { products } = useContext(ProductsContext)
    return (
        <div className="products-container">
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}

export default Shop
