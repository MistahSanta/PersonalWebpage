import Fireworks from "@fireworks-js/react";

export default function Hey() {
  return (
    <>
      <div
        id="home"
        className="flex flex-col radial-gradient h-screen w-full border-b-4 border-white"
      >
        <div className="flex flex-col h-full w-full justify-center items-center">
          <p className=" italic text-7xl text-blue-500 z-10 Roboto font-semibold">
            Hey! I&apos;m {"\n"}
          </p>
          <p className="z-10 font-bold text-7xl font-sans sm:text-9xl text-white text-center">
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
