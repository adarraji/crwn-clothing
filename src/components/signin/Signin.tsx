import { useState, FormEvent, ChangeEvent } from "react"
import { useDispatch } from "react-redux"
import FormInput from "../formInput/FormInput"
import { SignInContainer, ButtonsContainer } from "./Signin.styles"
import Button, { BUTTON_TYPE_CLASSES } from "../button/Button"
import { emailSignin, googleSignin } from "../../store/user/user.reducer"
import { AppDispatch } from "../../store/store"
import { AuthError } from "firebase/auth"


const defaultFormFields = {
    email: "",
    password: ""
}


const Signin = () => {
    const dispatch: AppDispatch = useDispatch()

    const [formFields, setFormFields] = useState(defaultFormFields)
    const { email, password } = formFields

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const signInWithGoogle = async () => {
        dispatch(googleSignin())
    }



    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            dispatch(emailSignin({ email, password }))
            resetFormFields()

        } catch (error) {
            if ((error as AuthError).code === "auth/invalid-login-credentials")
                alert("invalid login credentials")
            console.log(error)
        }
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setFormFields({ ...formFields, [name]: value })
    }

    return (
        <SignInContainer >
            <h2>Already have an account ?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email} />
                <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password} />
                <ButtonsContainer >
                    <Button type="submit">Sign In</Button>
                    <Button type="button" buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>Google Sign In</Button>
                </ButtonsContainer>
            </form>
        </SignInContainer>
    )
}

export default Signin