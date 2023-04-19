import Head from "next/head";
import Hey from "@/components/hey";
import AboutMe from "./aboutme";
export default function Home() {
  return (
    <>
      <Head>
        <title>Jonathan Le Personal Webpage</title>
      </Head>

      <Hey />
      <AboutMe />
    </>
  );
}

/*
Made good progression today. Next goal: 
- Add a nav bar 
- Use <img> instead of NextJs because of size formatting
- Add personal project page 
*/
