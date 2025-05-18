import { BASE_URL } from "@/hooks/AnalyzeMutation";

interface DeleteProps {
  username: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function DeleteBtn({ username, onChange }: DeleteProps) {
  const handleDelete = async () => {
    const ok = window.confirm(`정말로 ${username} 사용자를 삭제하시겠습니까?`);
    if (!ok) return;
    try {
      await fetch(`${BASE_URL}/api/admin/members/delete-member/${username}`, {
        method: "DELETE",
        credentials: "include",
      });

      alert("삭제 완료");
      location.reload();
    } catch (err) {
      alert("삭제 중 오류 발생");
      console.error(err);
    }
  };
  return (
    <div className="flex gap-2">
      <input
        onChange={onChange}
        className="px-4 py-1 border rounded"
        value={username}
        type="text"
        placeholder="ID를 입력해주세요"
      />
      <button
        onClick={handleDelete}
        className="px-4 py-1 border rounded disabled:opacity-50 cursor-pointer"
      >
        삭제하기
      </button>
    </div>
  );
}
