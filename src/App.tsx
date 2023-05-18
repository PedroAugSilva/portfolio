import { AbouteMe } from "./components/AbouteMe";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

function App() {
  return (
    <div className="flex items-center flex-col">
      <Navbar />
      <AbouteMe />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
