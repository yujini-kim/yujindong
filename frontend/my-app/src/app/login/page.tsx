import LogInForm from "@/components/auth/LogInForm";
import Link from "next/link";
import Image from "next/image";
import SocialSession from "@/components/auth/Socialsession";
import ChangeSignUp from "@/components/auth/ChangeSignUp";
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
