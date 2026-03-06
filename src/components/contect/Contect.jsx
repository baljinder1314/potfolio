import {
  faLinkedin,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Contect() {
  return (
    <footer className="container !p-0">
      <div className="contect-box px-[3.5rem] flex flex-col py-[2rem] gap-[2rem] border-b border-[#ebebeb] xl:flex justify-around items-center xl:py-[3.75rem]">
        
        <h3 className="xl:text-[1.875rem] text-[1.25rem] uppercase font-bold text-center">
          Hire me for your projects
        </h3>

        <div className="botton">
          <a
            href="tel:+919872092495"
            className="capitalize xl:text-[1.25rem] xl:!py-[1.25rem] shadow-2xl xl:!px-[2.5rem] orgBtnHover"
          >
            call me
          </a>
        </div>

      </div>

      <div className="bg-gray-500 xl:pb-[1.25rem]">
        <div className="social-media w-full py-[2.5rem]">
          
          <div className="contect-inner w-full xl:space-y-[2.5rem] space-y-[1.25rem] xl:py-[2rem] xl:gap-[2.5rem]">
            
            <h1 className="text-center capitalize xl:text-[1.5rem] text-gray-900 font-semibold">
              for more information contect me
            </h1>

            <div className="icons xl:gap-[2.5rem] flex w-full justify-center items-center gap-[1.25rem]">
              
              <a href="https://www.instagram.com/baljinderff/?next=%2F&hl=en">
                <FontAwesomeIcon
                  className="text-white xl:text-[1.5rem] !py-[1.25rem] !px-[1.25rem] !rounded-full orgBtn"
                  icon={faSquareInstagram}
                />
              </a>

              <a href="https://www.linkedin.com/feed/">
                <FontAwesomeIcon
                  className="text-white xl:text-[1.5rem] !py-[1.25rem] !px-[1.25rem] !rounded-full orgBtn"
                  icon={faLinkedin}
                />
              </a>

              <a href="#">
                <FontAwesomeIcon
                  className="text-white xl:text-[1.5rem] !py-[1.25rem] !px-[1.25rem] !rounded-full orgBtn"
                  icon={faEnvelope}
                />
              </a>

            </div>

          </div>

          <div className="pt-[1.25rem]">
            <p className="text-center xl:text-[1.25rem] font-bold">
              &copy;&nbsp;&nbsp;&nbsp;Baljinder Singh
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Contect;