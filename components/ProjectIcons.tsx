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
        <div className="relative w-[90vw] lg:w-[40vw] h-[50vh] sm:h-96 border-white border-2 rounded-lg shadow-lg shadow-blue-400 hover:shadow-none">
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

            <div className="text-center relative h-full w-full z-0 text-white text-lg lg:text-4xl space-y-36 opacity-0 hover:opacity-100 flex flex-col overflow-visible Roboto">
              <div>{props.title}</div>

              <div className="">{props.desc}</div>
            </div>
          </a>
        </div>
      </motion.div>
    </>
  );
}
