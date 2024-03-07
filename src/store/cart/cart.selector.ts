import { RootState } from '../root-reducer';

export const selectCartItems = (state: RootState) => state.cart.cartItems;
export const selectIsCartOpen = (state: RootState) => state.cart.isCartOpen;
export const selectCartCount = (state: RootState) => state.cart.cartItems.reduce((acc: number, item: { quantity: number }) => acc + item.quantity, 0);
export const selectCartTotal = (state: RootState) => state.cart.cartItems.reduce((acc: number, item: { price: number, quantity: number }) => acc + item.price * item.quantity, 0);