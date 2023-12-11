import { Fragment, useContext } from 'react'
import { Outlet, Link } from "react-router-dom"
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg"
import "./navigation.scss"
import { UserContext } from "../../context/userContext"
import { signOutUser } from "../../utils/firebase/firebase"

const Navigation = () => {
    const { currentUser } = useContext(UserContext)

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
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation