

import Skill from "../sections/Skill/Skill";
import Works from "../sections/Works/Works";
import { About } from "../sections/About/About";
import Contact from "../sections/Contact/Contact";
import Hero from "../sections/Hero/Hero";
import Header from "../layout/Header/Header";
import { Footer } from "../layout/Footer/Footer";

function Home() {
  return (
    <>
    <Header />
      <Hero />
      <Works />
      <Skill />
      <About />
      <Contact />
    <Footer />
    </>
  );
}

export default Home;