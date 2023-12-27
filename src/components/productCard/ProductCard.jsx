import { useContext } from "react"
import { CartContext } from "../..//context/cartContext"
import Button, { BUTTON_TYPE_CLASSES } from "../button/Button"
import "./productCard.scss"

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product
    const { addItemToCart } = useContext(CartContext)

    const addProductToCart = () => addItemToCart(product)

    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={`${name}`} />
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
                <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>add to cart</Button>
            </div>
        </div>
    )
}

export default ProductCard
