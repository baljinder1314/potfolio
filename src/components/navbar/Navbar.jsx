import React, { useState } from "react";
import Hamburger from "hamburger-react";
import { MdHome } from "react-icons/md";
import { IoDocument, IoPersonSharp } from "react-icons/io5";
import { PiProjectorScreenFill, PiReadCvLogoFill } from "react-icons/pi";

function Navbar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className="container border-b border-gray-300 shadow-md fixed top-0 left-0 right-0 w-full bg-white z-50 p-[1.25rem]">
      <div className="navHeaderContainer flex items-center justify-between">
        
        <div className="myName font-bold text-[1.5rem] xl:text-[1.875rem] w-[40%]">
          Baljinder Singh
        </div>

        <div
          className="hamburger block xl:hidden"
          onClick={() => setOpen(!isOpen)}
        >
          <Hamburger size={22} toggled={isOpen} toggle={setOpen} />
        </div>

        <div
          className={`${
            isOpen
              ? "right-0 duration-500 bg-white"
              : "right-[120%] duration-500"
          } top-full z-50 w-full absolute xl:static items-center justify-between flex px-[1.5rem] py-[0.5rem] xl:px-0 xl:py-0`}
        >
          <div className="flex flex-col xl:flex-row xl:justify-between w-full gap-[0.75rem] xl:items-center">
            
            <div className="content">
              <ul className="flex flex-col xl:flex-row xl:gap-[0.75rem] gap-[1rem]">
                
                <li>
                  <a
                    className="capitalize xl:text-[1.125rem] text-[1.0625rem] flex items-center gap-[0.5rem]"
                    href="#"
                  >
                    <MdHome className="text-[1.5rem]" />
                    home
                  </a>
                </li>

                <li>
                  <a
                    className="capitalize xl:text-[1.125rem] text-[1.0625rem] flex items-center gap-[0.5rem]"
                    href="#me"
                  >
                    <IoPersonSharp className="text-[1.5rem]" />
                    About Me
                  </a>
                </li>

                <li>
                  <a
                    className="capitalize xl:text-[1.125rem] text-[1.0625rem] flex items-center gap-[0.5rem]"
                    href="#projects"
                  >
                    <PiProjectorScreenFill className="text-[1.5rem]" />
                    Projects
                  </a>
                </li>

                <li>
                  <a
                    className="capitalize xl:text-[1.125rem] text-[1.0625rem] flex items-center gap-[0.5rem]"
                    href="#skills"
                  >
                    <IoDocument className="text-[1.5rem]" />
                    Expertise
                  </a>
                </li>

                <li>
                  <a
                    className="capitalize xl:text-[1.125rem] text-[1.0625rem] flex items-center gap-[0.5rem]"
                    href="#"
                  >
                    <PiReadCvLogoFill className="text-[1.5rem]" />
                    CV
                  </a>
                </li>

              </ul>
            </div>

            <div className="contectMe">
              <ul className="flex gap-[0.625rem] items-center">
                <li className="orgWhite text-[1rem]">
                  <a href="#contect">Contact</a>
                </li>
                <li className="orgBtn text-[1rem]">
                  <a href="#">Services</a>
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