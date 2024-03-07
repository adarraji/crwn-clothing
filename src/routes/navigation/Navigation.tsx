import { Fragment } from 'react'
import { Outlet } from "react-router-dom"
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg"
import CartIcon from "../../components/cartIcon/CartIcon"
import CartDropdown from "../../components/cartDropdown/CartDropdown"
import { useSelector } from "react-redux"
import { selectIsCartOpen } from "../../store/cart/cart.selector.js"
import { selectCurrentUser } from "../../store/user/user.selector"
import { NavigationContainer, LogoContainer, NavLinks, NavLink, Span } from "./navigation.styles"

import { useDispatch } from "react-redux"
import { signOut } from "../../store/user/user.reducer"
import { AppDispatch } from "../../store/store"


const Navigation = () => {
    const dispatch: AppDispatch = useDispatch()
    const currentUser = useSelector(selectCurrentUser)
    const isCartOpen = useSelector(selectIsCartOpen)

    const handleSignOut = () => {
        dispatch(signOut())
    }

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <CrwnLogo className='logo' />
                </LogoContainer>
                <NavLinks>
                    <NavLink to='/shop'>SHOP</NavLink>

                    {currentUser ? (
                        <Span onClick={handleSignOut}>
                            SIGN OUT
                        </Span>
                    ) : (
                        <NavLink to='/auth'>SIGN IN</NavLink>
                    )}
                    <CartIcon />
                </NavLinks>
                {isCartOpen && <CartDropdown />}
            </NavigationContainer>
            <Outlet />
        </Fragment>
    )
}

export default Navigation



