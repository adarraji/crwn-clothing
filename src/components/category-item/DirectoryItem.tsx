import { useNavigate } from "react-router-dom"

import { BackgroundImage, Body, DirectoryItemContainer } from "./directoryItem.styles"

type CategoryProps = {
    title: string;
    imageurl: string;
    route: string;
}

const DirectoryItem = ({ category }: { category: CategoryProps }) => {
    const { title, imageurl, route } = category
    const navigate = useNavigate()

    const onNavigateHandler = () => navigate(route)

    return (
        <DirectoryItemContainer onClick={onNavigateHandler}>
            <BackgroundImage imageurl={imageurl} />
            <Body>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </Body>
        </DirectoryItemContainer>
    )
}

export default DirectoryItem