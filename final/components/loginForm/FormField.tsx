import { FC } from "react";
import { FormFieldProps } from "./Types";

const FormField: FC<FormFieldProps> = ({
    register,
    name,
    error,
    type,
    placeholder,
    valueAsNumber,
    reqired,
}) => {

    return(
    <>
    <input 
    type={type} 
    placeholder={placeholder} 
    required={reqired} 
    {...register(name, { valueAsNumber})}
    />
    {error && <span>{error.message}</span>}
    </>
    );
};

export default FormField;