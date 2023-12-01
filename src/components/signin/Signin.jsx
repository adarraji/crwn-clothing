import { } from "firebase/auth"
import { useContext, useState } from "react"
import { createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword, signInWithGooglePopup } from "../../utils/firebase/firebase"
import FormInput from "../formInput/FormInput"
import "./signin.scss"
import Button from "../button/Button"
import { UserContext } from "../context/userContext"

const defaultFormFields = {
    email: "",
    password: ""
}


const Signin = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { email, password } = formFields

    const { setCurrentUser } = useContext(UserContext)

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const user = await signInAuthUserWithEmailAndPassword(email, password)
            setCurrentUser(user)

            resetFormFields()

        } catch (error) {
            if (error.code === "auth/invalid-login-credentials")
                alert("invalid login credentials")
            console.log(error)
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormFields({ ...formFields, [name]: value })
    }

    return (
        <div className="sign-up-container">
            <h2>Already have an account ?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email} />
                <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password} />
                <div className="buttons-container">
                    <button type="submit">Sign In</button>
                    <Button type="button" buttonType="google" onClick={signInWithGoogle}>Google Sign In</Button>
                </div>


            </form>
        </div>
    )
}

export default Signin