import { FC } from "react";
import FormField from "./FormField";
import { FormData, LoginSchema } from "./Types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const Form: FC = () => {
    const {register, 
        handleSubmit, 
        formState: { errors }, 
        setError,
    } = useForm<FormData>({
        resolver: zodResolver(LoginSchema),
    });

    const onSubmit = async (data: FormData) =>{
        console.log("SUCCESS",data);
    };

 return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <h1>Staff Register</h1>
          <FormField
            type="url"
            placeholder="url"
            name="url"
            register={register}
            reqired
            error={errors.url}
          />
        
        <FormField
            type="exp"
            placeholder="Exp year(s)"
            name="exp"
            valueAsNumber
            register={register}
            reqired
            error={errors.exp}
          />
        <FormField
            type="paa"
            placeholder="Exp year(s)"
            name="pass"
            valueAsNumber
            register={register}
            reqired
            error={errors.exp}
          />          
          
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};

export default Form;