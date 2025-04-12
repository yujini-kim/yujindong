import HomeIcon from "../ui/HomeIcon";

function Navbar() {
  return (
    <nav className="bg-[#FDDF2E] w-100% h-[80px] flex justify-center items-center">
      <ul>
        <li>
          <HomeIcon />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
