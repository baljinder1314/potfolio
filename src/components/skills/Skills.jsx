import React from "react";

function Skills() {
  return (
    <div className="skillsContainer  md:mt-10">
      <div className="container  ">
        <div
          className="flex
       justify-center items-center flex-col gap-5"
        >
          <p className="uppercase text-xl font-semibold text-gray-800 ">my skills</p>
          <p className="capitalize text-4xl font-bold text-gray-900">what i do</p>
          <p className="font-semibold text-xl text-gray-500 text-center">
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
