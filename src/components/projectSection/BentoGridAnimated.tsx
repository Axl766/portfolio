import { useState } from "react";
import { projectItems } from "../../data/projectsData";
import { AnimatePresence, LayoutGroup, motion } from "motion/react";

export const BentoGridAnimated = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="md:block  h-3/4 hidden overflow-hidden" >
      <div className="grid grid-cols-3 grid-rows-2 h-full gap-2 rounded-xl relative z-10">

          {[...projectItems].reverse().map((item) => (
            <motion.article
            
              key={item.id}
              layoutId={`card-${item.id}`}
              className={`cursor-pointer relative bg-cover bg-no-repeat bg-center flex items-end p-2 z-30  rounded-xl ${
                item.id === 1
                  ? "col-span-1 row-span-2"
                  : item.id === 2
                    ? "col-span-2 row-span-1"
                    : item.id === 3
                      ? "col-span-1 row-span-1"
                      : "col-span-1 row-span-1"
              }`}
              style={{
                backgroundImage: `url(${item.image})`,
              
              }}
              
              onClick={() => setSelected(item.id)}
            >
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/10 to-black/0 rounded-xl z-10" />

              <motion.h3
                className="text-textPrimary text-sm font-semibold z-10"
                layoutId={`title-${item.id}`}
              >
                {item.title}
              </motion.h3>
            </motion.article>
        ))}
   
        <motion.div
          className="fixed inset-0 bg-black/80 z-30"
          initial={{ opacity: 0 }}
          animate={{ opacity: selected ? 1 : 0 }}
          style={{ pointerEvents: selected ? "auto" : "none" }}
          onClick={() => setSelected(null)}
        />
        <AnimatePresence mode="wait">
        {selected && (
            <motion.article
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[65vw] h-[60vh] rounded-xl flex z-40"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                src={`${projectItems.find((i) => selected === i.id)?.image}`}
                alt=""
                className="w-1/2 object-cover object-center  rounded-l-xl z-20"
                layoutId={`card-${selected}`}
              />
              <motion.div className="w-1/2 rounded-r-xl bg-background p-4 "
                initial={{x: -'100%', opacity: 0, scale: 0, width: 0}}
                animate={{x: 0, opacity: 1, scale: 1,  width: '100%'}}
                exit={{x: -'100%', opacity: 0, scale: 0,  width: 0}}
                transition={{duration: 0.3}}
                layoutId="description"
              >
                <motion.h3
                  layoutId={`title-${selected}`}
                  className="text-center"
                >
                  {projectItems.find((i) => selected === i.id)?.title}
                </motion.h3>
                <motion.p>
                  {projectItems.find((i) => selected === i.id)?.description}
                </motion.p>
              </motion.div>
            </motion.article>
          
        )}
        </AnimatePresence>
      </div>
    </div>
  );
};
