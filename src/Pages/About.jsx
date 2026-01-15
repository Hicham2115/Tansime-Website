import Hero from "@/components/About/Hero";
import MissionStatement from "@/components/About/MissionStatement";
import CoreValues from "@/components/About/CoreValues";
import Achievements from "@/components/About/Achievements";
import Location from "@/components/About/Location";
import CallToAction from "@/components/About/CallToAction";
import PageTransition from "@/components/PageTransition";

export default function About() {
  return (
    <PageTransition className="min-h-screen">
      <Hero />
      <MissionStatement />
      <CoreValues />
      <Achievements />
      <Location />
      <CallToAction />
    </PageTransition>
  );
}
