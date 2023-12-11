import { useContext } from "react"
import SHOP_DATA from "../../src/shop-data.json"
import { ProductsContext } from "../context/productsContext"

const Shop = () => {
    const { products } = useContext(ProductsContext)
    return (
        <div>
            {SHOP_DATA.map(({ id, name }) => (
                <h1 key={id}>{name}</h1>
            ))}
        </div>
    )
}

export default Shop
