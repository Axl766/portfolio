import { Brain } from "lucide-react";

export const AboutMe = () => {
  return (
    <section id="Sobre mi" className="h-screen px-4  text-textPrimary">
      <h2 className="text-center text-[clamp(2rem,6vw,3.5rem)] font-myFont font-bold ">
        Sobre Mí
      </h2>
      <p className="text-pretty text-[clamp(0.875rem,2vw,1.125rem)] max-w-prose mx-auto leading-relaxed">
        Desarrollador Web Jr. con pasión por crear soluciones digitales que
        combinan funcionalidad y experiencia de usuario. Durante mi formación,
        desarrollé múltiples proyectos utilizando tecnologías modernas como React, 
        TypeScript y Tailwind CSS. Me destaco por mi capacidad de
        aprendizaje rápido, adaptación a nuevas tecnologías y comunicación
        efectiva. Busco una oportunidad para crecer profesionalmente en un
        equipo dinámico donde pueda contribuir con mis habilidades técnicas y
        aportar mi entusiasmo por el desarrollo web.
      </p>
      <h3 className="text-[clamp(1.25rem,4vw,1.75rem)] font-bold text-accent">
        Soft Skills
      </h3>
      <ul className="list-disc text-[clamp(0.875rem,2vw,1rem)] space-y-2 list-inside max-w-prose mx-auto">
        <li>Capacidad de aprendizaje rápido y adaptación a nuevas tecnologías</li>
        <li>Comunicación efectiva y trabajo en equipo</li>
        <li>Enfoque en la mejora continua y buenas prácticas de código</li>
        <li>Gestión del tiempo y entrega puntual de proyectos</li>
        <li>Resolución de problemas y pensamiento analítico</li>
        <li>Proactivo y autodidacta</li>
      </ul>
      <div className="flex flex-1 justify-center items-center py-8">
        <Brain className="size-[clamp(4rem,10vw,6rem)] text-accent"/>
      </div>
    </section>
  );
};
