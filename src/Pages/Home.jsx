import Hero from "@/components/Home/Hero";
import AboutSection from "@/components/Home/AboutSection";
import ResidencesSection from "@/components/Home/ResidencesSection";
import StatsSection from "@/components/Home/StatsSection";
import TestimonialsSection from "@/components/Home/TestimonialsSection";
import FeaturedProjects from "@/components/Home/FeaturedProjects";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <AboutSection />
      <ResidencesSection />
      <StatsSection />
      <TestimonialsSection />
      <FeaturedProjects />
    </div>
  );
}
