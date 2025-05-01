"use client";

import HelloBergerIcon from "@/components/icons/HelloBergerIcon";
import SignInForm from "@/components/ui/auth/SignInForm";
import { Wrapper } from "@/components/ui/auth/styled";
import { SigninValues } from "@/components/ui/auth/type";
import { BASE_URL } from "@/hooks/analyzeText";
import { useLogInMutation } from "@/hooks/Auth";
import styled from "styled-components";

const SocialLogin = styled.div`
width:294px;
  display:flex;
  justify-content:space-between;

`

const Button = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  padding:12px;
  gap:12px;
  background-color:${props=>props.theme.accentColor};
  border-radius:15px;
`

const SocialIcon = styled.img`
  width:24px;
  font-size:12px;
`

function SignIn() {
  const mutation = useLogInMutation();
  const onSubmit = (data: SigninValues) => {
    mutation.mutate(data);
  };

  return (
    <Wrapper>
      <HelloBergerIcon />
      <SignInForm onSubmit={onSubmit} />
      <SocialLogin>
      <Button>
        <SocialIcon src="/google.png" />
        <a href={`${BASE_URL}/oauth2/authorization/google`}>구글로그인</a>
      </Button>
      <Button>
        <SocialIcon src="/kakao.png" />
        <a href={`${BASE_URL}/oauth2/authorization/google`}>카카오로그인</a>
      </Button>
      </SocialLogin>
    </Wrapper>
  );
}

export default SignIn;
