import React from "react";

function MyProject() {
  return (
    <div className="container bg-[#ececec] flex flex-col justify-center items-center  pb-7 ">
      <div className="xl:flex justify-center items-center flex-col xl:p-6 xl:pt-14 py-4 xl:space-y-3 space-y-2">
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
            <img src="netflix.png" alt="text Utility" className="w-full" />
          </div>
          <div className="flex justify-center items-center flex-col space-y-4">
            <p className="text-base/normal ">
           Developed a Netflix-inspired movie streaming application using React, Vite, and Redux for state management. Integrated GPT-powered search to recommend movies based on user queries, with features like user authentication via Supabase, movie browsing by categories (popular, top-rated, upcoming), and detailed movie information display. Ensured responsive design for mobile and desktop.
            </p>
            <a
              href="https://net-flix-gpt-git-main-baljinder1314s-projects.vercel.app"
              target="_blank"
              className="xl:pt-4 "
            >
              <button className="orgBtnHover ">view project</button>
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
        <a className="orgBtnHover" href="#home">
          read more
        </a>
      </div>
    </div>
  );
}

export default MyProject;
