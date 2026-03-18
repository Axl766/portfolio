import { motion } from "motion/react";
import { useState } from "react";

const items = [
    {id: 1, text: 'Inicio'},
    {id: 2, text: 'Proyectos'},
    {id: 3, text: 'Sobre mi'},
    {id: 4, text: 'Contacto'},
  ]

export const Navbar = () => {
  const [activeTab, setActiveTab] = useState(items[0].id);

  return (
    <motion.nav className="p-1 w-fit mx-auto rounded-xl mt-5 border border-accent/20  z-100">
      <ul className="flex gap-2">
        {
          items.map((item) => (
            <li 
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className="relative px-2 py-1"
            >
             <a href="#"
               className={`relative z-10 transition-colors duration-200 ${
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
