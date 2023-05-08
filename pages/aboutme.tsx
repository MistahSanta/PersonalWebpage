// This page will hold information about me
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutMe() {
  var profilePic = "/2.jpg";
  return (
    <>
      <div id="about" className=" flex flex-col h-full w-full mellow-blue">
        <motion.div
          initial={{ opacity: 0, scale: 0.4 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.3,
            duration: 0.4,
          }}
          viewport={{ once: true }}
        >
          <h1 className="text-center text-white text-4xl p-6 font-sans font-bold Rubrik">
            About me
          </h1>
        </motion.div>
        {/* About me information starts here */}

        <div className="flex-wrap-reverse sm:flex-nowrap flex flex-row h-full max-h-full mx-auto max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl justify-center">
          <section className="flex items-center md:max-w-lg lg:max-w-xl">
            <div className="text-white grid item-center sm:text-sm md:text-base xl:text-xl 2xl:text-2xl Rubrik relative text-center sm:text-left">
                <motion.div
                  initial={{x:"-100", opacity: 0}}
                  whileInView={{x:0, opacity: 1}}
                  transition={{
                    delay: 0.5,
                    duration: 0.4
                  }}
                  viewport={{once: true}}
                >
              <p className="pt-5 sm:pt-0">
                Hi! I&apos;m Jonathan Le! I characterize myself as a lifelong
                learner
                <br></br>
                <br></br>
              </p>
              </motion.div>
              <motion.div
                  initial={{x:"-100%", opacity: 0}}
                  whileInView={{x:0, opacity: 1}}
                  transition={{
                    delay: 1,
                    duration: 0.4
                  }}
                  viewport={{once: true}}
                >
              <p>
                As a computer engineering at the University of Texas at Dallas,
                I am intrigued by the hardware and software in devices that is
                used in our everyday life.
                <br></br>
                <br></br>
              </p>
              </motion.div>
              <motion.div
                  initial={{x:"-100%", opacity: 0}}
                  whileInView={{x:0, opacity: 1}}
                  transition={{
                    delay: 1.4,
                    duration: 0.4
                  }}
                  viewport={{once: true}}
                >
              <p>
                My interest recently is in web development, hardware, and
                computer science
              </p>
              </motion.div>
              <br></br>
            </div>
          </section>
          {/*This is the picture of me */}
          {/* 1080 × 1616 */}
          <motion.div
                  initial={{x:"100%", opacity: 0}}
                  whileInView={{x:0, opacity: 1}}
                  transition={{
                    delay: 0.6,
                    duration: 0.4
                  }}
                  viewport={{once: true}}
          >
          <section className="relative h-[50vh] min-w-[70vw] sm:min-w-[25vw] lg:min-w-[26vw] my-auto mx-auto sm:max-h-max sm:ml-6 border-white border-4">
            <Image
              src={profilePic}
              alt="Picture of me"
              fill
              style={{
                objectFit: "cover",
                overflow: "hidden",
              }}
            />
          </section>
          </motion.div>
        </div>
        <div className="mt-4">
          <hr className="border-b-2 mx-auto w-[75vw]"></hr>
        </div>
      </div>
    </>
  );
}
