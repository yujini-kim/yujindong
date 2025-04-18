"use client";

import HelloBergerIcon from "@/components/icons/HelloBergerIcon";
import SignInForm from "@/components/ui/auth/SignInForm";
import { Wrapper } from "@/components/ui/auth/styled";
import { SigninValues } from "@/components/ui/auth/type";
import useAuthMutation from "@/hooks/Auth";
import { useRouter } from "next/navigation";

function SignIn() {
  const mutation = useAuthMutation<SigninValues>("login");
  const router = useRouter();
  const onSubmit = (data: SigninValues) => {
    mutation.mutate(data);
    router.push("/");
  };

  return (
    <Wrapper>
      <HelloBergerIcon />
      <SignInForm onSubmit={onSubmit} />
    </Wrapper>
  );
}

export default SignIn;
