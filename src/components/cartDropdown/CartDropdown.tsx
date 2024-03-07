import { CartDropdownContainer, EmptyMessage, CartItems } from "./cartDropdown.styles"
import Button from "../button/Button"
import CartItem from "../cartItem/CartItem"
import { useSelector } from "react-redux"
import { selectCartItems } from "../../store/cart/cart.selector"
import { useNavigate } from "react-router-dom"

const CartDropdown = () => {

    const cartItems = useSelector(selectCartItems)
    const navigate = useNavigate()

    const goToCheckoutHandler = () => {
        navigate("./checkout")
    }

    return (
        <CartDropdownContainer>
            <CartItems>
                {cartItems.length
                    ? cartItems.map(item => <CartItem key={item.id} cartItem={item} />)
                    : <EmptyMessage>Your cart is Empty</EmptyMessage>
                }
            </CartItems>
            <Button onClick={goToCheckoutHandler}>CHECKOUT</Button>
        </CartDropdownContainer>
    )
}

export default CartDropdown