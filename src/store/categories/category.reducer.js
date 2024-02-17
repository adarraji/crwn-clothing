import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase"


export const fetchCategories = createAsyncThunk("categories/fetchCategories", async () => {
    const categoriesArray = await getCategoriesAndDocuments("categories")
    return categoriesArray
})

export const CATEGORIES_INITIAL_STATE = {
    categories: [],
    isLoading: false,
    error: null
}

export const categoriesSlice = createSlice({
    name: "categories",
    initialState: CATEGORIES_INITIAL_STATE,
    reducers: {
        // setCategories: (state, action) => {
        //     state.categories = action.payload
        // }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCategories.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchCategories.fulfilled, (state, action) => {
            state.isLoading = false
            state.categories = action.payload
        })
        builder.addCase(fetchCategories.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
        })
    }
})

// export const { setCategories } = categoriesSlice.actions
export const categoriesReducer = categoriesSlice.reducer