import TextArea from "./TextArea";

interface AnalyzeFormProps {
  onSubmit: (e: React.FormEvent) => void;
  textValue: string;
  nameValue: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isPending: boolean;
}

export default function AnalyzeForm({
  onSubmit,
  textValue,
  nameValue,
  onChange,
  handleFileChange,
  handleName,
  isPending,
}: AnalyzeFormProps) {
  return (
    <TextArea
      onSubmit={onSubmit}
      textValue={textValue}
      onChange={onChange}
      text={isPending ? "분석중..." : "분석하기"}
      handleFileChange={handleFileChange}
      handleName={handleName}
      nameValue={nameValue}
    />
  );
}
