import { Routes, Route } from "react-router-dom"
import CategoriesPreview from "../categoriesPreview/categoriesPreview"
import Category from "../category/Category"
import { useEffect } from "react"
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase"
import { useDispatch } from "react-redux"
import { setCategoriesMap } from "../../store/categories/category.action"

const Shop = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments()
            dispatch(setCategoriesMap(categoryMap))
        }

        getCategoriesMap()
    }, [dispatch])

    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path={":category"} element={<Category />} />
        </Routes>
    )
}

export default Shop
