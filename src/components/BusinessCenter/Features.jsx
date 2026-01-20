import { Building2, Shield, Zap, Wifi, Wind, Car } from "lucide-react";
import FadeInUp from "@/components/FadeInUp";

export default function Features() {
  const features = [
    {
      icon: Building2,
      title: "Bureaux Ouverts",
      description:
        "Plans d'étages flexibles adaptables aux startups, PME et multinationales. Personnalisez votre espace de travail pour favoriser la collaboration et la productivité.",
    },
    {
      icon: Shield,
      title: "Construction Premium",
      description:
        "Matériaux durables, fenêtres à double vitrage et isolation thermique et acoustique supérieure garantissent un environnement calme et professionnel.",
    },
    {
      icon: Zap,
      title: "Efficacité Énergétique",
      description:
        "Équipé de climatisation INVERTER, éclairage LED et solutions de bâtiment intelligent pour minimiser l'impact environnemental et les coûts d'exploitation.",
    },
    {
      icon: Wifi,
      title: "Connectivité Haut Débit",
      description:
        "Internet par fibre optique pré-installé avec infrastructure télécommunications avancée pour maintenir votre entreprise connectée en permanence.",
    },
    {
      icon: Wind,
      title: "Contrôle Climatique",
      description:
        "Systèmes HVAC avancés pour un contrôle optimal de la température et de la qualité de l'air toute l'année, améliorant le bien-être des employés.",
    },
    {
      icon: Car,
      title: "Stationnement Abondant",
      description:
        "Stationnement sécurisé souterrain et en surface dédié aux employés et visiteurs, résolvant les défis de stationnement du centre-ville.",
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="container px-4 md:px-6">
        <FadeInUp className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            Caractéristiques Premium
          </h2>
          <p className="text-lg text-black max-w-2xl mx-auto">
            Tout ce dont votre entreprise a besoin pour prospérer dans un
            environnement moderne et durable.
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
