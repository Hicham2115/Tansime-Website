import Hero from "@/components/BusinessCenter/Hero";
import Features from "@/components/BusinessCenter/Features";
import Amenities from "@/components/BusinessCenter/Amenities";
import Location from "@/components/BusinessCenter/Location";
import Specifications from "@/components/BusinessCenter/Specifications";
import CallToAction from "@/components/BusinessCenter/CallToAction";
import PageTransition from "@/components/PageTransition";

export default function BusinessCenter() {
  return (
    <PageTransition className="min-h-screen text-black">
      <Hero />
      <Features />
      <Amenities />
      <Location />
      <Specifications />
      <CallToAction />
    </PageTransition>
  );
}
