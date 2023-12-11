import { useContext } from "react"
import SHOP_DATA from "../../src/shop-data.json"
import { ProductContext } from "../context/productsContext"

const Shop = () => {
    const { products } = useContext(ProductContext)
    return (
        <div>
            {SHOP_DATA.map(({ id, name }) => (
                <h1 key={id}>{name}</h1>
            ))}
        </div>
    )
}

export default Shop
