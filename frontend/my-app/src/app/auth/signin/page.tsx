"use client";

import HelloBergerIcon from "@/components/icons/HelloBergerIcon";
import SignInForm from "@/components/ui/auth/SignInForm";
import { Wrapper } from "@/components/ui/auth/styled";
import { SigninValues } from "@/components/ui/auth/type";
import { useLogInMutation } from "@/hooks/Auth";

function SignIn() {
  const mutation = useLogInMutation();
  const onSubmit = (data: SigninValues) => {
    mutation.mutate(data);
  };

  return (
    <Wrapper>
      <HelloBergerIcon />
      <SignInForm onSubmit={onSubmit} />
    </Wrapper>
  );
}

export default SignIn;
