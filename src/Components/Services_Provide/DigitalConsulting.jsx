import React, { useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../HomePage/Footer/Footer';
import '../HomePage/common.css';

import ConsultingHero from '../Services/DigitalConsulting/ConsultingHero';
import StrategicIntro from '../Services/DigitalConsulting/StrategicIntro';
import WhatWeHelpSolve from '../Services/DigitalConsulting/WhatWeHelpSolve';
import ConsultingApproach from '../Services/DigitalConsulting/ConsultingApproach';
import ConsultingProcess from '../Services/DigitalConsulting/ConsultingProcess';
import ConsultingServices from '../Services/DigitalConsulting/ConsultingServices';
import StrategySection from '../Services/DigitalConsulting/StrategySection';
import RoadmapSection from '../Services/DigitalConsulting/RoadmapSection';
import WhoItsFor from '../Services/DigitalConsulting/WhoItsFor';
import WhyAdsservConsulting from '../Services/DigitalConsulting/WhyAdsservConsulting';
import ServiceConnection from '../Services/DigitalConsulting/ServiceConnection';
import TrustProof from '../Services/DigitalConsulting/TrustProof';
import ConsultingFAQ from '../Services/DigitalConsulting/ConsultingFAQ';
import FinalCTAConsulting from '../Services/DigitalConsulting/FinalCTAConsulting';

export default function DigitalConsulting() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-sans bg-white min-h-screen flex flex-col">
      <Navbar />

      <ConsultingHero />
      <StrategicIntro />
      <WhatWeHelpSolve />
      <ConsultingApproach />
      <ConsultingProcess />
      <ConsultingServices />
      <StrategySection />
      <RoadmapSection />
      <WhoItsFor />
      <WhyAdsservConsulting />
      <ServiceConnection />
      <TrustProof />
      <ConsultingFAQ />
      <FinalCTAConsulting />
      <Footer />
    </div>
  );
}
