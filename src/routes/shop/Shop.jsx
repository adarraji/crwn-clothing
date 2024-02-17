import { Routes, Route } from "react-router-dom"
import CategoriesPreview from "../categoriesPreview/categoriesPreview"
import Category from "../category/Category"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { fetchCategories } from "../../store/categories/category.reducer"

const Shop = () => {

    const dispatch = useDispatch()   

    useEffect(() => {
        dispatch(fetchCategories())
    }, [dispatch])

    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path={":category"} element={<Category />} />
        </Routes>
    )
}

export default Shop
