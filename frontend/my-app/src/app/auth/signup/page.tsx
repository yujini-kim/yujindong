"use client";

import SignupForm from "@/components/ui/auth/SignupForm";
import { useSignUpMutation } from "@/hooks/Auth";
import { SignupValues } from "@/components/ui/auth/type";
import HelloBergerIcon from "@/components/icons/HelloBergerIcon";
import { Wrapper } from "@/components/ui/auth/styled";

function Signup() {
  const mutation = useSignUpMutation();

  const onSubmit = (data: SignupValues) => {
    mutation.mutate(data, {
      onError: (err) => {
        alert(`❌ 회원가입 실패: ${err.message}`);
      },
    });
  };

  return (
    <Wrapper>
      <HelloBergerIcon />
      <SignupForm onSubmit={onSubmit} />
    </Wrapper>
  );
}

export default Signup;
