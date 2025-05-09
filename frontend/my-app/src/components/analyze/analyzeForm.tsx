import Button from "./Button";
import FileUpLoad from "./FileUpLoad";
import FriendNameInput from "./FriendNameInput";
import TextArea from "./TextArea";

interface IProps {
  onSubmit: () => void;
}

export default function AnalyzeForm({ onSubmit }: IProps) {
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
        className="flex bg-[#E3DBCE] w-6xl h-[600px] border-2 justify-center items-center"
      >
        <div className="flex flex-col justify-center items-center w-[40%] gap-8">
          <FileUpLoad />
          <TextArea />
        </div>
        <div className="w-[2px] h-[500px] bg-black ml-12 mr-16"></div>
        <div className="flex flex-col justify-center items-center">
          <img src="/analyze.png" className="w-md" />
          <div className="flex justify-between w-full">
            <FriendNameInput />
            <Button />
          </div>
        </div>
      </form>
    </>
  );
}
