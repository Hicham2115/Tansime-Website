import Hero from "@/components/Residences/Hero";
import Features from "@/components/Residences/Features";
// import HousingTypes from "@/components/Residences/HousingTypes";
import SustainableConstruction from "@/components/Residences/SustainableConstruction";
import CallToAction from "@/components/Residences/CallToAction";
import PageTransition from "@/components/PageTransition";
import Location from "../components/Home/Loacation";

export default function Residences() {
  return (
    <PageTransition className="min-h-screen">
      <Hero />
      {/* <Features /> */}
      {/* <HousingTypes /> */}
      {/* <SustainableConstruction /> */}
            <Location />

      <CallToAction />
    </PageTransition>
  );
}
