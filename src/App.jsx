import React from "react";
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return <main>
    <Navbar/>
    <Hero/>
    
  </main>
};

export default App;
