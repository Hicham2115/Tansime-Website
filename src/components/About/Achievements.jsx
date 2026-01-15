import { Building2, Users, Award, TrendingUp } from "lucide-react";
import FadeInUp from "@/components/FadeInUp";

export default function Achievements() {
  const achievements = [
    { icon: Building2, value: "2+", label: "Major Projects" },
    { icon: Users, value: "150+", label: "Happy Residents" },
    { icon: Award, value: "10+", label: "Years Experience" },
    { icon: TrendingUp, value: "100%", label: "Client Satisfaction" },
  ];

  return (
    <section className="py-20 relative">
      <div className="container px-4 md:px-6">
        <FadeInUp className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Our Achievements
          </h2>
          <p className="text-lg text-[#f1c692] max-w-2xl mx-auto">
            Numbers that reflect our commitment to excellence
          </p>
        </FadeInUp>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {achievements.map((achievement, index) => (
            <FadeInUp
              key={index}
              delay={index * 0.1}
              className="p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-white/10 hover:border-primary/50 transition-all duration-300 hover:scale-105 text-center transform cursor-pointer shadow-lg"
            >
              <achievement.icon className="w-10 h-10 text-white mx-auto mb-4" />
              <div className="text-xl md:text-2xl font-bold text-white mb-2">
                {achievement.value}
              </div>
              <div className="text-sm text-gray-300">{achievement.label}</div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}
