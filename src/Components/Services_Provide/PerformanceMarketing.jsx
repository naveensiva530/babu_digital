import React, { useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../HomePage/Footer/Footer';
import '../HomePage/common.css';

// Performance Marketing Page Components
import PerformanceHero from '../Services/PerformanceMarketing/PerformanceHero';
import PerformanceProblem from '../Services/PerformanceMarketing/PerformanceProblem';
import PerformanceApproach from '../Services/PerformanceMarketing/PerformanceApproach';
import PerformanceWhatWeDo from '../Services/PerformanceMarketing/PerformanceWhatWeDo';
import PerformanceChannels from '../Services/PerformanceMarketing/PerformanceChannels';
import PerformanceCreative from '../Services/PerformanceMarketing/PerformanceCreative';
import PerformanceLandingPage from '../Services/PerformanceMarketing/PerformanceLandingPage';
import PerformanceWhoThisIsFor from '../Services/PerformanceMarketing/PerformanceWhoThisIsFor';
import PerformanceMetrics from '../Services/PerformanceMarketing/PerformanceMetrics';
import PerformanceWhyAdsserv from '../Services/PerformanceMarketing/PerformanceWhyAdsserv';
import PerformanceStructure from '../Services/PerformanceMarketing/PerformanceStructure';
import PerformanceHowWeWork from '../Services/PerformanceMarketing/PerformanceHowWeWork';
import PerformanceFAQ from '../Services/PerformanceMarketing/PerformanceFAQ';
import PerformanceRelatedServices from '../Services/PerformanceMarketing/PerformanceRelatedServices';
import PerformanceFinalCTA from '../Services/PerformanceMarketing/PerformanceFinalCTA';

export default function PerformanceMarketing() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-sans bg-white min-h-screen flex flex-col">
      <Navbar />

      {/* Full editorial page sequence */}
      <PerformanceHero />
      <PerformanceProblem />
      <PerformanceApproach />
      <PerformanceWhatWeDo />
      <PerformanceChannels />
      <PerformanceCreative />
      <PerformanceLandingPage />
      <PerformanceWhoThisIsFor />
      <PerformanceMetrics />
      <PerformanceWhyAdsserv />
      <PerformanceStructure />
      <PerformanceHowWeWork />
      <PerformanceFAQ />
      <PerformanceRelatedServices />
      <PerformanceFinalCTA />
      <Footer />
    </div>
  );
}
