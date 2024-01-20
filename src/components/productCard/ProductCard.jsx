import { useContext } from "react"
import { CartContext } from "../..//context/cartContext"
import Button, { BUTTON_TYPE_CLASSES } from "../button/Button"
import {
    ProductCartContainer,
    Footer,
    Name,
    Price,
} from './ProductCard.styles';

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;
    const imageurl = imageUrl
    const { addItemToCart } = useContext(CartContext);

    const addProductToCart = () => addItemToCart(product);

    return (
        <ProductCartContainer>
            <img src={imageurl} alt={`${name}`} />
            <Footer>
                <Name>{name}</Name>
                <Price>{price}</Price>
            </Footer>
            <Button
                buttonType={BUTTON_TYPE_CLASSES.inverted}
                onClick={addProductToCart}
            >
                Add to card
            </Button>
        </ProductCartContainer>
    );
};

export default ProductCard;
