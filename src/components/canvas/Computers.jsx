import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile, isTablet }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  let scale, position;
  
  if (isMobile) {
    scale = 0.55;
    position = [0, -3, -2.2];
  } else if (isTablet) {
    scale = 0.65;
    position = [0, -3.1, -1.8];
  } else {
    scale = 0.75;
    position = [0, -3.25, -1.5];
  }

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={scale}
        position={position}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    // Add listeners for changes to the screen size
    const mobileQuery = window.matchMedia("(max-width: 500px)");
    const tabletQuery = window.matchMedia("(min-width: 501px) and (max-width: 768px)");

    // Set the initial values of the state variables
    setIsMobile(mobileQuery.matches);
    setIsTablet(tabletQuery.matches);

    // Define callback functions to handle changes to the media queries
    const handleMobileQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    const handleTabletQueryChange = (event) => {
      setIsTablet(event.matches);
    };

    // Add the callback functions as listeners for changes to the media queries
    mobileQuery.addEventListener("change", handleMobileQueryChange);
    tabletQuery.addEventListener("change", handleTabletQueryChange);

    // Remove the listeners when the component is unmounted
    return () => {
      mobileQuery.removeEventListener("change", handleMobileQueryChange);
      tabletQuery.removeEventListener("change", handleTabletQueryChange);
    };
  }, []);

  // Optimize performance for mobile devices
  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, isMobile ? 1.5 : 2]}
      camera={{ position: [20, 3, 5], fov: isMobile ? 30 : 25 }}
      gl={{ preserveDrawingBuffer: true, antialias: !isMobile }}
      style={{ height: isMobile ? '60vh' : '100%' }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enableRotate={!isMobile}
        />
        <Computers isMobile={isMobile} isTablet={isTablet} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
