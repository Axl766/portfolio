import { Navbar } from "./components/Navbar"
import { SectionOne } from "./sections/SectionOne"

const App = () => {
  return (
    <main className="border  max-w-7xl mx-auto min-h-screen flex flex-col p-2">
    
      <Navbar />
     <SectionOne />
    </main>
  )
}
export default App