import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";

const items = [
    {id: 1, text: 'Inicio'},
    {id: 2, text: 'Proyectos'},
    {id: 3, text: 'Sobre mi'},
    {id: 4, text: 'Contacto'},
  ]

export const Navbar = () => {
  const [activeTab, setActiveTab] = useState(items[0].id);
  const [hidden, setHidden] = useState(false)
  const {scrollY} = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious();
    
    if (latest >  previous! && latest > 50) {
      setHidden(true)
    } else {
      setHidden(false)
    }
  })

  return (
    <motion.nav className={`p-1 w-fit mx-auto rounded-xl  border border-accent/20 sticky top-2 z-20 `}
      transition={{duration: 0.5, ease: 'easeInOut'}}
      variants={{
        visible: {y:0, scale: 1},
        hidden: {y: '-200%', scale: 0.5}
      }}
      animate={hidden ? 'hidden' : 'visible'}
    >
      <ul className="flex gap-2">
        {
          items.map((item) => (
            <li 
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className="relative px-2 py-1"
            >
              <a href={`#${item.text}`}
                className={`relative z-10 transition-colors duration-200 text-[clamp(0.875rem,1.5vw,1rem)] ${
                  activeTab === item.id ? "text-textPrimary" : "text-textSecondary"
                }`}
              >
               {item.text}
              </a>
             {
              activeTab === item.id && (
                <motion.div
                  layoutId="active-tab"
                  className="bg-accent/30 absolute inset-0 rounded-lg"
                  transition={{type: 'spring', stiffness: 40}}
                />

              )
             }
            </li> 
          ))
        }
      </ul>
    </motion.nav>
  );
};
