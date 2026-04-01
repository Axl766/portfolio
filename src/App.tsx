import { Navbar } from "./components/Navbar";
import { AboutMe } from "./sections/AboutMe";
import { ProjectSection } from "./sections/ProjectSection";
import { SectionOne } from "./sections/SectionOne";

const App = () => {
  return (
    <main className="max-w-6xl mx-auto flex flex-col p-2 md:px-10 xl:px-0">
      <Navbar />
      <SectionOne />
      <ProjectSection />
      <AboutMe />
    </main>
  );
};
export default App;
