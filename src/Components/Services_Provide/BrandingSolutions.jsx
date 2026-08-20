import React, { useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../HomePage/Footer/Footer';
import '../HomePage/common.css';

import BrandingHero from '../Services/BrandingSolutions/BrandingHero';
import TheRealProblem from '../Services/BrandingSolutions/TheRealProblem';
import OurApproach from '../Services/BrandingSolutions/OurApproach';
import WhatWeBuild from '../Services/BrandingSolutions/WhatWeBuild';
import { BrandStrategy, VisualIdentity, LogoDesign, BrandGuidelines, BrandingForDigital, Rebranding } from '../Services/BrandingSolutions/BrandSpecialtySections';
import BrandingStages from '../Services/BrandingSolutions/BrandingStages';
import BrandingMarketing from '../Services/BrandingSolutions/BrandingMarketing';
import WhyAdsservBranding from '../Services/BrandingSolutions/WhyAdsservBranding';
import BrandingFAQ from '../Services/BrandingSolutions/BrandingFAQ';
import RelatedServices from '../Services/BrandingSolutions/RelatedServices';
import FinalCTABranding from '../Services/BrandingSolutions/FinalCTABranding';

export default function BrandingSolutions() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-sans bg-white min-h-screen flex flex-col">
      <Navbar />

      <BrandingHero />
      <TheRealProblem />
      <OurApproach />
      <WhatWeBuild />
      <BrandStrategy />
      <VisualIdentity />
      <LogoDesign />
      <BrandGuidelines />
      <BrandingForDigital />
      <Rebranding />
      <BrandingStages />
      <BrandingMarketing />
      <WhyAdsservBranding />
      <BrandingFAQ />
      <RelatedServices />
      <FinalCTABranding />
      <Footer />
    </div>
  );
}
