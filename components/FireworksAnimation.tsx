import { useRef } from "react";
import { FireworksHandlers } from "@fireworks-js/react";
import {Fireworks} from "@fireworks-js/react";


export default function FireworksAnimation() {
  const ref = useRef<FireworksHandlers>(null);


  return (
    
      <Fireworks
        options={{ opacity: 0.5 }}
        style={{
          top: 80,
          left: 0,
          alignItems: "center",
          width: "auto",
          height: "auto",
          position: "absolute",
          background: "#000",
          zIndex: 0
        }}
      />
    
  );
}
