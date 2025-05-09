import { useAnalyzeStore } from "@/store/AnalyzeStore";

export default function FileUpLoad() {
  const setText = useAnalyzeStore((s) => s.setText);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setText(reader.result as string);
    };
    reader.readAsText(file);
  };
  return (
    <label
      htmlFor="file"
      className="w-[400px] flex justify-center p-4 border-2 bg-[#FAC656] cursor-pointer"
    >
      파일업로드하기
      <input
        className="hidden"
        type="file"
        id="file"
        accept=".txt"
        onChange={handleFileChange}
      />
    </label>
  );
}
