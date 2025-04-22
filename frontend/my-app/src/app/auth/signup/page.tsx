"use client";

import SignupForm from "@/components/ui/auth/SignupForm";
import { useSignUpMutation } from "@/hooks/Auth";
import { SignupValues } from "@/components/ui/auth/type";
import HelloBergerIcon from "@/components/icons/HelloBergerIcon";
import { Wrapper } from "@/components/ui/auth/styled";
import { BASE_URL } from "@/hooks/analyzeText";

function Signup() {
  const mutation = useSignUpMutation();

  const onSubmit = (data: SignupValues) => {
    mutation.mutate(data);
  };

  return (
    <Wrapper>
      <HelloBergerIcon />
      <SignupForm onSubmit={onSubmit} />
      <a href={`${BASE_URL}/oauth2/authorization/google`}>구글로그인</a>
    </Wrapper>
  );
}

export default Signup;
