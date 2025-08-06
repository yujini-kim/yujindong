import MainInfo from "@/components/main/main";
import StartButton from "@/components/main/startButton";
import TermsLink from "@/components/main/termsLink";

export default function Main() {
  return (
    <>
    <h1 className="bg-accent-red">test</h1>
    <div className="size-10 bg-blue-200">d</div>
      <MainInfo />
      <StartButton />
      <footer className="w-full fixed bottom-2 flex justify-center items-center gap-12">
        <TermsLink />
      </footer>
    </>
  );
}
