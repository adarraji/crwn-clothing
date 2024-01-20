import { BackgroundImage, Body, DirectoryItemContainer } from "./directoryItem.styles.jsx"

const DirectoryItem = ({ category }) => {
    const { title, imageurl } = category
    return (
        <DirectoryItemContainer>
            <BackgroundImage imageurl={imageurl} />
            <Body>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </Body>
        </DirectoryItemContainer>
    )
}

export default DirectoryItem