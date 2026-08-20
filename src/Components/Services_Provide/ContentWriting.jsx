import React, { useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../HomePage/Footer/Footer';
import '../HomePage/common.css';

import ContentHero from '../Services/ContentWriting/ContentHero';
import ContentIntro from '../Services/ContentWriting/ContentIntro';
import TheRealProblem from '../Services/ContentWriting/TheRealProblem';
import ContentObjectives from '../Services/ContentWriting/ContentObjectives';
import WhatWeWrite from '../Services/ContentWriting/WhatWeWrite';
import ContentProcess from '../Services/ContentWriting/ContentProcess';
import { SEOContentSection, ConversionContentSection } from '../Services/ContentWriting/ContentSpecialtySections';
import AudienceSection from '../Services/ContentWriting/AudienceSection';
import ContentMarketing from '../Services/ContentWriting/ContentMarketing';
import ContentQuality from '../Services/ContentWriting/ContentQuality';
import WhyAdsservContent from '../Services/ContentWriting/WhyAdsservContent';
import ContentFit from '../Services/ContentWriting/ContentFit';
import ContentFAQ from '../Services/ContentWriting/ContentFAQ';
import RelatedServices from '../Services/ContentWriting/RelatedServices';
import FinalCTAContent from '../Services/ContentWriting/FinalCTAContent';

export default function ContentWriting() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-sans bg-white min-h-screen flex flex-col">
      <Navbar />

      <ContentHero />
      <ContentIntro />
      <TheRealProblem />
      <ContentObjectives />
      <WhatWeWrite />
      <ContentProcess />
      <SEOContentSection />
      <ConversionContentSection />
      <AudienceSection />
      <ContentMarketing />
      <ContentQuality />
      <WhyAdsservContent />
      <ContentFit />
      <ContentFAQ />
      <RelatedServices />
      <FinalCTAContent />
      <Footer />
    </div>
  );
}
