import { lazy,memo, useRef, useState, useCallback } from "react";
import { animated } from "@react-spring/three";

const Tarjeta = lazy(() => import('../models/Tarjeta.js'))
const WelcomeText= lazy(() => import('./WelcomeText.js'))
const FinalText = lazy(()=>import('./FinalText.js'))
const BenefitsObjects=lazy(()=>import('./BenefitsObjects.js'))

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
        <Tarjeta position={[0,-0.07, -1.2]} />
        <BenefitsObjects handleClick={addContador} /> 
        <FinalText display={display} /> 
      </animated.group>
  );
};

export default memo(MainObjects);
