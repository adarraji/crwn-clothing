import Signup from "../../components/signup/Signup";
import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase"

const Authentication = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user)
    }

    return (
        <div>
            <h1>SignIn</h1>
            <button onClick={logGoogleUser}>Sign In With Google Popup</button>
            <Signup />
        </div>
    )
}

export default Authentication