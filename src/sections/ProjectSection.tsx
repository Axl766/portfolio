import { useState } from "react";
import { CardAnimation } from "../components/projectSection/CardAnimation";
import { projectItems } from "../data/projectsData";
import { HandGrab } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { BentoGridAnimated } from "../components/projectSection/BentoGridAnimated";

export const ProjectSection = () => {
  const [cardData, setCardData] = useState(projectItems);
  
  return (
    <section className="h-screen py-12 space-y-6" id="Proyectos">
      <h2 className="text-center text-[clamp(2rem,6vw,3.5rem)] font-myFont font-bold text-textPrimary"> Proyectos </h2>
      <div className="grid place-items-center gap-6 max-w-56 sm:max-w-96 mx-auto md:hidden">
        {cardData.map((item) => (
          <CardAnimation
            key={item.id}
            {...item}
            setCardData={setCardData}
            cards={cardData}
          />
        ))}
        <motion.div
          animate={{ x: [-20,0,20], scale: [0.8,1,0.8] }}
          transition={{ duration: 1, repeat: Infinity, repeatType: 'mirror', ease: 'linear'}}
        >
          <HandGrab />
        </motion.div>
        <div>
          <h3 className="text-center text-[clamp(1.125rem,3vw,1.5rem)] font-semibold">{cardData[cardData.length - 1].title}</h3>
          <AnimatePresence mode="wait">
            <motion.p 
              key={cardData[cardData.length - 1].id} 
              className="text-pretty text-[clamp(0.875rem,2vw,1rem)]" 
              initial={{opacity: 0}} 
              animate={{opacity: 1}}  
              exit={{opacity: 0}}
            >
              {cardData[cardData.length - 1].description}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
      <BentoGridAnimated />
    </section>
  );
};