import React from "react";

function MyProject() {
  return (
    <div className="container bg-[#ececec] flex flex-col justify-center items-center xl:pb-7 ">
      <div className="xl:flex justify-center items-center flex-col xl:p-6 p-4 xl:space-y-3 space-y-2">
        <h3 className="xl:text-5xl font-bold text-gray-800 text-3xl text-center">
          MyProject
        </h3>
        <p className="xl:text-2xl text-xl xl:w-1/3 text-gray-500 xl:leading-9 text-justify ">
          Whether you have a mobile app idea that needs to come to life or a
          website that requires a facelift, I'm here to turn your digital dreams
          into reality.
        </p>
      </div>
      <div
        className="xl:flex justify-around items-center xl:p-5 space-y-8 pb-10 "
        id="projects"
      >
        <div className="rounded-2xl shadow-lg bg-[#f9f9f9] xl:w-1/4 xl:p-4  p-3 space-y-4 ">
          <div>
            <img src="inotebook.png" alt="text Utility" className="w-full" />
          </div>
          <div className="flex justify-center items-center flex-col space-y-4">
            <p className="text-base/normal ">
              📝 iNotebook is your secure and convenient online notebook,
              designed to help you organize your thoughts and important
              information from anywhere. Effortlessly create, edit, and delete
              notes with a user-friendly interface. 🔒 Your data is safely
              stored in the cloud, so you can access it anytime, on any
              device—just log in with your credentials. Perfect for students,
              professionals, and anyone who needs their notes on the go! ☁️
            </p>
            <a
              href="https://inotebook-front-nine.vercel.app/"
              target="_blank"
              className="xl:pt-4 "
            >
              <button className="orgBtnHover">view project</button>
            </a>
          </div>
        </div>
        <div className="rounded-2xl shadow-lg bg-[#fff] xl:w-1/4 xl:p-4  p-3 space-y-4 ">
          <div>
            <img src="newsMonkey.png" alt="text Utility" className="w-full" />
          </div>
          <div className="flex justify-center items-center flex-col space-y-4">
            <p className="text-base/normal ">
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
              className="xl:pt-4 "
            >
              <button className="orgBtnHover ">view project</button>
            </a>
          </div>
        </div>
        <div className="rounded-2xl shadow-lg bg-[#fff] xl:w-1/4 xl:p-4  p-3 space-y-4 ">
          <div>
            <img src="textUtility.png" alt="text Utility" className="w-full" />
          </div>
          <div className="flex justify-center items-center flex-col space-y-4">
            <p className="text-base/normal ">
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
              className="xl:pt-4 "
            >
              <button className="orgBtnHover ">view project</button>
            </a>
          </div>
        </div>
      </div>
      <div>
        <a  className="orgBtnHover" href="#home">read more</a>
      </div>
    </div>
  );
}

export default MyProject;
