import { createContext, useEffect, useState } from "react";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase"

export const CategoriesContext = createContext({
    categoriesMap: {},

})

export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({})

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments()
            console.log(categoryMap)
            setCategoriesMap(categoryMap)
        }

        getCategoriesMap()
    }, [])

    return <CategoriesContext.Provider value={{ categoriesMap, setCategoriesMap }}>{children}</ CategoriesContext.Provider>
}

