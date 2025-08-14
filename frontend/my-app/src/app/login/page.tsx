import ChangeSignUp from "@/components/auth/ChangeSignUp";
import LogInForm from "@/components/auth/LogInForm";
import SocialSession from "@/components/auth/Socialsession";
import MainIcon from "@/components/Icon/MainIcon";

export default function Login() {
  return (
    <div className="flex flex-col justify-center items-center">
      <MainIcon />
      <LogInForm />
      <ChangeSignUp />
      <SocialSession text={"로그인"} />
    </div>
  );
}
