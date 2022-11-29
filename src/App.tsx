import { lazy, Suspense, useState } from "react";
import {
  BrowserCompatibility,
  InstantTracker,
  ZapparCamera,
  ZapparCanvas,
} from "@zappar/zappar-react-three-fiber";
import { Loader } from "@react-three/drei";

const MainObjects = lazy (()=>import("./components/MainObjects"))

function App() {
  const [placementMode, setPlacementMode] = useState(true);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserCompatibility />
      <ZapparCanvas>
        <ZapparCamera />
        <InstantTracker
          placementMode={placementMode}
          placementCameraOffset={[0, 0, -0.1]}
        >
      <MainObjects />
        </InstantTracker>
        <directionalLight position={[0, 0, 1]} intensity={1} />
        <ambientLight color={'white'} intensity={1} />
        <Loader/>
      </ZapparCanvas>
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
