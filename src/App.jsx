import { BrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, Skills, Footer } from "./components";
import Loader from "./components/Loader";

// Lazy load the 3D canvas components which are likely the heaviest
const StarsCanvas = lazy(() => import("./components/canvas/Stars"));

// Create a lazy-loaded version of Hero that includes ComputersCanvas
const LazyHero = lazy(() => import("./components/Hero"));

// Create a lazy-loaded version of Contact that includes EarthCanvas
const LazyContact = lazy(() => import("./components/Contact"));

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Suspense fallback={<Loader />}>
            <LazyHero />
          </Suspense>
        </div>
        <About />
        <Skills />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Suspense fallback={<Loader />}>
            <LazyContact />
          </Suspense>
          <Suspense fallback={<Loader />}>
            <StarsCanvas />
          </Suspense>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
