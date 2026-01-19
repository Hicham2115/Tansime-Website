import { Award, Shield, Leaf, MapPin } from "lucide-react";
import FadeInUp from "@/components/FadeInUp";

export default function AboutSection() {
  const values = [
    {
      icon: Award,
      title: "Innovation",
      description:
        "We embrace cutting-edge design and smart building solutions to create spaces that anticipate the future needs of modern living and working.",
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      icon: Shield,
      title: "Quality",
      description:
        "Premium construction with durable materials, double-glazed windows, and superior finishes. Every detail is crafted to exceed expectations.",
      color: "from-primary/20 to-amber-500/20",
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description:
        "Energy-efficient INVERTER systems, LED lighting, thermal and acoustic insulation. Building responsibly for a greener tomorrow.",
      color: "from-green-500/20 to-emerald-500/20",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <FadeInUp className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-primary">
              About Tasnime Immobilier
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <p className="text-lg text-black font-semibold leading-relaxed">
                Located in the vibrant city of Marrakech, Tasnime Immobilier is
                a leading real estate developer committed to delivering
                exceptional residential and business projects.
              </p>
              <p className="text-black text-base leading-relaxed">
                With over a decade of experience, we pride ourselves on
                transforming visions into reality. Our portfolio reflects a
                perfect blend of modern architecture, sustainable practices, and
                the rich cultural heritage of Morocco, ensuring every property
                is not just a structure, but a home.
              </p>
            </div>
          </FadeInUp>

          {/* 3 Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <FadeInUp
                  key={index}
                  delay={index * 0.2}
                  className="overflow-hidden rounded-2xl bg-white/60 backdrop-blur-sm border border-[#d9ac6f]/20 hover:border-[#d9ac6f]/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#d9ac6f]/10"
                >
                  <div className="relative p-8 space-y-4">
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-xl flex items-center bg-primary justify-center group-hover:scale-110 transition-transform duration-200">
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-black transition-colors">
                      {value.title}
                    </h3>

                    {/* Description */}
                    <p className="text-black/80 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </FadeInUp>
              );
            })}
          </div>

          {/* Location Info */}
          <FadeInUp delay={0.6} className="text-center pt-8">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/60 backdrop-blur-md border border-[#d9ac6f]/20 shadow-lg">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-black font-medium">
                Strategically located at Bd de Safi & Av Charaf, Marrakech
              </span>
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}
