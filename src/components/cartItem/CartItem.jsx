import { CartItemContainer, ItemDetails } from './CartItem.styles';

const CartItem = ({ cartItem }) => {
  const { name, imageurl, price, quantity } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageurl} alt={`${name}`} />
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

