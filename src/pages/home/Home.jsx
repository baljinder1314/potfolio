import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Profile from "../../components/profile/Profile";
import Skills from "../../components/skills/Skills";
import SkillSet from "../../skillset/SkillSet";
import MyProject from "../../components/myProject/MyProject";

function Home() {
  return (
    <>
      <section className="firstSection">
        <Navbar />
      </section>
      <section className="profile">
        <Profile />
      </section>

      <section className="mySkills">
        <Skills />
      </section>

      <section className="technologyIWork">
        <SkillSet />
      </section>

      <section className="myProject">
        <MyProject />
      </section>
    </>
  );
}

export default Home;
