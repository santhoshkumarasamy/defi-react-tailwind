import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavOpen = () => {
    setIsNavOpen((prev) => !prev);
  };
  return (
    <nav className="w-full fixed h-[80px] shadow-lg  bg-black text-white z-20">
      <div className="max-w-[1240px]  top-0  h-full mx-auto flex justify-between items-center px-5">
        <h1 className="text-5xl font-bold  text-transparent  bg-clip-text bg-gradient-to-r from-[var(--primary-purple)] to-[var(--primary-blue)]">
          Defi
        </h1>
        <div className="hidden md:flex justify-between gap-3 items-center">
          <ul className="flex justify-center gap-3">
            <li>Platform</li>
            <li>Developers</li>
            <li>Community</li>
            <li>About</li>
          </ul>
          <button>Use Defi</button>
        </div>
        <div className="block md:hidden" onClick={handleNavOpen}>
          {!isNavOpen ? (
            <AiOutlineMenu className="text-white text-3xl cursor-pointer" />
          ) : (
            <AiOutlineClose className="text-white text-3xl cursor-pointer" />
          )}
        </div>

        <div
          className={
            isNavOpen
              ? " z-50 w-full h-[calc(100vh-80px)] absolute bg-black top-[80px] left-0 flex justify-center  text-center md:hidden duration-700 ease-in-out "
              : "absolute left-[-100%]"
          }
        >
          <ul className="">
            <li>Platform</li>
            <li>Developers</li>
            <li>Community</li>
            <li>About</li>
            <button className="m-8">Use Defi</button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
