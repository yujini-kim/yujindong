"use client";

import { useRouter } from "next/navigation";
import SignupForm from "@/components/ui/auth/SignupForm";
import useAuthMutation from "@/hooks/Auth";
import { SignupValues } from "@/components/ui/auth/type";
import HelloBergerIcon from "@/components/icons/HelloBergerIcon";
import { Wrapper } from "@/components/ui/auth/styled";

function Signup() {
  const mutation = useAuthMutation<SignupValues>("signup");
  const router = useRouter();
  const onSubmit = (data: SignupValues) => {
    mutation.mutate(data);
    router.push("/");
  };

  return (
    <Wrapper>
      <HelloBergerIcon />
      <SignupForm onSubmit={onSubmit} />
    </Wrapper>
  );
}

export default Signup;
