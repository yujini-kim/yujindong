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
        className="flex flex-col bg-[#E3DBCE] w-[320px] h-[580px] border-2 justify-center items-center
        lg:w-6xl lg:h-[600px] lg:flex-row"
      >
        <div className="flex flex-col justify-center items-center w-[40%] gap-2 lg:gap-8">
          <FileUpLoad />
          <TextArea />
        </div>
        <div className="hidden w-[2px] h-[500px] bg-black ml-12 mr-16 lg:block"></div>
        <div className="flex flex-col justify-center items-center">
          <img src="/analyze.png" className="w-[280px] lg:w-md" />
          <div className="w-full flex justify-between">
            <FriendNameInput />
            <Button />
          </div>
        </div>
      </form>
    </>
  );
}
