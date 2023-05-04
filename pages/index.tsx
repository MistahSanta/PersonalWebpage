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
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Indie+Flower&family=Kalam&display=swap" rel="stylesheet"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Rubik&display=swap" rel="stylesheet"/>
            
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
- Use <img> instead of NextJs because of size formatting
- Add personal project page 
*/
