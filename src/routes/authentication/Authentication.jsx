import Signin from "../../components/signin/Signin";
import Signup from "../../components/signup/Signup";
import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase"

const Authentication = () => {
   

    return (
        <div>
            <h1>SignIn</h1>
            <Signin />
            <Signup />
        </div>
    )
}

export default Authentication