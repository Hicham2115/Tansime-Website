import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import FadeInUp from "@/components/FadeInUp";

export default function FeaturedProjects() {
  const projects = [
    {
      title: "Business Center",
      description:
        "Flexible office spaces with state-of-the-art facilities, designed for modern businesses.",
      features: [
        "Open-space Offices",
        "Smart Building",
        "Prime Location",
        "Energy Efficient",
      ],
      link: "/business-center",
      gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
      title: "Tasnime Residences",
      description:
        "Premium apartments and duplexes with gardens, pools, and superior finishes.",
      features: [
        "Private Pools",
        "Landscaped Gardens",
        "24/7 Security",
        "Luxury Amenities",
      ],
      link: "/residences",
      gradient: "from-primary/20 to-amber-500/20",
    },
  ];

  return (
    <section className="py-24 relative -mt-20">
      <div className="container px-4 md:px-6">
        <FadeInUp className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Featured Projects
          </h2>
          <p className="text-lg text-[#f1c692] max-w-2xl mx-auto">
            Explore our portfolio of premium developments that redefine luxury
            living and working in Marrakech.
          </p>
        </FadeInUp>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <FadeInUp
              key={index}
              delay={index * 0.2}
              className="group relative overflow-hidden rounded-3xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/10"
            >
              {/* Gradient background */}
              <div
                className={`absolute inset-0 bg-linear-to-br ${project.gradient} opacity-50 group-hover:opacity-70 transition-opacity duration-500`}
              />

              <div className="relative p-8 space-y-6">
                <div className="space-y-3">
                  <h3 className="text-3xl font-bold text-white transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Features grid */}
                <div className="grid grid-cols-2 gap-3">
                  {project.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-sm text-white"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </div>
                  ))}
                </div>

                <Button
                  asChild
                  variant="outline"
                  className="w-full group/btn border border-[#f1c692] bg-transparent text-primary-foreground font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-primary/30"
                >
                  <Link
                    to={project.link}
                    className="flex items-center justify-center gap-2"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}
