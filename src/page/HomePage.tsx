import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AppPreviewSection from "../sections/AppPreviewSection";
import BuiltForSection from "../sections/BuiltForSection";
import CoreFeaturesSection from "../sections/CoreFeaturesSection";
import DownloadCTASection from "../sections/DownloadCTASection";
import HeroSection from "../sections/Herosection";

import HowItWorksSection from "../sections/HowItWorksSection";
import WhyTaskFlowSection from "../sections/WhyTaskFlowSection";

export default function HomePage() {
  return (
    <div className="w-full overflow-hidden">
      <Navbar />
      <HeroSection />
      <BuiltForSection />
      <CoreFeaturesSection />
      <HowItWorksSection />
      <AppPreviewSection />
      <WhyTaskFlowSection />
      <DownloadCTASection />
      <Footer />
    </div>
  );
}
