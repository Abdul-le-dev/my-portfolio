import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-gray-950 min-h-screen text-gray-100">
      <Header />
      <div className="pt-20">
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
