import { useForm } from "react-hook-form";
import { Button, Form, Input } from "./styled";
import { SigninValues, SigninFormProps } from "./type";

function SignInForm({ onSubmit }: SigninFormProps) {
  const { register, handleSubmit } = useForm<SigninValues>();

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="text"
        {...register("username", { required: true })}
        placeholder="ID"
        autoComplete="current-password"
      />
      <Input
        type="password"
        minLength={6}
        {...register("password", { required: true })}
        placeholder="Password"
      />
      <Button type="submit">로그인</Button>
    </Form>
  );
}

export default SignInForm;
