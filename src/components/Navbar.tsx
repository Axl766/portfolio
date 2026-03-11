import { motion } from "motion/react";
import { useState } from "react";

const items = [
    {id: 1, text: 'Home'},
    {id: 2, text: 'Proyectos'},
    {id: 3, text: 'Sobre mi'},
    {id: 4, text: 'Contacto'},
  ]

export const Navbar = () => {
  const [activeTab, setActiveTab] = useState(items[0].id);

  return (
    <motion.nav className="p-2 w-fit bg-myGris mx-auto rounded-xl ">
      <ul className="flex space-x-2">
        {
          items.map((item) => (
            <li 
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className="relative px-3 py-1.5  "
            >
             <a href="#"
              className="relative z-10 mix-blend-exclusion text-myGris "
             >
              {item.text}
             </a>
             {
              activeTab === item.id && (
                <motion.div
                  layoutId="active-tab"
                  className="bg-blackBase absolute inset-0 rounded"
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
