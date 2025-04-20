import Link from "next/link";
import ChartIcon from "../icons/ChartIcon";
import HomeIcon from "../icons/HomeIcon";
import ProfileIcon from "../icons/profileIcon";

function Navbar() {
  return (
    <nav className="bg-[#FDDF2E] w-full h-[72px] z-50 sticky">
      <ul className="grid grid-cols-6 h-full items-center">
        <li className="col-span-2 flex justify-end">
          <Link href="/">
            <HomeIcon />
          </Link>
        </li>
        <li className="col-span-2 flex justify-center">
          <Link href="/analyze">
            <ChartIcon />
          </Link>
        </li>
        <li className="col-span-2 flex justify-start">
          <Link href="/mypage">
            <ProfileIcon />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
