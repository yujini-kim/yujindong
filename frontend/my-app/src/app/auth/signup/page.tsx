"use client";

import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import HelloBergerIcon from "@/components/icons/HelloBergerIcon";
import { useRouter } from "next/navigation";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL!;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin-top: 40px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 294px;
  gap: 8px;
  margin-bottom: 28px;
`;

const Input = styled.input.attrs({
  required: true,
})`
  width: 100%;
  height: 40px;

  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  padding: 10px;
`;

const Button = styled.button`
  width: 100%;
  height: 48px;
  background-color: ${(props) => props.theme.accentColor};
  border-radius: 15px;
  margin-top: 28px;
`;

export interface FormValues {
  username: string;
  email: string;
  displayName: string;
  password: string;
}

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const mutation = useMutation({
    mutationFn: (formData: FormValues) =>
      fetch(`${BASE_URL}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }),
    onSuccess: async (res) => {
      const data = await res.text();
      console.log("회원가입 성공!", data);
    },
    onError: (err) => {
      console.error("회원가입 실패 😢", err);
    },
  });
  const router = useRouter();
  const onSubmit = (data: FormValues) => {
    mutation.mutate(data);
    router.push("/");
  };

  return (
    <Wrapper>
      <HelloBergerIcon />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          {...register("displayName", { required: true })}
          placeholder="Your name"
        />
        <Input
          type="email"
          {...register("email", { required: true })}
          placeholder="Email"
        />
        <Input
          type="text"
          {...register("username", { required: true })}
          placeholder="ID"
        />
        <Input
          type="password"
          minLength={6}
          {...register("password", { required: true })}
          placeholder="Password"
        />
        <Button type="submit">회원가입하기</Button>
      </Form>
    </Wrapper>
  );
}

export default Signup;
