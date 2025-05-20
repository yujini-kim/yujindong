interface DeleteProps {
  username: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleDelete: () => Promise<void>;
}

export default function DeleteBtn({
  username,
  onChange,
  handleDelete,
}: DeleteProps) {
  return (
    <div className="flex gap-2 mb-4">
      <input
        onChange={onChange}
        className="px-4 py-1 border "
        value={username}
        type="text"
        placeholder="ID를 입력해주세요"
      />
      <button
        onClick={handleDelete}
        className="px-4 py-1 border disabled:opacity-50 cursor-pointer"
      >
        삭제하기
      </button>
    </div>
  );
}
