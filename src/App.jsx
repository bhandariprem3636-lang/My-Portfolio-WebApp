import Hero from "./Hero";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Projects from "./Projects";
import Experience from "./Experience";

const App = () =>{
  
  return(
    <div className="bg-radial-[at_5%_6%] from-sky-600 to-zinc-900 to-75% min-h-screen">
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Experience />
    </div>
  )
}
export default App;