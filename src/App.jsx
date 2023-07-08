import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import "./App.css";
import Experiences from "./Components/Experiences";
import Projects from "./Components/Projects";
import News from "./Components/News";
import Footer from "./Components/Footer";
import Sidebar from "./Components/Sidebar";
function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Hero />
      <Services />
      <Experiences />
      <Projects />
      <News />
      <Footer />
    </>
  );
}

export default App;
