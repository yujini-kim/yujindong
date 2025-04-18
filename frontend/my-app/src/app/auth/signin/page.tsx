"use client";

import HelloBergerIcon from "@/components/icons/HelloBergerIcon";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { FormValues } from "../signup/page";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 294px;
  gap: 8px;
  margin-top: 38px;
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
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin-top: 40px;
`;

const Button = styled.button`
  width: 100%;
  height: 48px;
  background-color: ${(props) => props.theme.accentColor};
  border-radius: 15px;
  margin-top: 28px;
`;

function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  return (
    <Wrapper>
      <HelloBergerIcon />
      <Form>
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
        <Button type="submit">로그인</Button>
      </Form>
    </Wrapper>
  );
}

export default SignIn;
