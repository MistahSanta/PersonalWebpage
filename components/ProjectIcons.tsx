import Image from "next/image";
import { motion, spring } from "framer-motion";
import { useState } from "react";

//This file will hold the project Icons inside the projectTab
// Interface to specify type to remove prop is any type error
interface ProjectProps {
  background: string;
  desc: string;
  title: string;
  link: string;
  skills: string;
}

export default function ProjectIcons(props: ProjectProps) {
  const [isShown, setIsShown] = useState(false);

  return (
    <>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        whileInView={{
          x: 0,
          opacity: 1,
          transition: {
            type: spring,
            bounce: 0.1,
            duration: 0.3,
          },
        }}
      >
        <div className="relative w-[90vw] lg:w-[40vw] h-[50vh] sm:h-96 border-white border-2 rounded-lg shadow-md shadow-blue-400 hover:shadow-none">
          {/* background image */}

          <a
            target="_blank"
            rel="noreferrer"
            href={props.link}
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
          >
            <div>
              {isShown ? (
                <Image
                  src={props.background}
                  alt="background picture"
                  fill
                  className="opacity-20"
                  style={{
                    zIndex: 0,
                  }}
                />
              ) : (
                <Image
                  src={props.background}
                  alt="background picture"
                  fill
                  className="opacity-100"
                  style={{
                    zIndex: 0,
                  }}
                />
              )}
              )
            </div>

            <div className="text-center relative h-5/6 w-full z-0 text-white text-4xl opacity-0 hover:opacity-100 flex flex-col OpenSans">
              <div>{props.title} <br></br><br></br> <span className="text-blue-500 font-bold">{props.skills}</span></div>
              <div className="mt-auto">{props.desc}</div>
            </div>
          </a>
        </div>
      </motion.div>
    </>
  );
}
