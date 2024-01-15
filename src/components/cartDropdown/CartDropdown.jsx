import { CartDropdownContainer, EmptyMessage, CartItems } from "./cartDropdown.styles"
import Button from "../../components/button/Button"
import CartItem from "../cartItem/CartItem"
import { useContext } from "react"
import { CartContext } from "../../context/cartContext"
import { useNavigate } from "react-router-dom"

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext)
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