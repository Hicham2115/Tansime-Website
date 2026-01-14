import { Clock, Briefcase, Users, Star } from "lucide-react";

export default function StatsSection() {
  const stats = [
    { number: "10+", label: "Years of Excellence", icon: Clock },
    { number: "25+", label: "Completed Projects", icon: Briefcase },
    { number: "500+", label: "Happy Families", icon: Users },
    { number: "100%", label: "Satisfaction Rate", icon: Star },
  ];

  return (
    <section className="py-12 bg-primary/5 border-y border-white/5">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="relative p-6 rounded-3xl hover:scale-105  bg-white/70 border border-white/10 hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl flex items-center bg-white/5 justify-center shadow-lg shadow-primary/70 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl md:text-2xl mt-4 font-bold text-black">
                  {stat.number}
                </h3>
                <p className="text-sm text-black/70 mt-2 font-medium uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
