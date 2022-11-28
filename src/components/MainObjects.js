import { memo, useRef, useState, useCallback } from "react";
import { animated } from "@react-spring/three";
import Tarjeta from "../models/Tarjeta.js";
import WelcomeText from "./WelcomeText.js";
import FinalText from "./FinalText.js";
import BenefitsObjects from "./BenefitsObjects.js";

const MainObjects = () => {
  console.log("Main Objects");
  const contador = useRef(0);
  const [display, setDisplay] = useState(false);
  const addContador = useCallback(() => {
    contador.current += 1;
    if (contador.current === 4) {
      setTimeout(() => {
        setDisplay(true);
      }, 6000);
    }
  }, []);

  return (
      <animated.group dispose={null}>
          <WelcomeText display={display} />
          <Tarjeta position={[0.1, 0.05, -1.2]} />
          <BenefitsObjects handleClick={addContador} />
          <FinalText display={display} />
      </animated.group>
  );
};

export default memo(MainObjects);
