import Hero from "@/components/BusinessCenter/Hero";
import Features from "@/components/BusinessCenter/Features";
import Amenities from "@/components/BusinessCenter/Amenities";
import Location from "@/components/BusinessCenter/Location";
import Specifications from "@/components/BusinessCenter/Specifications";
import CallToAction from "@/components/BusinessCenter/CallToAction";

export default function BusinessCenter() {
  return (
    <div className="min-h-screen text-black">
      <Hero />
      <Features />
      <Amenities />
      <Location />
      <Specifications />
      <CallToAction />
    </div>
  );
}
