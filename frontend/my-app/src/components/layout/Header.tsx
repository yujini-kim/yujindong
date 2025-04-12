import ExitIcon from "../ui/ExitIcon";

function Header() {
  return (
    <div className="grid grid-cols-6 items-center p-4">
      <ExitIcon />
      <p className="text-2xl col-span-4 text-center">축의금 측정하기</p>
    </div>
  );
}

export default Header;
    