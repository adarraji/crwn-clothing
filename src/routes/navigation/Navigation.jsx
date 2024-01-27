import { Fragment } from 'react'
import { Outlet } from "react-router-dom"
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg"
import CartIcon from "../../components/cartIcon/CartIcon"
import CartDropdown from "../../components/cartDropdown/CartDropdown"
import { signOutUser } from "../../utils/firebase/firebase"
import { useSelector } from "react-redux"
import { selectIsCartOpen } from "../../store/cart/cart.selector.js"
import { selectCurrentUser } from "../../store/user/user.selector.js"

import { NavigationContainer, LogoContainer, Navlinks, NavLink } from "./navigation.styles.jsx"


const Navigation = () => {

    const currentUser = useSelector(selectCurrentUser)
    const isCartOpen = useSelector(selectIsCartOpen)

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to="/">
                    <CrwnLogo className="logo" />
                </LogoContainer>
                <Navlinks >
                    <NavLink to="/shop">SHOP</NavLink>
                    {currentUser
                        ? <NavLink as="span" onClick={signOutUser}>SIGNOUT</NavLink>
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