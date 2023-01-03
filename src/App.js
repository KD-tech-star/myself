import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import React from "react";

function App() {
  return (
    <div>
   
      
    
    <Nav/>
    <Header />
    <About />
    <Experience />
    <Portfolio />
    <Testimonials />
    <Contact />
    <Footer />
  

    </div>
  );
}

export default App;
