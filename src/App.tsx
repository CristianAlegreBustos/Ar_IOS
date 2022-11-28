<<<<<<< HEAD
import React, { Suspense, useState } from "react";
=======
import { lazy, Suspense, useState } from "react";
>>>>>>> 481556d (Set models in the proyect WORK)
import {
  BrowserCompatibility,
  InstantTracker,
  ZapparCamera,
  ZapparCanvas,
<<<<<<< HEAD
  LogLevel,
  setLogLevel
} from "@zappar/zappar-react-three-fiber";

import MainObjects from "./components/MainObjects";
=======
} from "@zappar/zappar-react-three-fiber";

const MainObjects = lazy (()=>import("./components/MainObjects"))
>>>>>>> 481556d (Set models in the proyect WORK)

setLogLevel(LogLevel.LOG_LEVEL_VERBOSE);

function App() {
  const [placementMode, setPlacementMode] = useState(true);
  //const Camera = React.useMemo(()=> <ZapparCamera  />, [])
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserCompatibility />
      <Suspense fallback={null}>
      <ZapparCanvas>
<<<<<<< HEAD
      <ZapparCamera  />
        <InstantTracker placementMode={placementMode} placementCameraOffset={[0, 0, -5]}>
        <MainObjects /> 
=======
        <ZapparCamera />
        <InstantTracker
          placementMode={placementMode}
          placementCameraOffset={[0, 0, -0.1]}
        >
      <MainObjects />
>>>>>>> 481556d (Set models in the proyect WORK)
        </InstantTracker>
        <directionalLight position={[2.5, 8, 5]} intensity={1.5} />
      </ZapparCanvas>
      </Suspense>
      <div
        id="zappar-button"
        role="button"
        onKeyPress={() => {
          setPlacementMode((currentPlacementMode) => !currentPlacementMode);
        }}
        tabIndex={0}
        onClick={() => {
          setPlacementMode((currentPlacementMode) => !currentPlacementMode);
        }}
      >
        Tap here to
        {placementMode ? " place " : " pick up "}
        the object
      </div>
      </Suspense>
  );
}

export default App;
