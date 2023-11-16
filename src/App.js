import React from 'react'
import "./app.scss"

const categories = [
  {
    id: 1,
    title: "Hats",
  },
  {
    id: 2,
    title: "Jackets",
  },
  {
    id: 3,
    title: "Sneakers",
  },
  {
    id: 4,
    title: "Womens",
  },
  {
    id: 5,
    title: "Mens",
  },
]

const App = () => {
  return (
    <div className="categories-container">
      {categories.map((category, index) => (
        <div key={index} className="category-container">
          <div className="background-image" />
          <div className="category-body-container">
            <h2>{category.title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default App