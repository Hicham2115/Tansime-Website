import { Lightbulb, Award, Leaf, Sparkles } from "lucide-react";
import FadeInUp from "@/components/FadeInUp";

export default function CoreValues() {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "Solutions architecturales modernes pionére qui fixent de nouveaux standards dans le développement immobilier",
    },
    {
      icon: Award,
      title: "Qualité",
      description:
        "Engagement inébranlable envers l'artisanat supérieur et les matériaux premium",
    },
    {
      icon: Leaf,
      title: "Durabilité",
      description:
        "Pratiques écologiques et conceptions économes en énergie pour un meilleur avenir",
    },
    {
      icon: Sparkles,
      title: "Modernité",
      description:
        "Designs contemporains qui fusionnent l'esthétique avec la fonctionnalité",
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container relative px-4 md:px-6">
        <FadeInUp className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            Nos Valeurs Fondamentales
          </h2>
          <p className="text-lg text-black max-w-2xl mx-auto">
            Les principes qui nous guident dans tout ce que nous faisons
          </p>
        </FadeInUp>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <FadeInUp
              key={index}
              delay={index * 0.1}
              className="group p-8 rounded-2xl bg-primary/90 backdrop-blur-sm border border-white/10 shadow-sm hover:shadow-xl hover:shadow-primary/10 text-center transition-all duration-300 hover:scale-105 transform cursor-pointer"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/50 flex items-center justify-center mb-6 mx-auto group-hover:bg-primary/20 transition-colors group-hover:scale-110 duration-300">
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors">
                {value.title}
              </h3>
              <p className="text-white leading-relaxed">{value.description}</p>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}
