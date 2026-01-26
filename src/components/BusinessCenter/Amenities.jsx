import { Users, Coffee, Monitor, Briefcase } from "lucide-react";
import img1 from "@/assets/Imgs/A7409547.JPG";
import img2 from "@/assets/Imgs/A7409507.JPG";
import img3 from "@/assets/Imgs/A7409522.JPG";
import img4 from "@/assets/Imgs/A7409473.JPG";

import ch2App from "@/assets/Imgs/ch2-app.jpg";
import chDup from "@/assets/Imgs/CH-DUP.jpg";
import ch3Dup from "@/assets/Imgs/CH3-DUP.jpg";
import espaceTv2 from "@/assets/Imgs/ESPACE TV 2.jpg";



import FadeInUp from "@/components/FadeInUp";
import ScaleIn from "@/components/ScaleIn";

export default function Amenities() {
  const amenities = [
    {
      icon: Users,
      title: "Salles de Conférence",
      description:
        "Espaces de réunion entièrement équipés pour présentations et briefings clients.",
    },
    {
      icon: Coffee,
      title: "Zones Lounge",
      description:
        "Zones de détente confortables pour la relaxation et le networking informel.",
    },
    {
      icon: Monitor,
      title: "Support IT",
      description:
        "Assistance technique sur site pour assurer le bon fonctionnement quotidien.",
    },
    {
      icon: Briefcase,
      title: "Services de Réception",
      description:
        "Service professionnel de réception pour accueillir vos clients.",
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="container px-4 md:px-6">
        <FadeInUp className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            Commodités de Classe Mondiale
          </h2>
          <p
            className="sm:text-base
  lg:text-lg
  leading-snug
  sm:leading-relaxed text-black max-w-2xl mx-auto"
          >
            Conçues pour la commodité, le confort et la productivité.
          </p>
        </FadeInUp>

        {/* Amenities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-20">
          {amenities.map((item, index) => (
            <FadeInUp
              key={index}
              delay={index * 0.1}
              className="text-center p-6 rounded-2xl bg-primary/90 backdrop-blur-sm border border-white/10 hover:border-primary/30 hover:shadow-lg transition-all duration-300 hover:scale-105 transform cursor-pointer"
            >
              <div className="w-12 h-12 mx-auto rounded-full bg-primary shadow-md flex items-center justify-center mb-4 text-white">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-white text-sm">{item.description}</p>
            </FadeInUp>
          ))}
        </div>

        {/* New Content & Image Grid Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Content Side */}
          <FadeInUp className="space-y-6">
            <h3 className="text-3xl font-bold text-primary">
              Expérimentez l'Équilibre Parfait Entre Travail et Vie
            </h3>
            <p
              className="text-black font-semiboldsm:text-base
  lg:text-lg
  leading-snug
  sm:leading-relaxed"
            >
              Notre centre d'affaires offre plus que de simples espaces de
              bureau ; il propose un environnement holistique adapté au succès.
              Profitez d'installations premium qui répondent à vos besoins
              professionnels tout en offrant des espaces pour vous détendre et
              vous ressourcer.
            </p>
            <p
              className="text-black font-semiboldsm:text-base
  lg:text-lg
  leading-snug
  sm:leading-relaxed"
            >
              Des salles de conférence ultramodernes aux espaces lounge
              relaxants, chaque détail est conçu pour améliorer votre journée de
              travail.
            </p>
          </FadeInUp>

          {/* Image Grid Side */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <ScaleIn
                delay={0.2}
                className="rounded-2xl overflow-hidden h-48 border border-white/10 shadow-lg group hover:scale-[1.02] transition-transform duration-300"
              >
                <img
                  src={espaceTv2}
                  alt="Business Center Interior"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </ScaleIn>
              <ScaleIn
                delay={0.3}
                className="rounded-2xl overflow-hidden h-64 border border-white/10 shadow-lg group hover:scale-[1.02] transition-transform duration-300"
              >
                <img
                  src={ch3Dup}
                  alt="Lounge Area"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </ScaleIn>
            </div>
            <div className="space-y-4 pt-8">
              <ScaleIn
                delay={0.4}
                className="rounded-2xl overflow-hidden h-64 border border-white/10 shadow-lg group hover:scale-[1.02] transition-transform duration-300"
              >
                <img
                  src={ch2App}
                  alt="Meeting Room"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </ScaleIn>
              <ScaleIn
                delay={0.5}
                className="rounded-2xl overflow-hidden h-48 border border-white/10 shadow-lg group hover:scale-[1.02] transition-transform duration-300"
              >
                <img
                  src={chDup}
                  alt="Office Space"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </ScaleIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
