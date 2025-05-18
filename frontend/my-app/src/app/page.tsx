import MainInfo from "@/components/main/main";
import StartButton from "@/components/main/startButton";
import TermsLink from "@/components/main/termsLink";

export default function Main() {
  return (
    <>
      <MainInfo />
      <StartButton />
      <footer className="w-full fixed bottom-2 flex justify-center items-center gap-12">
        <TermsLink />
      </footer>
    </>
  );
}
