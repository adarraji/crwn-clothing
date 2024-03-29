import { BaseButton, GoogleSignInButton, InvertedButton, ButtonSpinner } from "./button.styles"
import { ButtonHTMLAttributes } from "react"

export enum BUTTON_TYPE_CLASSES {
    base = "base",
    google = "google-sign-in",
    inverted = "inverted",
}

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base): typeof BaseButton => {
    return {
        [BUTTON_TYPE_CLASSES.base]: BaseButton,
        [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
        [BUTTON_TYPE_CLASSES.inverted]: InvertedButton
    }[buttonType]
}

export type ButtonProps = {
    children?: React.ReactNode,
    buttonType?: BUTTON_TYPE_CLASSES,
    isLoading?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ children, buttonType, isLoading, ...otherProps }: ButtonProps) => {
    const CutomButton = getButton(buttonType)
    return (
        <CutomButton disabled={isLoading} {...otherProps}>
            {isLoading ? <ButtonSpinner /> : children}
        </CutomButton >
    )
}

export default Button