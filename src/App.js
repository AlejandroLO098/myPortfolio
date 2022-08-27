import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { NavBar } from "./components/Navbar";
import { Home } from "./components/Home";
import { Projects } from "./components/Projects";
import { Contact } from "./components/contact/Contact";
import { Footer } from "./components/Footer";
import { Tech } from "./components/Tech";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Tech />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
