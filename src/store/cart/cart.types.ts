export type CartItemType = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  imageUrl?: string
}

export type CartState = {
  cartItems: CartItemType[];
  isCartOpen: boolean;
}