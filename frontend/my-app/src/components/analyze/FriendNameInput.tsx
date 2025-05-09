import { useAnalyzeStore } from "@/store/AnalyzeStore";

export default function FriendNameInput() {
  const { friend_name, setFriendName } = useAnalyzeStore();
  return (
    <>
      <input
        value={friend_name}
        onChange={(e) => setFriendName(e.target.value)}
        className="w-[60%] border-2 p-2 pl-4 bg-white placeholder:text-sm"
        placeholder="친구이름을 입력해주세요"
      />
    </>
  );
}
