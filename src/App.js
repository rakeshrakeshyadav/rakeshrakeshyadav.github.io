import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./Components/Navbar/Navbar";
import {Home} from "./Components/Home/Home";
import Projects  from './Components/Projects/Projects';
import './App.css';
import Skills from "./Components/skills/Skills"
import  About  from './Components/About/About';
import Contact from './Components/Contact/contact';
import GithubStats from './Components/Github/GithubStats';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <GithubStats/>
      <Contact/>
     
    </div>
  );
}

export default App;
