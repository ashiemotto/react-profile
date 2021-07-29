import './App.css';
import Header from "./components/Header.js";
import About from "./components/About"
import Project from './components/projects';
import Footer from "./components/Footer.js";

function App() {
  return (
    <div>
      <Header/>
      <About />
      <Project/>
      <Footer/>
    </div>
  );
}

export default App;
