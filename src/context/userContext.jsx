import { createContext, useEffect, useReducer } from "react";
import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utils/firebase/firebase";
import { createAction } from "../utils/reducer/reducer.utils"


export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
})

export const USER_ACTION_TYPES = {
    SET_CURRENT_USER: "SET_CURRENT_USER"
}

const INITIAL_STATE = {
    currentUser: null
}

const userReducer = (state, action) => {
    const { type, payload } = action

    switch (type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                currentUser: payload
            }
        default:
            throw new Error(`Unhandled type of ${type} in userReducer`)
    }
}

export const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(userReducer, INITIAL_STATE)

    const { currentUser } = state
    console.log(currentUser)

    const setCurrentUser = (user) => {
        dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user))
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if (user) {
                createUserDocumentFromAuth(user)
            }
            setCurrentUser(user)
        })
        return unsubscribe
    }, [])

    return <UserContext.Provider value={{ currentUser, setCurrentUser }}>{children}</UserContext.Provider>
}

