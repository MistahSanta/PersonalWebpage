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
            <p className="relative italic text-6xl sm:text-8xl text-blue-500 z-20 Roboto font-semibold Kalam">
              Hey! I&apos;m {"\n"}
            </p>
          </motion.div>
          <motion.div initial={{x: "-100%", opacity: 0}} animate={{x:0, opacity: 1}} transition={{delay: 0.7}}>
            <p className="relative z-20 font-bold text-7xl font-sans sm:text-9xl text-white text-center Rubrik">
              Jonathan Le
            </p>
          </motion.div>
          <Fireworks
            style={{
              position: "absolute",
              height: "90vh",
              width: "95%",
              zIndex: 0,
            }}
          />

        </div>
      </div>
    </>
  );
}
