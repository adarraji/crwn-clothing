
import DirectoryItem from "../category-item/DirectoryItem"
import { DirectoryContainer } from "./Directory.styles.jsx"

const Directory = () => {
    const categories = [
        {
            "id": 1,
            "title": "hats",
            "imageurl": "https://i.ibb.co/cvpntL1/hats.png"
        },
        {
            "id": 2,
            "title": "jackets",
            "imageurl": "https://i.ibb.co/px2tCc3/jackets.png"
        },
        {
            "id": 3,
            "title": "sneakers",
            "imageurl": "https://i.ibb.co/0jqHpnp/sneakers.png"
        },
        {
            "id": 4,
            "title": "womens",
            "imageurl": "https://i.ibb.co/GCCdy8t/womens.png"
        },
        {
            "id": 5,
            "title": "mens",
            "imageurl": "https://i.ibb.co/R70vBrQ/men.png"
        }
    ]

    return (
        <DirectoryContainer>
            {categories.map(category => (
                <DirectoryItem key={category.id} category={category} />
            ))}
        </DirectoryContainer>
    )
}

export default Directory