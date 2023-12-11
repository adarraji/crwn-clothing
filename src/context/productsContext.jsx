import { createContext } from "react";
import PRODUCTS from "../../src/shop-data.json"

export const ProductContext = createContext({
    product: [],

})

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState(PRODUCTS)
    return <ProductContext.Provider value={products}>{children}</ ProductContext.Provider>
}

