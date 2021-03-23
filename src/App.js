import React, { useState } from "react";
import About from "./Components/About/Index";
import Header from "./Components/Header/Index";
import Hero from "./Components/Hero/Index";

function App() {
  const [show, setShow] = useState(false);
  return (
    <>
      <Header show={show} setShow={setShow} />
      <section onClick={() => setShow(false)}>
        <Hero />
        <About />
      </section>
    </>
  );
}

export default App;
