import { AnimatedIcons } from "../components/sectionOne/AnimatedIcons"
import { AnimatedText } from "../components/sectionOne/AnimatedText"


export const SectionOne = () => {
  return (
    <section className="flex flex-1 overflow-hidden ">
      
      <div className="w-1/2 z-10 flex">
        <AnimatedText />
      </div>
      <AnimatedIcons />
    </section>
  )
}