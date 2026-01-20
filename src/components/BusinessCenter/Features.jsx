import { Building2, Shield, Zap, Wifi, Wind, Car } from "lucide-react";
import FadeInUp from "@/components/FadeInUp";

export default function Features() {
  const features = [
    {
      icon: Building2,
      title: "Open-Space Offices",
      description:
        "Flexible floor plans adaptable to startups, SMEs, and multinationals. Customize your workspace to foster collaboration and productivity.",
    },
    {
      icon: Shield,
      title: "Premium Construction",
      description:
        "Durable materials, double-glazed windows, and superior thermal and acoustic insulation ensure a quiet and professional environment.",
    },
    {
      icon: Zap,
      title: "Energy Efficiency",
      description:
        "Equipped with INVERTER air conditioning, LED lighting, and smart building solutions to minimize environmental impact and operating costs.",
    },
    {
      icon: Wifi,
      title: "High-Speed Connectivity",
      description:
        "Fiber optic internet pre-installed with advanced telecommunications infrastructure to keep your business connected at all times.",
    },
    {
      icon: Wind,
      title: "Climate Control",
      description:
        "Advanced HVAC systems provide optimal temperature and air quality control for comfort year-round, boosting employee well-being.",
    },
    {
      icon: Car,
      title: "Ample Parking",
      description:
        "Secure underground and surface parking dedicated to employees and visitors, resolving city center parking challenges.",
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="container px-4 md:px-6">
        <FadeInUp className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            Premium Features
          </h2>
          <p className="text-lg text-black max-w-2xl mx-auto">
            Everything your business needs to thrive in a modern, sustainable
            environment.
          </p>
        </FadeInUp>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <FadeInUp
              key={index}
              delay={index * 0.1}
              className="group p-8 rounded-2xl bg-primary/90 backdrop-blur-sm border border-white/10 shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:scale-105 transform cursor-pointer"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/50 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">
                {feature.title}
              </h3>
              <p className="text-white leading-relaxed">
                {feature.description}
              </p>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}
