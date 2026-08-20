import React, { useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../HomePage/Footer/Footer';
import '../HomePage/common.css';

// Website Development Page Components
import WebsiteHero from '../Services/WebsiteDevelopment/WebsiteHero';
import WebsiteProblem from '../Services/WebsiteDevelopment/WebsiteProblem';
import WebsiteApproach from '../Services/WebsiteDevelopment/WebsiteApproach';
import WebsiteWhatWeDo from '../Services/WebsiteDevelopment/WebsiteWhatWeDo';
import WebsiteDesign from '../Services/WebsiteDevelopment/WebsiteDesign';
import WebsiteFeatures from '../Services/WebsiteDevelopment/WebsiteFeatures';
import WebsiteStructure from '../Services/WebsiteDevelopment/WebsiteStructure';
import WebsiteSEO from '../Services/WebsiteDevelopment/WebsiteSEO';
import WebsiteConversion from '../Services/WebsiteDevelopment/WebsiteConversion';
import WebsiteWhoThisIsFor from '../Services/WebsiteDevelopment/WebsiteWhoThisIsFor';
import WebsiteRedesign from '../Services/WebsiteDevelopment/WebsiteRedesign';
import WebsiteHowWeWork from '../Services/WebsiteDevelopment/WebsiteHowWeWork';
import WebsiteWhyAdsserv from '../Services/WebsiteDevelopment/WebsiteWhyAdsserv';
import WebsiteFAQ from '../Services/WebsiteDevelopment/WebsiteFAQ';
import WebsiteRelatedServices from '../Services/WebsiteDevelopment/WebsiteRelatedServices';
import WebsiteFinalCTA from '../Services/WebsiteDevelopment/WebsiteFinalCTA';

export default function WebsiteDevelopment() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-sans bg-white min-h-screen flex flex-col">
      <Navbar />

      {/* Full editorial page sequence */}
      <WebsiteHero />
      <WebsiteProblem />
      <WebsiteApproach />
      <WebsiteWhatWeDo />
      <WebsiteDesign />
      <WebsiteFeatures />
      <WebsiteStructure />
      <WebsiteSEO />
      <WebsiteConversion />
      <WebsiteWhoThisIsFor />
      <WebsiteRedesign />
      <WebsiteHowWeWork />
      <WebsiteWhyAdsserv />
      <WebsiteFAQ />
      <WebsiteRelatedServices />
      <WebsiteFinalCTA />
      <Footer />
    </div>
  );
}