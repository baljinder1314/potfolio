import React from "react";

function MyProject() {
  return (
    <div className="container bg-[#f0f0f0]">
      <div className="projectContent flex flex-col justify-center items-center py-2 space-y-2.5">
        <h3 className="text-[25px] font-bold xl:text-[30px] text-gray-700">
          MyProject
        </h3>
        <p className="xl:w-[40%] lg:w-[50%] w-[80%] capitalize xl:text-[20px] text-[17px] text-gray-500 text-justify">
          Whether you have a mobile app idea that needs to come to life or a
          website that requires a facelift, I'm here to turn your digital dreams
          into reality.
        </p>
      </div>
      <div
        className="project-box py-6 lg:flex space-y-20 lg:space-y-0 lg:gap-6 scroll-mt-28 lg:h-[670px] "
      >
        <div className="project flex-1 lg:space-y-5 space-y-6   p-5 relative">
          <div className="project-img w-full flex justify-center items-center ">
            <img
              src="inotebook.png"
              className="lg:w-[90%] lg:h-[220px] "
              alt="text Utility"
            />
          </div>
          <div className="project-text lg:px-18 text-justify  gap-3   flex flex-col justify-center items-center space-y-2">
            <p className="capitalize">
              📝 iNotebook is your secure and convenient online notebook,
              designed to help you organize your thoughts and important
              information from anywhere. Effortlessly create, edit, and delete
              notes with a user-friendly interface. 🔒 Your data is safely
              stored in the cloud, so you can access it anytime, on any
              device—just log in with your credentials. Perfect for students,
              professionals, and anyone who needs their notes on the go! ☁️📒
            </p>
            <a
              href="https://inotebook-front-nine.vercel.app/"
              target="_blank"
              className="pb-4 w-full flex justify-center items-center  absolute bottom-0"
            >
              <button className="orgBtnHover ">view project</button>
            </a>
          </div>
        </div>
        <div className="project flex-1 lg:space-y-5 space-y-6  p-5 relative">
          <div className="project-img w-full flex justify-center items-center ">
            <img
              src="newsMonkey.png"
              className="lg:w-[90%] lg:h-[220px] "
              alt="text Utility"
            />
          </div>
          <div className="project-text lg:px-18 text-justify  flex flex-col justify-center items-center space-y-2">
            <p className="capitalize">
              📰 Stay updated with the latest headlines and breaking news from
              around the world! Our NewsMonkey app brings you real-time news
              articles, top stories, and in-depth analysis on politics,
              technology, sports, entertainment, and more. 🌍✨ Whether you want
              to catch up on current events or dive deep into trending topics,
              NewsMonkey makes it easy and accessible. Start your day informed
              and never miss an important update! 📱🗞️
            </p>
            <a
              href="https://news-app-hazel-seven.vercel.app"
              target="_blank"
              className="pb-4 w-full flex justify-center absolute bottom-0 items-center "
            >
              <button className="orgBtnHover">view project</button>
            </a>
          </div>
        </div>
        <div className="project flex-1 lg:space-y-5 space-y-6  p-5 relative">
          <div className="project-img w-full flex justify-center items-center ">
            <img
              src="textUtility.png"
              className="lg:w-[90%] lg:h-[220px] "
              alt="text Utility"
            />
          </div>
          <div className="project-text lg:px-18 text-justify  gap-3   flex flex-col justify-center items-center space-y-2">
            <p className="capitalize">
              ✍️ Text Utility is your all-in-one toolkit for text manipulation
              and formatting! Instantly convert text to uppercase or lowercase,
              remove extra spaces, count words and characters, and much more. 🛠️
              Whether you're a student, writer, or developer, Text Utility helps
              you streamline your workflow and ensures your content is always
              clean and polished. Try it out and make your text editing
              effortless! 💡📄
            </p>
            <a
              href="https://text-utils-ivory-sigma.vercel.app"
              target="_blank"
              className="pb-4 w-full flex justify-center absolute bottom-0 items-center "
            >
              <button className="orgBtnHover">view project</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProject;
