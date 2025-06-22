import { faDatabase, faDesktop, faServer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function SkillSet() {
  return (
    <div className="container  my-10 xl:flex space-y-15 ">
      <div className="lg:flex xl:w-1/2    items-center justify-center ">
        <div className="skills   flex flex-wrap gap-[45px] justify-center items-center lg:gap-[50px]">
          <div className="skill-box flex flex-col justify-center items-center space-y-2  ">
            <div className="skill-icon flex items-center justify-center lg:w-[120px] w-[100px] lg:h-[120px] h-[100px]  rounded-full ">
              <img
                className="lg:w-[75px] w-[50px] lg:h-[75px] h-[50px] "
                src="js.png"
                alt=""
              />
            </div>
            <p className="text-center capitalize lg:text-[25px] lg:w-[120px] w-[100px] ">
              javaScript
            </p>
          </div>
          <div className="skill-box flex flex-col justify-center items-center space-y-2  ">
            <div className="skill-icon flex items-center justify-center lg:w-[120px] w-[100px] lg:h-[120px] h-[100px]  rounded-full  ">
              <img
                className="lg:w-[75px] w-[50px] lg:h-[75px] h-[50px] "
                src="CSS3.png"
                alt=""
              />
            </div>
            <p className="text-center capitalize lg:text-[25px] lg:w-[120px] w-[100px] ">
              CSS3
            </p>
          </div>
          <div className="skill-box flex flex-col justify-center items-center space-y-2  ">
            <div className="skill-icon flex items-center justify-center lg:w-[120px] w-[100px] lg:h-[120px] h-[100px]  rounded-full  ">
              <img
                className="lg:w-[75px] w-[50px] lg:h-[75px] h-[50px] "
                src="html-5.png"
                alt=""
              />
            </div>
            <p className="text-center capitalize lg:text-[25px] lg:w-[120px] w-[100px] ">
              HTML
            </p>
          </div>
          <div className="skill-box flex flex-col justify-center items-center space-y-2  ">
            <div className="skill-icon flex items-center justify-center lg:w-[120px] w-[100px] lg:h-[120px] h-[100px]  rounded-full  ">
              <img
                className="lg:w-[75px] w-[50px] lg:h-[75px] h-[50px] "
                src="MongoDB.png"
                alt=""
              />
            </div>
            <p className="text-center capitalize lg:text-[25px] lg:w-[120px] w-[100px] ">
              MongoDB
            </p>
          </div>
          <div className="skill-box flex flex-col justify-center items-center space-y-2  ">
            <div className="skill-icon flex items-center justify-center lg:w-[120px] w-[100px] lg:h-[120px] h-[100px]  rounded-full  ">
              <img
                className="lg:w-[75px] w-[50px] lg:h-[75px] h-[50px] "
                src="Node.js.png"
                alt=""
              />
            </div>
            <p className="text-center capitalize lg:text-[25px] lg:w-[120px] w-[100px] ">
              NodeJs
            </p>
          </div>
          <div className="skill-box flex flex-col justify-center items-center space-y-2  ">
            <div className="skill-icon flex items-center justify-center lg:w-[120px] w-[100px] lg:h-[120px] h-[100px]  rounded-full  ">
              <img
                className="lg:w-[75px] w-[50px] lg:h-[75px] h-[50px] "
                src="react.png"
                alt=""
              />
            </div>
            <p className="text-center capitalize lg:text-[25px] lg:w-[120px] w-[100px] ">
              ReactJs
            </p>
          </div>
        </div>
      </div>
      <div className="major-skills  xl:w-1/2 flex flex-col justify-between ">
        <div className="major-skill-parts  flex flex-col items-center p-2 justify-center xl:w-full ">
          <div className="major-skill-icon">
            <FontAwesomeIcon className="lg:text-[45px] text-[30px]" icon={faDesktop} />
          </div>
          <div className="major-skill-text w-full flex flex-col items-center  space-y-2 justify-center">
            <h2 className="frontend capitalize xl:text-[25px] text-[23px] font-bold">Frontend developement</h2>
            <p className="text text-justify xl:text-[18px] p-1 ">
            The core mission of frontend development is to build interfaces that are intuitive 🧠 and accessible ♿️. Prioritizing inclusivity ensures all users can navigate with ease.
            </p>
          </div>
        </div>
     
        <div className="major-skill-parts  flex flex-col items-center p-2 justify-center xl:w-full ">
          <div className="major-skill-icon">
            
            <FontAwesomeIcon  className="lg:text-[45px] text-[30px]" icon={faDatabase} />
          </div>
          <div className="major-skill-text w-full flex flex-col items-center  space-y-2 justify-center">
            <h2 className="frontend capitalize xl:text-[25px] text-[23px] font-bold">Backend developement</h2>
            <p className="text text-justify xl:text-[18px] p-1 ">
             A key goal of backend development is implementing authentication that’s robust 🔒 and seamless 🔑. Security should never slow users down
            </p>
          </div>
        </div>
     
        <div className="major-skill-parts  flex flex-col items-center p-2 justify-center xl:w-full ">
          <div className="major-skill-icon">
            <FontAwesomeIcon className="lg:text-[45px] text-[30px]" icon={faServer} />
          </div>
          <div className="major-skill-text w-full flex flex-col items-center  space-y-2 justify-center">
            <h2 className="frontend capitalize xl:text-[25px] text-[23px] font-bold">data mining</h2>
            <p className="text text-justify xl:text-[18px] p-1 ">The best databases are invisible 👻—users never notice them because they just work, flawlessly and instantly.
            </p>
          </div>
        </div>
     
      </div>
    </div>
  );
}

export default SkillSet;
