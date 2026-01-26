import { Building2, Users, Award, TrendingUp } from "lucide-react";
import FadeInUp from "@/components/FadeInUp";

export default function Achievements() {
  const achievements = [
    { icon: Building2, value: "2+", label: "Projets Majeurs" },
    { icon: Users, value: "150+", label: "Résidents Heureux" },
    { icon: Award, value: "10+", label: "Ans d'Expérience" },
    { icon: TrendingUp, value: "100%", label: "Satisfaction Client" },
  ];

  return (
    <section className="py-20 relative">
      <div className="container px-4 md:px-6">
        <FadeInUp className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            Nos Réalisations
          </h2>
          <p className="lg:text-lg
  leading-snug
  sm:leading-relaxed text-black max-w-2xl mx-auto">
            Des chiffres qui reflètent notre engagement envers l'excellence
          </p>
        </FadeInUp>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {achievements.map((achievement, index) => (
            <FadeInUp
              key={index}
              delay={index * 0.1}
              className="p-8 rounded-2xl bg-primary/90 backdrop-blur-sm border border-white/10 hover:border-primary/50 transition-all duration-300 hover:scale-105 text-center transform cursor-pointer shadow-lg"
            >
              <achievement.icon className="w-10 h-10 text-white mx-auto mb-4" />
              <div className="text-xl md:text-2xl font-bold text-white mb-2">
                {achievement.value}
              </div>
              <div className="text-sm text-white">{achievement.label}</div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}
