import { AnimatedIcons } from "../components/sectionOne/AnimatedIcons";
import { AnimatedText } from "../components/sectionOne/AnimatedText";
import { Navbar } from "../components/Navbar";
import { ProfileDescription } from "../components/sectionOne/ProfileDescription";
import { ProfileLink } from "../components/sectionOne/ProfileLink";
import { FileUser, Github, Linkedin } from "lucide-react";

export const SectionOne = () => {
  return (
    <section
      className="flex flex-col  flex-1 min-h-screen pb-10 lg:flex-row lg:items-center"
      id="Inicio"
    >
      <div className=" border-white flex flex-col flex-1 justify-evenly lg:w-1/2 lg:justify-center  lg:gap-10">
        <AnimatedText />
        <div className="lg:hidden">
          <AnimatedIcons />
        </div>
        <ProfileDescription />
        <div className="flex justify-evenly items-center lg:justify-start lg:gap-4">
          <ProfileLink text="LinkedIn" icon={Linkedin} className="" />
          <ProfileLink text="CV" icon={FileUser} className="" />
          <ProfileLink text="Github" icon={Github} className="" />
        </div>
      </div>
      <div className="hidden lg:flex justify-center items-center w-1/2 ">
        <AnimatedIcons />
      </div>
    </section>
  );
};
