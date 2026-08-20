import React, { useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../HomePage/Footer/Footer';
import '../HomePage/common.css';

import SEOHero from '../Services/SEO/SEOHero';
import TheRealProblem from '../Services/SEO/TheRealProblem';
import OurApproach from '../Services/SEO/OurApproach';
import WhatWeDo from '../Services/SEO/WhatWeDo';
import { TechnicalSEO, OnPageSEO, ContentSEO, LocalSEO, AEOGEO } from '../Services/SEO/SEOSpecialtySections';
import KeywordIntent from '../Services/SEO/KeywordIntent';
import SEOForBusinesses from '../Services/SEO/SEOForBusinesses';
import SEOReporting from '../Services/SEO/SEOReporting';
import WhatWeDontPromise from '../Services/SEO/WhatWeDontPromise';
import WhoThisIsFor from '../Services/SEO/WhoThisIsFor';
import SEOProcess from '../Services/SEO/SEOProcess';
import WhyAdsservSEO from '../Services/SEO/WhyAdsservSEO';
import SEOFAQ from '../Services/SEO/SEOFAQ';
import RelatedServices from '../Services/SEO/RelatedServices';
import FinalCTASEO from '../Services/SEO/FinalCTASEO';

export default function SEOServices() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-sans bg-white min-h-screen flex flex-col">
      <Navbar />

      <SEOHero />
      <TheRealProblem />
      <OurApproach />
      <WhatWeDo />
      <TechnicalSEO />
      <OnPageSEO />
      <KeywordIntent />
      <ContentSEO />
      <LocalSEO />
      <AEOGEO />
      <SEOForBusinesses />
      <SEOReporting />
      <WhatWeDontPromise />
      <WhoThisIsFor />
      <SEOProcess />
      <WhyAdsservSEO />
      <SEOFAQ />
      <RelatedServices />
      <FinalCTASEO />
      <Footer />
    </div>
  );
}
