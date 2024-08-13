import{ FieldError, UseFormRegister} from "react-hook-form";
import {z, ZodType } from "zod";

export type ValidationFields = 
| "email" 
| "url" 
| "exp" 
| "pass" 
| "confirmPass";

export type FormData = {
    email: string;
    url: string;
    exp: number;
    pass: string;
    confirmPass: string;
};

export type FormFieldProps = {
    register: UseFormRegister<FormData>;
    name: ValidationFields;
    error: FieldError | undefined;
    type: string;
    placeholder: string;
    valueAsNumber?: boolean;
    reqired?: boolean;
};

export const LoginSchema:ZodType<FormData> = z.object({
    url: z.string().url().includes("github.com",{message: "Invalid git site"}),
    email: z.string().email(),
    exp: z
        .number({
            required_error: "required !!",
            invalid_type_error: "1-10 years only"
        })
        .min(1)
        .max(10),
    pass: z.string().min(6).max(20),
    confirmPass: z.string(),
}).refine((data) => data.pass === data.confirmPass,{
    message: "pass do not match",
    path: ["confirmPass"]
});
