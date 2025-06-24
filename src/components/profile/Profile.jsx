import React from "react";

function Profile() {
  return (
    <div className="profile pt-10 sm:pt-7 lg:pt-25 ">
      <div className="container flex flex-col lg:flex-row !p-0  ">
        <div className="left lg:w-1/2  px-8 flex flex-col w-full items-center justify-center space-y-5  min-h-[60vh] ">
          <p className="welcome text-3xl leading-14 lg:text-5xl  font-bold text-gray-800">Welcome to my Web Development Portofolio!</p>
          <p className="lg:text-2xl text-xl leading-10 font-semibold text-gray-500">
            I'm Baljinder, a passionate web developer based in India. Here,
            you'll get a glimpse of my journey in the world of web development,
            where creativity meets functionality.
          </p>
        </div>
        <div className="right lg:w-1/2 py-4 px-8 flex flex-col w-full items-center justify-center   min-h-[60vh] ">
        <img className="lg:w-[80%]" src="me.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Profile;
