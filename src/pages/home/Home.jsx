import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Profile from "../../components/profile/Profile";
import Skills from "../../components/skills/Skills";
import SkillSet from "../../skillset/SkillSet";
import MyProject from "../../components/myProject/MyProject";

function Home() {
  return (
    <>
      <section className="firstSection scroll-mt-28">
        <Navbar />
      </section>
      <section className="profile scroll-mt-28" id="me">
        <Profile />
      </section>

      <section className="mySkills scroll-mt-28" id="skills">
        <Skills />
      </section>

      <section className="technologyIWork scroll-mt-28" >
        <SkillSet />
      </section>

      <section className="myProject scroll-mt-28" id="projects">
        <MyProject />
      </section>
    </>
  );
}

export default Home;
