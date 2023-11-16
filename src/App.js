import React from 'react'

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
<<<<<<< HEAD
      {categories.map(category => (
        <div key={category.id} className="category-container">
          <div className="background-image" />
          <div className="category-body-container">
            <h2>{category.title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
      ))}
=======
      <div className="category-container">
        {/* <img/> */}
        <div className="category-body-container">
          <h2>Hats</h2>
          <p>Shop Now</p>
        </div>
      </div>
      <div className="category-container">
        {/* <img/> */}
        <div className="category-body-container">
          <h2>Jackets</h2>
          <p>Shop Now</p>
        </div>
      </div>
      <div className="category-container">
        {/* <img/> */}
        <div className="category-body-container">
          <h2>Sneakers</h2>
          <p>Shop Now</p>
        </div>
      </div>
      <div className="category-container">
        {/* <img/> */}
        <div className="category-body-container">
          <h2>Womens</h2>
          <p>Shop Now</p>
        </div>
      </div>
      <div className="category-container">
        {/* <img/> */}
        <div className="category-body-container">
          <h2>Mens</h2>
          <p>Shop Now</p>
        </div>
      </div>

>>>>>>> 20430e9c6035fa2957322745c4654a90cb5b93e2
    </div>
  )
}

export default App