import { createAsyncThunk, createSlice, PayloadAction  } from "@reduxjs/toolkit"
import { getCurrentUser, createUserDocumentFromAuth, signInWithGooglePopup, signInAuthUserWithEmailAndPassword, createAuthUserWithEmailAndPassword, signOutUser } from "../../utils/firebase/firebase"
import { UserData } from "../../utils/firebase/firebase.types"
import { UserState, UserFormData } from "./user.types"

const getSnapshotFromUserAuth = async (userAuth: any): Promise<UserData | null> => {
    const userSnapshot = await createUserDocumentFromAuth(userAuth)
    if (!userSnapshot) return null
    return { id: userSnapshot.id, ...userSnapshot.data() } as UserData
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

export const emailSignin = createAsyncThunk("user/emailSignin", async ({ email, password }: UserFormData) => {
    const userCredential = await signInAuthUserWithEmailAndPassword(email, password)
    const user = userCredential ? userCredential.user : null;
    return await getSnapshotFromUserAuth(user)
})

export const signUp = createAsyncThunk("user/signUp", async ({ email, password, displayName }: UserFormData) => {
    const userCredential = await createAuthUserWithEmailAndPassword(email, password)
    const user = userCredential ? userCredential.user : null;
    return await getSnapshotFromUserAuth(user)
})

export const signOut = createAsyncThunk("user/signOut", async () => {
    await signOutUser()
})


const INITIAL_STATE: UserState = {
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
            if (typeof action.payload === "string") {
                state.error = action.payload
            } else {
                state.error = null
            }

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
            (state, action:PayloadAction<UserData | null | string>) => {
                const isLoadingAction = action.type.endsWith("/pending")
                state.isLoading = isLoadingAction
                if (!isLoadingAction) {
                    if(typeof action.payload !== "boolean" ){
                        state.currentUser = action.payload as UserData | null
                    }                    
                    state.error = action.type.endsWith("/rejected") ? action.payload as string | null : null                }

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