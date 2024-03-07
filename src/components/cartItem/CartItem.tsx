import { CartItemContainer, ItemDetails } from './CartItem.styles';

type CartItemProps = {
  cartItem: {
    name: string;
    imageUrl?: string;
    price: number;
    quantity: number;
  };
}

const CartItem = ({ cartItem }:CartItemProps) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <span>{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;

