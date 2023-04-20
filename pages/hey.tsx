import Fireworks from "@fireworks-js/react";
import {motion} from "framer-motion";

export default function Hey() {
  return (
    <>
      <div
        id="home"
        className="flex flex-col radial-gradient h-screen w-full border-b-4 border-white"
      >
        <div className="flex flex-col h-full w-full justify-center items-center">
          <motion.div initial="hidden" animate="visible" variants={{
            hidden: {
              scale: 0.6,
              opacity: 0
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0.4
              }
            },

          }}>
            <p className=" italic text-6xl sm:text-7xl text-blue-500 z-10 Roboto font-semibold">
              Hey! I&apos;m {"\n"}
            </p>
          </motion.div>
          <motion.div initial={{x: -100, opacity: 0}} animate={{x:0, opacity: 1}} transition={{delay: 0.5}}>
            <p className="z-10 font-bold text-7xl font-sans sm:text-9xl text-white text-center">
              Jonathan Le
            </p>
          </motion.div>
          <Fireworks
            style={{
              position: "absolute",
              height: "90vh",
              width: "95%",
              zIndex: 0
            }}
          />

        </div>
      </div>
    </>
  );
}
