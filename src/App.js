import React, { useState } from "react";
import About from "./Components/About/Index";
import Contact from "./Components/Contact/Index";
import Developer from "./Components/Developer/Index";
import Footer from "./Components/Footer/Index";
import Header from "./Components/Header/Index";
import Hero from "./Components/Hero/Index";
import Pricing from "./Components/Pricing/Index";
import Services from "./Components/Services/Index";
import Works from "./Components/Works/Index";
import { LightContainer } from "./GeneralComponent";

function App() {
  const [show, setShow] = useState(false);
  return (
    <>
      <Header show={show} setShow={setShow} />
      <section onClick={() => setShow(false)}>
        <Hero />
        <About />
        <Services />
        <Works />
        <LightContainer>
          <Pricing />
          <Developer />
          <Contact />
        </LightContainer>
        <Footer />
      </section>
    </>
  );
}

export default App;
