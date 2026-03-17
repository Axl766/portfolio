import { GitHubDark, LinkedIn } from "@ridemountainpig/svgl-react";
import { AnimatedIcons } from "../components/sectionOne/AnimatedIcons";
import { AnimatedText } from "../components/sectionOne/AnimatedText";
import { ProfileDescription } from "../components/sectionOne/ProfileDescription";
import { ProfileLink } from "../components/sectionOne/ProfileLink";
import { FileUser } from "lucide-react";

export const SectionOne = () => {
  return (
    <section className="flex flex-col overflow-hidden  flex-1 sm:flex-row">
      <div className="flex flex-col justify-evenly items-center flex-1 sm:justify-evenly">
        <AnimatedText />
        <div className="sm:hidden">
          <AnimatedIcons />
        </div>
        <ProfileDescription />
        <div className="flex justify-evenly w-full ">
          <ProfileLink
            icon={GitHubDark}
            text="Github"
            className="text-red-500 border-red-500 shadow-[0px_0px_5px_#fb2c36]"
          />
          <ProfileLink
            icon={FileUser}
            text="C.V."
            className="shadow-[0px_0px_5px_#fff]"
          />
          <ProfileLink
            icon={LinkedIn}
            text="LinkedIn"
            className=" border-[#0a66c2] shadow-[0px_0px_5px_#0a66c2]"
          />
        </div>
      </div>
      <div className="hidden sm:flex sm:flex-1">
        <AnimatedIcons />
      </div>
    </section>
  );
};
