import { Shield, Waves, Trees, Zap, Wind, Sparkles } from "lucide-react";
import FadeInUp from "@/components/FadeInUp";

export default function Features() {
  const features = [
    {
      icon: Shield,
      title: "Sécurité & Intimité",
      description: "Complexe fermé avec accès contrôlé 24/7 et surveillance",
    },
    {
      icon: Waves,
      title: "Piscines Luxe",
      description:
        "Piscines communes pour adultes et enfants, plus piscines privées dans certains duplex",
    },
    {
      icon: Trees,
      title: "Jardins Aménagés",
      description:
        "Espaces verts magnifiquement conçus pour la détente et les loisirs",
    },
    {
      icon: Zap,
      title: "Efficacité Énergétique",
      description: "Climatisation INVERTER et éclairage LED partout",
    },
    {
      icon: Wind,
      title: "Isolation Supérieure",
      description:
        "Isolation thermique et acoustique avec façades à double vitrage",
    },
    {
      icon: Sparkles,
      title: "Finitions Premium",
      description:
        "Matériaux de haute qualité et design élégant dans chaque détail",
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="container px-4 md:px-6">
        <FadeInUp className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            Commodités Luxe
          </h2>
          <p className="text-lg text-black max-w-2xl mx-auto">
            Chaque détail conçu pour votre confort et votre sérénité
          </p>
        </FadeInUp>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <FadeInUp
              key={index}
              delay={index * 0.1}
              className="group p-8 rounded-2xl bg-primary/90 backdrop-blur-sm border border-white/10 hover:border-primary/50 shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:scale-105 transform cursor-pointer"
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
