import Navbar from "./Navbar";
import Fireworks from "@fireworks-js/react";

export default function Hey() {
  return (
    <>
      <div
        id="home"
        className="flex flex-col radial-gradient h-screen w-screen border-b-4 border-white"
      >
        <Navbar />
        <div className="flex flex-col h-full w-full justify-center items-center">
          <p className=" italic font-serif text-7xl text-blue-500 z-10">
            Hey! I&apos;m {"\n"}
          </p>
          <p className="z-10 font-bold font-sans text-7xl text-white">
            Jonathan Le
          </p>

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
