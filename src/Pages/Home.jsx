import Hero from "@/components/Home/Hero";
import AboutSection from "@/components/Home/AboutSection";
import ResidencesSection from "@/components/Home/ResidencesSection";
import StatsSection from "@/components/Home/StatsSection";
import TestimonialsSection from "@/components/Home/TestimonialsSection";
import FeaturedProjects from "@/components/Home/FeaturedProjects";
import PageTransition from "@/components/PageTransition";

export default function Home() {
  return (
    <PageTransition className="min-h-screen">
      <Hero />
      <AboutSection />
      <ResidencesSection />
      <StatsSection />
      <TestimonialsSection />
      <FeaturedProjects />
    </PageTransition>
  );
}
