import { FormInputLabel, Input, Group } from './formInput.styles';
import { InputHTMLAttributes } from "react"

type FormInputProps = {
    label: string
} & InputHTMLAttributes<HTMLInputElement>

const FormInput = ({ label, ...otherProps }: FormInputProps) => {
    return (
        <Group>
            <Input {...otherProps} />
            {label && (
                <FormInputLabel shrink={Boolean(otherProps.value && typeof otherProps.value === "string" && otherProps.value.length)}>
                    {label}
                </FormInputLabel>
            )}
        </Group>
    );
};

export default FormInput;

