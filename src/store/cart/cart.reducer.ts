import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../root-reducer';
import {CartItemType, CartState} from "./cart.types"



const initialState: CartState = {
  cartItems: [],
  isCartOpen: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart(state, action: PayloadAction<CartItemType>) {
      state.cartItems.push(action.payload);
    },
    removeItemFromCart(state, action: PayloadAction<number>) {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
    },
    clearItemFromCart(state, action: PayloadAction<CartItemType>) {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id);
    },
    setIsCartOpen(state, action: PayloadAction<boolean>) {
      state.isCartOpen = action.payload;
    },
  },
});

export const { addItemToCart, removeItemFromCart, clearItemFromCart, setIsCartOpen } = cartSlice.actions;

export const selectCartItems = (state: RootState) => state.cart.cartItems;
export const selectIsCartOpen = (state: RootState) => state.cart.isCartOpen;

export default cartSlice.reducer;