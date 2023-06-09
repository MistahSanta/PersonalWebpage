import Head from "next/head";
import Hey from "./hey";
import AboutMe from "./aboutme";
import Projects from "./projects";
import Contact from "./contact";

// Purple blue gradient - button 
export default function Home() {
  return (
    <>
      <Head>
        <title>Jonathan Le Personal Webpage</title>
      </Head>




      <Hey />
      <AboutMe />
      <Projects />
      <Contact />
    </>
  );
}

/*
Made good progression today. Next goal: 
- Add a nav bar 
- Fix projectIcons bug on touch screen devices 
- Add resumes, contact, etc
- Fix submit button not working in production 
*/
