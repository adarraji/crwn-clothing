import { createContext, useReducer, } from "react";
import { createAction } from "../utils/reducer/reducer.utils"


const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === productToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }

    return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
    // find the cart item to remove
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToRemove.id
    );

    // check if quantity is equal to 1, if it is remove that item from the cart
    if (existingCartItem.quantity === 1) {
        return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
    }

    // return back cartitems with matching cart item with reduced quantity
    return cartItems.map((cartItem) =>
        cartItem.id === cartItemToRemove.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    );
};

const clearCartItem = (cartItems, cartItemToClear) => {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id)
}


export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    addItemToCart: () => { },
    removeItemFromCart: () => { },
    clearItemFromCart: () => { },
    cartCount: 0,
    cartTotal: 0
})

export const CART_ACTION_TYPES = {
    SET_CART_ITEMS: "SET_CART_ITEMS",
    SET_IS_CART_OPEN: "SET_IS_CART_OPEN"
}

const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
    cartCount: 0,
    cartTotal: 0
}

const cartReducer = (state, action) => {
    const { type, payload } = action

    switch (type) {
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                ...payload
            }
        case CART_ACTION_TYPES.SET_IS_CART_OPEN:
            return {
                ...state, isCartOpen: payload
            }
        default:
            throw new Error(`Unhandled type of ${type} in cartReducer`)
    }
}

export const CartProvider = ({ children }) => {

    const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE)
    const { isCartOpen, cartItems, cartCount, cartTotal } = state

    const updateCartItemsRecuder = (newCartItems) => {

        const newCartCount = newCartItems.reduce((cartTotal, cartItem) => cartTotal + cartItem.quantity, 0)
        const newTotal = newCartItems.reduce((cartTotal, cartItem) => cartTotal + cartItem.quantity * cartItem.price, 0)



        dispatch(createAction(CART_ACTION_TYPES.SET_CART_ITEMS, { cartItems: newCartItems, cartTotal: newTotal, cartCount: newCartCount }))

    }
    const addItemToCart = (productToAdd) => {
        const newcartItems = addCartItem(cartItems, productToAdd)
        updateCartItemsRecuder(newcartItems)
    }

    const removeItemFromCart = (cartItemToRemove) => {
        const newcartItems = removeCartItem(cartItems, cartItemToRemove)
        updateCartItemsRecuder(newcartItems)
    }

    const clearItemFromCart = (cartItemToClear) => {
        const newcartItems = clearCartItem(cartItems, cartItemToClear)
        updateCartItemsRecuder(newcartItems)
    }

    const setIsCartOpen = (bool) => {
        dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool))
    }

    const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart, cartCount, removeItemFromCart, clearItemFromCart, cartTotal }

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}