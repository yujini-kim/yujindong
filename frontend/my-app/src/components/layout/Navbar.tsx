"use client";

import { useLogout } from "@/hooks/useAuthMutation";
import Link from "next/link";
import { useState } from "react";
import MenuBar from "../Icon/MenuBar";
import { MobileList, DeskTopList } from "../Navbar/List";
import { NavbarauthCheck } from "@/hooks/NavbarauthCheck";

export default function Navbar() {
  NavbarauthCheck();
  const logout = useLogout();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 px-6 lg:px-12">
      <div className="flex items-center justify-between h-20">
        <Link href={"/"}>
          <img src="/logo.png" className="w-8 lg:w-10" />
        </Link>
        <DeskTopList logout={logout} />
        <div className="lg:hidden cursor-pointer" onClick={toggleMenu}>
          <MenuBar />
        </div>
      </div>
      {isMenuOpen && (
        <MobileList
          logout={logout}
          setIsMenuOpen={() => setIsMenuOpen(false)}
        />
      )}
    </nav>
  );
}
