import { AnimatedIcons } from "../components/sectionOne/AnimatedIcons"
import { AnimatedText } from "../components/sectionOne/AnimatedText"


export const SectionOne = () => {
  return (
    <section className="flex flex-col flex-1 overflow-hidden space-y-5">
      
     
        <AnimatedText />
    
      <AnimatedIcons />
      <p className="text-xl text-center text-balance font-sans font-medium leading-7 inline-block  text-myGris text-shadow-[2px_2px_5px_black]">
          Desarrollador Web enfocado en crear interfaces modernas y experiencias
          interactivas
        </p>
    </section>
  )
}