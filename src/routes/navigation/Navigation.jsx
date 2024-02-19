import { Fragment } from 'react'
import { Outlet } from "react-router-dom"
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg"
import CartIcon from "../../components/cartIcon/CartIcon"
import CartDropdown from "../../components/cartDropdown/CartDropdown"
import { useSelector } from "react-redux"
import { selectIsCartOpen } from "../../store/cart/cart.selector.js"
import { selectCurrentUser } from "../../store/user/user.selector.js"

import { NavigationContainer, LogoContainer, Navlinks, NavLink } from "./navigation.styles.jsx"

import { useDispatch } from "react-redux"
import { signOut } from "../../store/user/user.reducer"


const Navigation = () => {
    const dispatch = useDispatch()
    const currentUser = useSelector(selectCurrentUser)
    const isCartOpen = useSelector(selectIsCartOpen)

    const handleSignOut = () => {
        dispatch(signOut())
    }

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to="/">
                    <CrwnLogo className="logo" />
                </LogoContainer>
                <Navlinks >
                    <NavLink to="/shop">SHOP</NavLink>
                    {currentUser
                        ? <NavLink as="span" onClick={handleSignOut}>SIGNOUT</NavLink>
                        : <NavLink to="/auth"> SIGN IN </NavLink>
                    }
                    <CartIcon />
                </Navlinks>
                {isCartOpen && <CartDropdown />}
            </NavigationContainer>
            <Outlet />
        </Fragment>
    )
}

export default Navigation