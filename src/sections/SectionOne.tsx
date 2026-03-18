import { AnimatedIcons } from "../components/sectionOne/AnimatedIcons";
import { AnimatedText } from "../components/sectionOne/AnimatedText";
import { ProfileDescription } from "../components/sectionOne/ProfileDescription";
import { ProfileLink } from "../components/sectionOne/ProfileLink";
import { FileUser, Github, Linkedin } from "lucide-react";

export const SectionOne = () => {
  return (
    <section className="flex flex-col overflow-hidden  flex-1 sm:flex-row px-5">
      <div className="flex flex-col justify-evenly items-center flex-1 sm:justify-center ">
        <AnimatedText />
        <div className="sm:hidden">
          <AnimatedIcons />
        </div>
        <ProfileDescription />
        <div className="flex justify-evenly w-full sm:justify-start sm:gap-5 sm:mt-10">
          <ProfileLink
            icon={Github}
            text="Github"
            className="border-red-500  shadow-red-500 text-textPrimary"
          />
          <ProfileLink
            icon={FileUser}
            text="C.V."
            className="border-accent shadow-accent text-accent "
          />
          <ProfileLink
            icon={Linkedin}
            text="LinkedIn"
            className="border-blue-500 shadow-blue-500 text-textPrimary"
          />
        </div>
      </div>
      <div className="hidden sm:flex sm:flex-1">
        <AnimatedIcons />
      </div>
    </section>
  );
};
