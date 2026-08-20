import React, { useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../HomePage/Footer/Footer';
import '../HomePage/common.css';

import InfluencerHero from '../Services/InfluencerMarketing/InfluencerHero';
import TheChallenge from '../Services/InfluencerMarketing/TheChallenge';
import OurApproach from '../Services/InfluencerMarketing/OurApproach';
import WhatWeDo from '../Services/InfluencerMarketing/WhatWeDo';
import CreatorTypes from '../Services/InfluencerMarketing/CreatorTypes';
import PlatformFit from '../Services/InfluencerMarketing/PlatformFit';
import CreativeDirection from '../Services/InfluencerMarketing/CreativeDirection';
import WhatWeMeasure from '../Services/InfluencerMarketing/WhatWeMeasure';
import WhoThisIsFor from '../Services/InfluencerMarketing/WhoThisIsFor';
import TrustMatters from '../Services/InfluencerMarketing/TrustMatters';
import CampaignProcess from '../Services/InfluencerMarketing/CampaignProcess';
import ContentValue from '../Services/InfluencerMarketing/ContentValue';
import WhyAdsservInfluencer from '../Services/InfluencerMarketing/WhyAdsservInfluencer';
import InfluencerFAQ from '../Services/InfluencerMarketing/InfluencerFAQ';
import RelatedServices from '../Services/InfluencerMarketing/RelatedServices';
import FinalCTAInfluencer from '../Services/InfluencerMarketing/FinalCTAInfluencer';

export default function InfluencerMarketing() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-sans bg-white min-h-screen flex flex-col">
      <Navbar />

      <InfluencerHero />
      <TheChallenge />
      <OurApproach />
      <WhatWeDo />
      <CreatorTypes />
      <PlatformFit />
      <CreativeDirection />
      <WhatWeMeasure />
      <WhoThisIsFor />
      <TrustMatters />
      <CampaignProcess />
      <ContentValue />
      <WhyAdsservInfluencer />
      <InfluencerFAQ />
      <RelatedServices />
      <FinalCTAInfluencer />
      <Footer />
    </div>
  );
}
