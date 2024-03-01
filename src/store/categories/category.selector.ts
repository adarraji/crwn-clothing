import { createSelector } from "reselect"
import { RootState } from "../root-reducer"
import { CategoryMap } from "./category.types"

const selectCategoryReducer = (state:RootState) => state.categories

export const selectCategories = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => categoriesSlice.categories
)

export const selectCategoriesMap = createSelector(
    [selectCategories],
    (categories) => categories.reduce((acc:CategoryMap, category) => {
        const { title, items } = category
        acc[title.toLowerCase()] = items
        return acc
    }, {})
)

export const selectCategoriesIsLoading = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => categoriesSlice.isLoading
)