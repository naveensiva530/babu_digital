import React, { useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../HomePage/Footer/Footer';
import '../HomePage/common.css';

import InstagramHero from '../Services/InstagramMarketing/InstagramHero';
import InstagramIntro from '../Services/InstagramMarketing/InstagramIntro';
import TheProblem from '../Services/InstagramMarketing/TheProblem';
import InstagramServices from '../Services/InstagramMarketing/InstagramServices';
import ContentStrategy from '../Services/InstagramMarketing/ContentStrategy';
import InstagramProcess from '../Services/InstagramMarketing/InstagramProcess';
import { PlatformFirstContent, ConversionJourney } from '../Services/InstagramMarketing/InstagramSpecialtySections';
import WhoItsFor from '../Services/InstagramMarketing/WhoItsFor';
import WhyAdsservInstagram from '../Services/InstagramMarketing/WhyAdsservInstagram';
import RelatedServices from '../Services/InstagramMarketing/RelatedServices';
import InstagramFAQ from '../Services/InstagramMarketing/InstagramFAQ';
import FinalCTAInstagram from '../Services/InstagramMarketing/FinalCTAInstagram';

export default function InstagramMarketing() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-sans bg-white min-h-screen flex flex-col">
      <Navbar />

      <InstagramHero />
      <InstagramIntro />
      <TheProblem />
      <InstagramServices />
      <ContentStrategy />
      <InstagramProcess />
      <PlatformFirstContent />
      <ConversionJourney />
      <WhoItsFor />
      <WhyAdsservInstagram />
      <RelatedServices />
      <InstagramFAQ />
      <FinalCTAInstagram />
      <Footer />
    </div>
  );
}
