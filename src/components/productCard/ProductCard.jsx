import Button from "../button/Button"
import "./productCard.scss"

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product
    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={`${name}`} />
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
                <Button buttonType="inverted">add to cart</Button>
            </div>
        </div>
    )
}

export default ProductCard
