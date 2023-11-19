import "./app.scss"
import Home from "./routes/home/Home"
import { Routes, Route } from "react-router-dom"
import Navigation from "./routes/navigation/Navigation"
import SignIn from "./routes/signIn/SignIn"

const Shop = () => {
  return <h1>I am the shop page</h1>
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />} >
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="signin" element={<SignIn />} />
      </Route>
    </Routes>
  )
}

export default App