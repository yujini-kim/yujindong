import ExitIcon from "../svg/ExitIcon";

function Header() {
  return (
    <div className="grid grid-cols-6 items-center p-4">
      <ExitIcon />
      <p className="text-2xl col-span-4 text-center">축의금 측정기</p>
    </div>
  );
}

export default Header;
