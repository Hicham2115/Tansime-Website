import { Award, Shield, Leaf, MapPin } from "lucide-react";
import FadeInUp from "@/components/FadeInUp";

export default function AboutSection() {
  const values = [
    {
      icon: Award,
      title: "Innovation",
      description:
        "Nous adoptons une conception de pointe et des solutions de construction intelligentes pour créer des espaces qui anticipent les besoins futurs de la vie et du travail modernes.",
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      icon: Shield,
      title: "Qualité",
      description:
        "Construction premium avec matériaux durables, fenêtres à double vitrage et finitions supérieures. Chaque détail est conçu pour dépasser les attentes.",
      color: "from-primary/20 to-amber-500/20",
    },
    {
      icon: Leaf,
      title: "Durabilité",
      description:
        "Systèmes INVERTER économes en énergie, éclairage LED, isolation thermique et acoustique. Construire de manière responsable pour un avenir plus vert.",
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
              À Propos de Tasnime Immobilier
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <p
                className=" text-black font-semibold   text-sm
  sm:text-base
  lg:text-lg
  leading-snug
  sm:leading-relaxed"
              >
                Situé dans la ville dynamique de Marrakech, Tasnime Immobilier
                est un développeur immobilier de premier plan engagé à livrer
                des projets résidentiels et commerciaux exceptionnels.
              </p>
              <p
                className="text-black  text-sm
  sm:text-base
  lg:text-lg
  leading-snug
  sm:leading-relaxed "
              >
                Avec plus d'une décennie d'expérience, nous sommes fiers de
                transformer les visions en réalité. Notre portefeuille reflète
                un mélange parfait d'architecture moderne, de pratiques durables
                et de l'héritage culturel riche du Maroc, en veillant à ce que
                chaque propriété ne soit pas seulement une structure, mais une
                maison.
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
                  className="overflow-hidden rounded-2xl bg-primary/90 backdrop-blur-sm border border-[#d9ac6f]/20 hover:border-[#d9ac6f]/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#d9ac6f]/10"
                >
                  <div className="relative p-8 space-y-4">
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-xl flex items-center bg-primary justify-center group-hover:scale-110 transition-transform duration-200">
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white transition-colors">
                      {value.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white leading-relaxed">
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
                Situé stratégiquement à Bd de Safi & Av Charaf, Marrakech
              </span>
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}
