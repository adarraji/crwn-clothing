import { } from "firebase/auth"
import { useState } from "react"
import { createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword, signInWithGooglePopup } from "../../utils/firebase/firebase"
import FormInput from "../formInput/FormInput"
import "./signin.scss"
import Button from "../button/Button"

const defaultFormFields = {
    email: "",
    password: ""
}


const Signin = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { email, password } = formFields

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
            const response = await signInAuthUserWithEmailAndPassword(email, password)
            console.log(response)
            resetFormFields()

        } catch (error) {

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
                    <Button buttonType="google" onClick={signInWithGoogle}>Google Sign In</Button>
                </div>


            </form>
        </div>
    )
}

export default Signin