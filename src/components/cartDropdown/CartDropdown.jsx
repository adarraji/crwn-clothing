import "./cartDropdown.scss"
import Button from "../../components/button/Button"

const CartDropdown = () => {
    return (
        <div className="cart-dropdown-container">
            <div className="cart-items" />
            <Button>GO TO CHECKOUT</Button>

        </div>
    )
}

export default CartDropdown