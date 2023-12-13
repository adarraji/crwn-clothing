import { Fragment, useContext } from 'react'
import { Outlet, Link } from "react-router-dom"
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg"
import "./navigation.scss"
import CartIcon from "../../components/cartIcon/CartIcon"
import CartDropdown from "../../components/cartDropdown/CartDropdown"

import { UserContext } from "../../context/userContext"
import { CartContext } from "../../context/cartContext"

import { signOutUser } from "../../utils/firebase/firebase"


const Navigation = () => {
    const { currentUser } = useContext(UserContext)
    const { isCartOpen } = useContext(CartContext)

    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <CrwnLogo className="logo" />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/shop">
                        SHOP
                    </Link>
                    {
                        currentUser
                            ? <span className="nav-link" onClick={signOutUser}>SIGNOUT</span>
                            : <Link className="nav-link" to="/auth">
                                SIGN IN
                            </Link>
                    }
                    <CartIcon />
                </div>
                {isCartOpen && <CartDropdown />}

            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation