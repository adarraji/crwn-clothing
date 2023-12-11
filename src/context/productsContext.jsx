import { createContext } from "react";
import PRODUCTS from "../../src/shop-data.json"
import { useState } from "react";

export const ProductsContext = createContext({
    product: [],

})

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState(PRODUCTS)
    return <ProductsContext.Provider value={{ products }}>{children}</ ProductsContext.Provider>
}

