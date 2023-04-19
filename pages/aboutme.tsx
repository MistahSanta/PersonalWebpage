// This page will hold information about me
import Image from "next/image";

export default function AboutMe() {
  var profilePic = "/2.jpg";
  return (
    <>
      <div id="about" className=" flex flex-col min-h-fit w-full mellow-blue">
        <h1 className="text-center text-white text-4xl p-6 font-sans font-bold">
          About me
        </h1>

        {/* About me information starts here */}

        <div className="flex-wrap-reverse sm:flex-nowrap flex flex-row h-full max-h-full mx-auto max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl">
        <section className="flex items-center md:max-w-lg lg:max-w-xl">
          <div className="text-white grid item-center sm:text-sm md:text-base xl:text-xl 2xl:text-2xl font-mono relative text-center">
            <p>
              <br></br>
              Hello! Thanks for visiting my page! My name is Jonathan Le, and I
              am curious about both software and hardware. I love learning about
              new technologies.
              <br></br>
              <br></br>
            </p>

            <p>
              I am currently pursuing a Bachelor&apos;s degree in Computer
              Engineering at the University of Texas at Dallas.
              <br></br>
              <br></br>
            </p>
            <p>
              My interest recently is in web development, NextJS, Vietnamese,
              and hardware.
            </p>
          </div>
        </section>
        {/*This is the picture of me */}
        {/* 1080 × 1616 */}
          <section className="relative h-[50vh] min-w-[70vw] sm:min-w-[30vw] my-auto mx-auto sm:max-h-max sm:ml-6 border-white border-4"> 
            <Image
                src={profilePic}
                alt="Picture of me"
                fill
                style={{
                  objectFit: "cover",
                  overflow: "hidden"
              }}
              />   
          </section>

        <hr></hr>
        </div>
      </div>
    </>
  );
}
