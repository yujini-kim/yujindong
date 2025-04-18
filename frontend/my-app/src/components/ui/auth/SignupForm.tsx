import { useForm } from "react-hook-form";
import { Button, Form, Input } from "./styled";
import { SignupFormProps, SignupValues } from "./type";

function SignupForm({ onSubmit }: SignupFormProps) {
  const { register, handleSubmit } = useForm<SignupValues>();

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input type="text" {...register("displayName")} placeholder="Your name" />
      <Input type="email" {...register("email")} placeholder="Email" />
      <Input type="text" {...register("username")} placeholder="ID" />
      <Input
        type="password"
        minLength={6}
        {...register("password")}
        placeholder="Password"
      />
      <Button type="submit">회원가입하기</Button>
    </Form>
  );
}

export default SignupForm;
