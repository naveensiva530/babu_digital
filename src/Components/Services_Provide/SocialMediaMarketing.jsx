import React, { useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../HomePage/Footer/Footer';
import '../HomePage/common.css';

// Social Media Marketing Page Components
import SocialHero from '../Services/SocialMedia/SocialHero';
import TheProblem from '../Services/SocialMedia/TheProblem';
import OurApproach from '../Services/SocialMedia/OurApproach';
import WhatWeDo from '../Services/SocialMedia/WhatWeDo';
import Platforms from '../Services/SocialMedia/Platforms';
import ContentStrategy from '../Services/SocialMedia/ContentStrategy';
import WhoThisIsFor from '../Services/SocialMedia/WhoThisIsFor';
import SocialIndustries from '../Services/SocialMedia/SocialIndustries';
import MeasuringSuccess from '../Services/SocialMedia/MeasuringSuccess';
import WhyAdsservSocial from '../Services/SocialMedia/WhyAdsservSocial';
import SocialFunnel from '../Services/SocialMedia/SocialFunnel';
import Collaboration from '../Services/SocialMedia/Collaboration';
import SocialFAQ from '../Services/SocialMedia/SocialFAQ';
import RelatedServices from '../Services/SocialMedia/RelatedServices';
import FinalCTASocial from '../Services/SocialMedia/FinalCTASocial';

export default function SocialMediaMarketing() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-sans bg-white min-h-screen flex flex-col">
      <Navbar />

      {/* Full editorial page sequence */}
      <SocialHero />
      <TheProblem />
      <OurApproach />
      <WhatWeDo />
      <Platforms />
      <ContentStrategy />
      <WhoThisIsFor />
      <SocialIndustries />
      <MeasuringSuccess />
      <WhyAdsservSocial />
      <SocialFunnel />
      <Collaboration />
      <SocialFAQ />
      <RelatedServices />
      <FinalCTASocial />
      <Footer />
    </div>
  );
}
