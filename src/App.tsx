import React, { Suspense, useState } from "react";
import {
  BrowserCompatibility,
  InstantTracker,
  ZapparCamera,
  ZapparCanvas,
  LogLevel,
  setLogLevel
} from "@zappar/zappar-react-three-fiber";

import MainObjects from "./components/MainObjects";

setLogLevel(LogLevel.LOG_LEVEL_VERBOSE);

function App() {
  const [placementMode, setPlacementMode] = useState(true);
  //const Camera = React.useMemo(()=> <ZapparCamera  />, [])
  return (
    <>
      <BrowserCompatibility />
      <Suspense fallback={null}>
      <ZapparCanvas>
      <ZapparCamera  />
        <InstantTracker placementMode={placementMode} placementCameraOffset={[0, 0, -5]}>
        <MainObjects /> 
        </InstantTracker>
        <directionalLight position={[2.5, 8, 5]} intensity={1.5} />
      </ZapparCanvas>
      </Suspense>
      <div
        id="zappar-button"
        role="button"
        onKeyPress={() => { setPlacementMode(((currentPlacementMode) => !currentPlacementMode)); }}
        tabIndex={0}
        onClick={() => { setPlacementMode(((currentPlacementMode) => !currentPlacementMode)); }}
      >
        Tap here to
        {placementMode ? ' place ' : ' pick up '}
        the object
      </div>
    </>
  );
}

export default App;
