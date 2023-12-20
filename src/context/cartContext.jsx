import { createContext, useEffect, useState } from "react";


const addcartItem = (cartItems, productToAdd) => {

    // find if cartItems contains productToAdd
    const existingCartItem = cartItems.find(cartItem => cartItem.id === productToAdd.id)

    // if found, increment quantity
    if (existingCartItem) {
        return cartItems.map(cartItem => cartItem.id === productToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem)
    }

    // return new array wih modified cartItems/ new cart item
    return [...cartItems, { ...productToAdd, quantity: 1 }]

}

const removeCartItem = (cartItems, cartItemToremove) => {

    // find cart item to remove
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToremove.id)

    // check if quantity is equal to 1, if it is, remove that item from the cart
    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToremove.id)
    }

    // return back cartitems with  matching cart item which reduced quantity
    return cartItems.map(cartItem => cartItem.id === cartItemToremove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem)
}

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
    total: 0
})

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [cartCount, setCartCount] = useState(0)
    const [cartTotal, setTotal] = useState(0)

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        setCartCount(newCartCount)

    }, [cartItems])

    useEffect(() => {
        const newTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0)
        setTotal(newTotal)

    }, [cartItems])

    const addItemToCart = (productToAdd) => {
        setCartItems(addcartItem(cartItems, productToAdd))
    }

    const removeItemFromCart = (cartItemToRemove) => {
        setCartItems(removeCartItem(cartItems, cartItemToRemove))
    }

    const clearItemFromCart = (cartItemToClear) => {
        setCartItems(clearCartItem(cartItems, cartItemToClear))
    }

    const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart, cartCount, removeItemFromCart, clearItemFromCart, cartTotal }

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}