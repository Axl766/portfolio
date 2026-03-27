import { projectItems } from "../../data/projectsData"
import { motion } from 'motion/react';

export const BentoGridAnimated = () => {
  return (
    <div className="md:block  h-3/4 hidden">
      <div className="grid grid-cols-3 grid-rows-2 h-full gap-2 rounded-xl overflow-hidden ">
        {[...projectItems].reverse().map((item) => (
          <motion.article 
            key={item.id}
            layoutId={`card-${item.id}`}
            className={`cursor-pointer relative bg-cover bg-no-repeat bg-center flex items-end p-2  rounded-xl  ${
                item.id === 1 ? 'col-span-1 row-span-2' 
              : item.id === 2 ? 'col-span-2 row-span-1'
              : item.id === 3 ? 'col-span-1 row-span-1' : 'col-span-1 row-span-1'
            }`}
            style={{
              backgroundImage: `url(${item.image})`
            }}
          > 
            <div className="absolute inset-0 bg-linear-to-t from-black via-black/10 to-black/0"/>
            <h3 className="text-textPrimary z-30 text-sm font-semibold">
              {item.title}
            </h3>
          </motion.article>
        ))}
      </div>
    </div>
  )
}