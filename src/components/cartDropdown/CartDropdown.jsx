import "./cartDropdown.scss"
import Button from "../../components/button/Button"
import CartItem from "../cartItem/CartItem"
import { useContext } from "react"
import { CartContext } from "../../context/cartContext"

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext)

    return (
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {cartItems.map(item => (<CartItem key={item.id} cartItem={item} />))}
            </div>
            <Button>CHECKOUT</Button>

        </div>
    )
}

export default CartDropdown