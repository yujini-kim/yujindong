import { BASE_URL } from "@/hooks/AnalyzeMutation";

interface IProps {
  text: string;
}

export default function SocialSession({ text }: IProps) {
  return (
    <>
      <div className="mt-12 flex items-center text-center text-[#333] text-sm font-medium w-full max-w-[294px] my-4">
        <div className="flex-1 border-b border-[#aaa] mr-2" />
        <span className="text-xs">소셜 {text}</span>
        <div className="flex-1 border-b border-[#aaa] ml-2" />
      </div>
      <div className="flex gap-12">
        <a
          href={`${BASE_URL}/oauth2/authorization/kakao`}
          className="border border-[#C0C0C0] rounded-4xl size-13 flex items-center justify-center cursor-pointer"
        >
          <img src="/kakao.png" className="size-[27px]" />
        </a>
        <a
          href={`${BASE_URL}/oauth2/authorization/google`}
          className="border border-[#C0C0C0] rounded-4xl size-13 flex items-center justify-center cursor-pointer"
        >
          <img src="/google.png" className="size-[27px]" />
        </a>
      </div>
    </>
  );
}
