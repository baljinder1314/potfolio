import React from "react";

function Skills() {
  return (
    <div className="skillsContainer  md:mt-10">
      <div className="container  ">
        <div
          className="flex
       justify-center items-center flex-col gap-5"
        >
          <p className="uppercase xl:text-3xl text-xl font-semibold text-gray-800 ">
            my skills
          </p>
          <p className="capitalize xl:text-6xl text-3xl font-bold text-gray-900 ">
            what i do
          </p>
          <p className="font-semibold text-xl text-gray-500 text-center w-[90%] md:w-[80%] xl:w-[60%] lg:w-[70%]  ">
            I'm not just a developer; I'm a digital dreamweaver. Crafting
            immersive online experiences is not just a job but my calling.
            Discover below how I can help you.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
