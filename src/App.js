import Home from "./routes/home/Home"
import { Routes, Route } from "react-router-dom"
import Navigation from "./routes/navigation/Navigation"
import Authentication from "./routes/authentication/Authentication"
import Shop from "./routes/shop/Shop"
import Checkout from "./routes/checkout/Checkout"
import { useEffect } from "react"
import { createUserDocumentFromAuth, onAuthStateChangedListener } from "./utils/firebase/firebase"
import { setCurrentUser } from "./store/user/user.reducer"
import { useDispatch } from "react-redux"


const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user)
      }
      console.log(setCurrentUser(user))
      dispatch(setCurrentUser(user))
    })
    return unsubscribe
  }, [dispatch])

  return (
    <Routes>
      <Route path="/" element={<Navigation />} >
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  )
}

export default App