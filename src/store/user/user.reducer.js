import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getCurrentUser, createUserDocumentFromAuth, signInWithGooglePopup, signInAuthUserWithEmailAndPassword, createAuthUserWithEmailAndPassword, signOutUser } from "../../utils/firebase/firebase"

const getSnapshotFromUserAuth = async (userAuth) => {
    const userSnapshot = await createUserDocumentFromAuth(userAuth)
    return { id: userSnapshot.id, ...userSnapshot.data() }
}

export const checkUserSession = createAsyncThunk("user/checkUserSession", async () => {
    const userAuth = await getCurrentUser()
    if (!userAuth) return
    return await getSnapshotFromUserAuth(userAuth)
})

export const googleSignin = createAsyncThunk("user/googleSignin", async () => {
    const { user } = await signInWithGooglePopup()
    return await getSnapshotFromUserAuth(user)
})

export const emailSignin = createAsyncThunk("user/emailSignin", async ({ email, password }) => {
    const { user } = await signInAuthUserWithEmailAndPassword(email, password)
    return await getSnapshotFromUserAuth(user)
})

export const signUp = createAsyncThunk("user/signUp", async ({ email, password, displayName }) => {
    const { user } = await createAuthUserWithEmailAndPassword( email, password)
    return await getSnapshotFromUserAuth(user, { displayName })  
})

export const signOut = createAsyncThunk("user/signOut", async () => {
    await signOutUser() 
})


const INITIAL_STATE = {
    currentUser: null,
    isLoading: false,
    error: null
}

export const userSlice = createSlice({
    name: "user",
    initialState: INITIAL_STATE,
    reducers: {
       
    },
    extraReducers: (builder) => {

        builder.addCase(signOut.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(signOut.fulfilled, (state) => {
            state.isLoading = false
            state.currentUser = null
        })
        builder.addCase(signOut.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
        })

        // Adding addMatcher for the function that share pending, fulfilled and rejected actions
        builder.addMatcher(
            (action) => {
                return [
                    checkUserSession.pending.type,
                    checkUserSession.fulfilled.type,
                    checkUserSession.rejected.type,
                    googleSignin.pending.type,
                    googleSignin.fulfilled.type,
                    googleSignin.rejected.type,
                    emailSignin.pending.type,
                    emailSignin.fulfilled.type,
                    emailSignin.rejected.type,
                    signUp.pending.type,
                    signUp.fulfilled.type,
                    signUp.rejected.type,                    
                ].includes(action.type)
            },
            (state, action) => {
                const isLoadingAction = action.type.endsWith("/pending")
                state.isLoading = isLoadingAction
                if (!isLoadingAction) {
                    state.currentUser = action.type.endsWith("/fulfilled") && action.payload
                    state.error = action.type.endsWith("/rejected") && action.payload
                }

                // Another way to do this is using if/else statments
                //
                // if(action.type.endsWith("/pending")) {
                //     state.isLoading = true
                // } else {
                //     state.isLoading = false
                //     if(action.type.endsWith("/fulfilled")) {
                //         state.currentUser = action.payload
                //     } else if(action.type.endsWith("/rejected")){
                //         state.error = action.payload
                //     }
                // }
            }
        )       
    }
})

// export const { signinSucess, signinFailed } = userSlice.actions
export const userReducer = userSlice.reducer