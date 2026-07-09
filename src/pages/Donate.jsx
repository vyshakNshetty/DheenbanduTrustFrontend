import React, { lazy, Suspense } from "react";
import LoadingSpinner from "../components/common/LoadingSpinner";

// Lazy Load Sections
const DonateHero = lazy(() =>
  import("../components/sections/DonateHero")
);

const HowToDonate = lazy(() =>
  import("../components/sections/HowToDonate")
);




const DonationFAQ = lazy(() =>
  import("../components/sections/DonationFAQ")
);

const Donate = () => {
  return (
    <Suspense fallback={<LoadingSpinner fullScreen />}>
      <DonateHero />
      <HowToDonate />
    
      
      <DonationFAQ />
    </Suspense>
  );
};

export default Donate;