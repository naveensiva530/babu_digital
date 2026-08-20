import React, { useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../HomePage/Footer/Footer';
import '../HomePage/common.css';

import VideoHero from '../Services/VideoProduction/VideoHero';
import TheProblem from '../Services/VideoProduction/TheProblem';
import OurApproach from '../Services/VideoProduction/OurApproach';
import WhatWeCreate from '../Services/VideoProduction/WhatWeCreate';
import { ShortFormContent, BrandStorytelling, VideoForPaidCampaigns, BeforeFilming } from '../Services/VideoProduction/VideoSpecialtySections';
import PlatformFit from '../Services/VideoProduction/PlatformFit';
import PostProduction from '../Services/VideoProduction/PostProduction';
import WhoThisIsFor from '../Services/VideoProduction/WhoThisIsFor';
import ContentSystem from '../Services/VideoProduction/ContentSystem';
import WhyAdsservVideo from '../Services/VideoProduction/WhyAdsservVideo';
import VideoFAQ from '../Services/VideoProduction/VideoFAQ';
import RelatedServices from '../Services/VideoProduction/RelatedServices';
import FinalCTAVideo from '../Services/VideoProduction/FinalCTAVideo';

export default function VideoProduction() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-sans bg-white min-h-screen flex flex-col">
      <Navbar />

      <VideoHero />
      <TheProblem />
      <OurApproach />
      <WhatWeCreate />
      <ShortFormContent />
      <BrandStorytelling />
      <VideoForPaidCampaigns />
      <PlatformFit />
      <BeforeFilming />
      <PostProduction />
      <WhoThisIsFor />
      <ContentSystem />
      <WhyAdsservVideo />
      <VideoFAQ />
      <RelatedServices />
      <FinalCTAVideo />
      <Footer />
    </div>
  );
}
