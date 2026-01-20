import { Bed, Bath, Maximize, Home } from "lucide-react";
import img1 from "@/assets/Imgs/CHAMBRE.jpg";
import img2 from "@/assets/Imgs/KITCHENETTE.jpg";
import img3 from "@/assets/Imgs/SALON DUP.jpg";
import img4 from "@/assets/Imgs/STUDIO SALON.jpg";
import FadeInUp from "@/components/FadeInUp";
import ScaleIn from "@/components/ScaleIn";

export default function HousingTypes() {
  const housingTypes = [
    {
      type: "Studio / F2",
      description: "1 chambre, salon, cuisine américaine",
      size: "36–55 m²",
      icon: Bed,
      bedrooms: 1,
      bathrooms: 1,
    },
    {
      type: "F3",
      description: "2 chambres, salon, cuisine",
      size: "68–85 m²",
      icon: Bed,
      bedrooms: 2,
      bathrooms: 1,
    },
    {
      type: "F4",
      description: "3 chambres, salon, cuisine",
      size: "108–112 m²",
      icon: Bed,
      bedrooms: 3,
      bathrooms: 2,
    },
    {
      type: "Duplex",
      description: "3–4 chambres, 2 salons",
      size: "96–186 m²",
      icon: Home,
      bedrooms: "3-4",
      bathrooms: "2-3",
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container relative px-4 md:px-6">
        <FadeInUp className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            Résidences Disponibles
          </h2>
          <p className="text-lg text-black max-w-2xl mx-auto">
            Choisissez parmi une variété d'agencements conçus pour s'adapter à
            votre style de vie
          </p>
        </FadeInUp>

        {/* Housing Types Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-20">
          {housingTypes.map((housing, index) => (
            <FadeInUp
              key={index}
              delay={index * 0.1}
              className="group relative overflow-hidden rounded-2xl bg-primary/90 backdrop-blur-sm border border-white/10 hover:border-primary/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/10"
            >
              <div className="relative p-8 space-y-6">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white transition-colors">
                      {housing.type}
                    </h3>
                    <p className="text-white">{housing.description}</p>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-primary/50 flex items-center justify-center flex-shrink-0">
                    <housing.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                <div className="flex items-center gap-6 pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2">
                    <Bed className="w-5 h-5 text-primary" />
                    <span className="text-sm text-white">
                      {housing.bedrooms} ch
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bath className="w-5 h-5 text-primary" />
                    <span className="text-sm text-white">
                      {housing.bathrooms} sdb
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Maximize className="w-5 h-5 text-primary" />
                    <span className="text-sm text-white">{housing.size}</span>
                  </div>
                </div>
              </div>
            </FadeInUp>
          ))}
        </div>

        {/* New Content & Image Grid Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Content Side */}
          <FadeInUp className="space-y-6">
            <h3 className="text-3xl font-bold text-primary">
              Conçus pour le Confort et l'Élégance
            </h3>
            <p className="text-black font-semibold leading-relaxed text-lg">
              Chaque résidence est minutieusement conçue pour maximiser l'espace
              et la lumière, offrant un sanctuaire serein au cœur de la ville.
              Les finitions de haute qualité et les agencements réfléchis
              garantissent une expérience de vie premium.
            </p>
            <p className="text-black font-semibold leading-relaxed text-lg">
              Que vous choisissiez un studio douillet ou un spacieux duplex,
              vous trouverez une maison qui reflète parfaitement votre style et
              vos besoins.
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
                  src={img1}
                  alt="Bedroom"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </ScaleIn>
              <ScaleIn
                delay={0.3}
                className="rounded-2xl overflow-hidden h-64 border border-white/10 shadow-lg group hover:scale-[1.02] transition-transform duration-300"
              >
                <img
                  src={img3}
                  alt="Duplex Salon"
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
                  src={img2}
                  alt="Modern Kitchenette"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </ScaleIn>
              <ScaleIn
                delay={0.5}
                className="rounded-2xl overflow-hidden h-48 border border-white/10 shadow-lg group hover:scale-[1.02] transition-transform duration-300"
              >
                <img
                  src={img4}
                  alt="Studio Living Area"
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
