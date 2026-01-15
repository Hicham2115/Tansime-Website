import { Clock, Briefcase, Users, Star } from "lucide-react";
import ScaleIn from "@/components/ScaleIn";

export default function StatsSection() {
  const stats = [
    { number: "10+", label: "Years of Excellence", icon: Clock },
    { number: "25+", label: "Completed Projects", icon: Briefcase },
    { number: "500+", label: "Happy Families", icon: Users },
    { number: "100%", label: "Satisfaction Rate", icon: Star },
  ];

  return (
    <section className="py-12 bg-transparent border-y border-white/5">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <ScaleIn
                key={index}
                delay={index * 0.1}
                className="relative p-6 rounded-3xl hover:scale-105 bg-card/50 backdrop-blur-sm border border-white/10 hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl flex items-center bg-primary/50 justify-center shadow-lg shadow-primary/70 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl md:text-2xl mt-4 font-bold text-white">
                  {stat.number}
                </h3>
                <p className="text-sm text-gray-300 mt-2 font-medium uppercase tracking-wider">
                  {stat.label}
                </p>
              </ScaleIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
