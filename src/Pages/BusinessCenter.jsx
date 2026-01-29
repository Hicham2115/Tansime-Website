import Hero from "@/components/BusinessCenter/Hero";
import Features from "@/components/BusinessCenter/Features";
import Amenities from "@/components/BusinessCenter/Amenities";
// import Location from "@/components/BusinessCenter/Location";
import Specifications from "@/components/BusinessCenter/Specifications";
import CallToAction from "@/components/BusinessCenter/CallToAction";
import PageTransition from "@/components/PageTransition";
import ResidencesSection from "@/components/BusinessCenter/ResidencesSection";
import Location from "../components/Home/Loacation";

export default function BusinessCenter() {
  return (
    <PageTransition className="min-h-screen text-black">
      <Hero />
      <ResidencesSection />

      {/* <Features /> */}
      {/* <Amenities /> */}
      {/* <Location /> */}
      {/* <Specifications /> */}
      <Location />

      <CallToAction />
    </PageTransition>
  );
}
