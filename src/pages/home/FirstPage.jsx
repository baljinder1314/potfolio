import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Profile from "../../components/profile/Profile";
import Skills from "../../components/skills/Skills";
import SkillSet from "../../skillset/SkillSet";

function FirstPage() {
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
        <Project />
      </section>
    </>
  );
}

export default FirstPage;
