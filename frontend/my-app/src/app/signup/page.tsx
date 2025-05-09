import SignUpForm from "@/components/auth/SignUpForm";
import SocialSession from "@/components/auth/Socialsession";
import ChangeLogin from "@/components/auth/ChangeLogin";
import MainIcon from "@/components/Icon/MainIcon";
export default function Signup() {
  return (
    <div className="flex flex-col justify-center items-center">
      <MainIcon />
      <SignUpForm />
      <ChangeLogin />
      <SocialSession text={"회원가입"} />
    </div>
  );
}
