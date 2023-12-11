import { useContext } from "react"
import SHOP_DATA from "../../shop-data.json"
import { ProductsContext } from "../../context/productsContext"
import ProductCard from "../../components/productCard/ProductCard"

const Shop = () => {
    const { products } = useContext(ProductsContext)
    return (
        <div>
            {SHOP_DATA.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}

export default Shop
