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
      <div className="contect-box px-14 flex flex-col py-8 gap-8 border-b border-[#ebebeb] xl:flex  justify-around items-center xl:py-15">
        <h3 className="xl:text-3xl text-xl uppercase font-bold">
          Hire me for your projects
        </h3>
        <div className="botton">
          <a
            href="#"
            className="capitalize xl:text-xl xl:!py-5 shadow-2xl xl:!px-10 orgBtnHover"
          >
            call me
          </a>
        </div>
      </div>

      <div className="bg-gray-500 xl:pb-5 ">
        <div className="social-media w-full py-10">
          <div className="contect-inner w-full xl:space-y-10 space-y-5 xl:py-8 xl:gap-10 ">
            <h1 className="text-center capitalize  xl:text-2xl text-gray-900 font-semibold">
              for more information contect me
            </h1>
            <div className="icons xl:gap-10 flex w-full justify-center items-center gap-5 ">
              <a href="https://www.instagram.com/baljinderff/?next=%2F&hl=en">
                <FontAwesomeIcon
                  className="text-white xl:text-2xl !py-[20px] !px-[20px] !rounded-full orgBtn"
                  icon={faSquareInstagram}
                />
              </a>
              <a href="https://www.linkedin.com/feed/">
                <FontAwesomeIcon
                  className="text-white xl:text-2xl !py-[20px] !px-[20px] !rounded-full orgBtn"
                  icon={faLinkedin}
                />
              </a>
              <a href="#">
                <FontAwesomeIcon
                  className="text-white xl:text-2xl !py-[20px] !px-[20px] !rounded-full orgBtn"
                  icon={faEnvelope}
                />
              </a>
            </div>
          </div>
          <div className="pt-5">
            <p className="text-center xl:text-xl font-bold">
              &copy;&nbsp;&nbsp;&nbsp;Baljinder Singh
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Contect;
