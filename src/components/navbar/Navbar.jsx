import React, { useState } from "react";
import Hamburger from "hamburger-react";
import { MdHome } from "react-icons/md";
import { IoDocument, IoPersonSharp } from "react-icons/io5";
import { PiProjectorScreenFill, PiReadCvLogoFill } from "react-icons/pi";
function Navbar() {
  const [isOpen, setOpen] = useState(false);
  return (
    <header className="container border-b border-gray-300 shadow-md  fixed top-0 left-0 right-0 w-full bg-white z-50 p-5 ">
      <div className="navHeaderContainer flex  items-center justify-between">
        <div className="myName font-bold text-2xl lg:text-3xl w-[40%] ">
          Baljinder Singh
        </div>

        <div className="hamburger block lg:hidden" onClick={()=>setOpen(value = !value)}>
          <Hamburger size={22} toggled={isOpen} toggle={setOpen} />
        </div>

        <div className={`${isOpen === true ? " right-0 duration-500 bg-white" : " right-[120%] duration-500"} top-full z-50 content w-full absolute lg:static  items-center justify-between    flex  px-6 py-2 lg:px-0 lg:py-0 `}>
          <div className="flex flex-col lg:flex-row lg:justify-between w-full gap-3 lg:items-center">
            <div className="content ">
              <ul className="flex flex-col lg:flex-row lg:gap-3 gap-4 ">
                <li>
                  <a
                    className="capitalize lg:text-[18px] text-[17px] flex items-center gap-2  "
                    href="/"
                  >
                    <MdHome className="text-2xl" />
                    home
                  </a>
                </li>
                <li>
                  <a
                    className="capitalize lg:text-[18px] text-[17px]  flex items-center gap-2 "
                    href="#me"
                  >
                    <IoPersonSharp className="text-2xl" />
                    About Me{" "}
                  </a>
                </li>
                <li>
                  <a
                    className="capitalize lg:text-[18px] text-[17px]  flex items-center gap-2 "
                    href="#projects"
                  >
                    <PiProjectorScreenFill className="text-2xl" />
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    className="capitalize lg:text-[18px] text-[17px]  flex items-center gap-2 "
                    href="#skills"
                  >
                    <IoDocument className="text-2xl" />
                    Expertise
                  </a>
                </li>
                <li>
                  <a
                    className="capitalize lg:text-[18px] text-[17px] flex items-center gap-2  "
                    href="/"
                  >
                    <PiReadCvLogoFill className="text-2xl" />
                    CV
                  </a>
                </li>
              </ul>
            </div>
            <div className="contectMe ">
              <ul className="flex gap-2.5 items-center">
                <li className="orgWhite">
                  <a href="/">Contact</a>
                </li>
                <li className="orgBtn">
                  <a href="/">Services </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
