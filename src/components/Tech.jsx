import React, { Suspense, lazy } from "react";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import CanvasLoader from "./Loader";

// Lazy load the BallCanvas component
const BallCanvas = lazy(() => import("./canvas/Ball").then(module => ({ default: module.BallCanvas })));

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <Suspense fallback={<CanvasLoader />}>
            <BallCanvas icon={technology.icon} />
          </Suspense>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
