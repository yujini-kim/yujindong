"use client";

import HelloBergerIcon from "@/components/icons/HelloBergerIcon";
import SignInForm from "@/components/ui/auth/SignInForm";
import { Wrapper } from "@/components/ui/auth/styled";
import { SigninValues } from "@/components/ui/auth/type";
import { BASE_URL } from "@/hooks/analyzeText";
import { useLogInMutation } from "@/hooks/Auth";

function SignIn() {
  const mutation = useLogInMutation();
  const onSubmit = (data: SigninValues) => {
    mutation.mutate(data);
  };

  return (
    <Wrapper>
      <HelloBergerIcon />
      <SignInForm onSubmit={onSubmit} />{" "}
      <a href={`${BASE_URL}/oauth2/authorization/google`}>구글로그인</a>
    </Wrapper>
  );
}

export default SignIn;
