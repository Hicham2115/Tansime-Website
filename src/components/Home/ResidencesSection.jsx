import { CheckCircle2 } from "lucide-react";

import FadeInUp from "@/components/FadeInUp";

import img1 from "../../assets/Imgs2/2.jpg";
import img2 from "../../assets/Imgs2/A7409494.JPG";
import img3 from "../../assets/Imgs2/A7409563.JPG";
import img4 from "../../assets/Imgs2/LAST.jpg";
import img5 from "../../assets/Imgs/RUR04395.jpg";
import img6 from "../../assets/Imgs/RUR04229.jpg";

//Icons
// import ascenseur from "@/assets/ascenseur.png";
// import climatiseur from "@/assets/climatiseur.png";
// import cuisine from "@/assets/cuisine.png";
// import filtre from "@/assets/filtre.png";
// import lumiere from "@/assets/lumiere-led.png";
// import parking from "@/assets/parking.png";
// import piscine from "@/assets/piscine.png";
// import structure from "@/assets/structure.png";

import {
  Building2,
  Wind,
  CookingPot,
  Layers,
  Lightbulb,
  ParkingSquare,
  Waves,
  ArrowUpDown,
} from "lucide-react";

import ScaleIn from "@/components/ScaleIn";

export default function ResidencesSection() {
  const features = [
    { label: "STRUCTURE EN DALLE PLEINE", icon: Building2 },
    { label: "DOUBLE VITRAGE", icon: Layers },
    { label: "CLIMATISATION INVERTER", icon: Wind },
    { label: "Éclairage LED", icon: Lightbulb },
    { label: "CUISINES ÉQUIPÉES", icon: CookingPot },
    { label: "ASCENSEURS KONE", icon: ArrowUpDown },
    { label: "PISCINES", icon: Waves },
    { label: "PARKING", icon: ParkingSquare },
  ];

  return (
    <section className="py-20 relative border-t border-white/10 -mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[800px] mx-auto mb-16">
        <div className="space-y-4">
          <ScaleIn className="rounded-2xl overflow-hidden h-64 border border-white/10 shadow-lg group hover:scale-[1.02] transition-transform duration-300 max-w-full">
            <img
              src={img1}
              alt="Meeting Room"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
          </ScaleIn>
        </div>

        <div className="space-y-4 pt-8">
          <ScaleIn
            delay={0.5}
            className="rounded-2xl overflow-hidden h-48 border border-white/10 shadow-lg group hover:scale-[1.02] transition-transform duration-300 max-w-full"
          >
            <img
              src={img2}
              alt="Office Space"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
          </ScaleIn>
        </div>

        <div className="space-y-4 pt-8">
          <ScaleIn
            delay={0.5}
            className="rounded-2xl overflow-hidden h-48 border border-white/10 shadow-lg group hover:scale-[1.02] transition-transform duration-300 max-w-full"
          >
            <img
              src={img3}
              alt="Office Space"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
          </ScaleIn>
        </div>

        <div className="space-y-4">
          <ScaleIn className="rounded-2xl overflow-hidden h-64 border border-white/10 shadow-lg group hover:scale-[1.02] transition-transform duration-300 max-w-full">
            <img
              src={img4}
              alt="Meeting Room"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
          </ScaleIn>
        </div>
      </div>

      <div className="container px-4 md:px-6 space-y-16">
        {/* Preamble */}
        <FadeInUp className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Nos Atouts
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <div className="bg-primary/90 backdrop-blur-sm p-8 rounded-3xl hover:scale-[1.0] hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 border border-white/20">
            <ul className="grid grid-cols-2 gap-6">
              {features.map((item, i) => (
                <li
                  key={i}
                  className="flex flex-col items-center justify-center gap-4 text-white text-md text-center"
                >
                  <item.icon className="w-8 h-8 text-[#f1c692] shrink-0" />
                  <span className="font-semibold">{item.label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* <p
            className=" text-black  text-sm
  sm:text-base
  lg:text-lg
  leading-snug
  sm:leading-relaxed font-semibold"
          >
            Au cœur de Marrakech, Tasnime Immobilier, acteur de référence du
            secteur immobilier, lance deux projets exceptionnels résolument
            conçus avec une architecture contemporaine et construits autour des
            valeurs de développement durable, de qualité, d'innovation et de
            modernité : Le Centre d'Affaires TASNIME et Les Résidences TASNIME.
          </p> */}
        </FadeInUp>

        {/* Residences Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <FadeInUp delay={0.2} className="space-y-6">
            {/* <h2 className="text-3xl md:text-4xl font-bold text-primary">
              RÉSIDENCES TASNIME
            </h2> */}
            {/* <p
              className="text-black  text-sm
  sm:text-base
  lg:text-lg
  leading-snug
  sm:leading-relaxed font-semibold"
            >
              Les Résidences Tasnime se distinguent par la convivialité des
              espaces, la durabilité des matériaux de construction et la qualité
              des finitions. Le projet comprend la création de plus de 40
              commerces et showrooms en rez-de-chaussée pour l'activité
              commerciale, y compris un supermarché (marché MARJANE).
            </p>
            <p
              className="text-black  text-sm
  sm:text-base
  lg:text-lg
  leading-snug
  sm:leading-relaxed font-semibold"
            >
              Les Résidences TASNIME sont des résidences sécurisées conçues avec
              une architecture sobre et raffinée, offrant une expérience de vie
              exceptionnelle. Ces résidences Premium sont animées par un jeu de
              jardins et de piscines, constituant une symphonie d'élégance et de
              confort.
            </p> */}

            {/* Additional Feature Highlight */}
            {/* <div className="p-6 rounded-2xl bg-primary/90 backdrop-blur-sm hover:scale-105 transition-all duration-500 border border-white/10">
              <p className="text-white font-semibold italic text-center">
                « L'efficacité énergétique est au cœur de la conception
                architecturale et technique du projet. »
              </p>
            </div> */}
          </FadeInUp>

          {/* <FadeInUp delay={0.4} className="space-y-8">
            <div className="bg-primary/90 backdrop-blur-sm p-8 hover:scale-101 transition-all duration-500 rounded-3xl border border-white/10 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-6">
                Typologies & Surfaces
              </h3>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h2 className="text-white font-bold">Studios & T2 (F2)</h2>
                  <p className="text-white font-semibold text-sm">
                    1 chambre, séjour et cuisine ouverte (36 m² à 55 m²)
                  </p>
                </div>
                <div className="w-full h-px bg-white/10" />
                <div className="space-y-2">
                  <h2 className="text-white font-bold">Appartements T3 (F3)</h2>
                  <p className="text-white font-semibold text-sm">
                    2 chambres, séjour et cuisine (68 m² à 85 m²)
                  </p>
                </div>
                <div className="w-full h-px bg-white/10" />
                <div className="space-y-2">
                  <h2 className="text-white font-bold">Appartements T4 (F4)</h2>
                  <p className="text-white font-semibold text-sm">
                    3 chambres, séjour et cuisine (108 m² à 112 m²)
                  </p>
                </div>
                <div className="w-full h-px bg-white/10" />
                <div className="space-y-2">
                  <h2 className="text-white font-bold">Duplex</h2>
                  <p className="text-white font-semibold text-sm">
                    2 séjours, 3 ou 4 chambres (96 m² à 186 m²). Certains avec
                    piscines privées.
                  </p>
                </div>
              </div>
            </div>
          </FadeInUp> */}
        </div>

        {/* Image Grid */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-10">
          {[img1, img2, img3].map((img, idx) => (
            <ScaleIn
              key={idx}
              // delay={0.6 + idx * 0.2}
              // loading="lazy"
              className="group relative aspect-[5/3] mx-4 overflow-hidden rounded-2xl shadow-2xl"
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300 z-10" />
              <img
                src={img}
                alt={`Tasnime Residence View ${idx + 1}`}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
            </ScaleIn>
          ))}
        </div> */}
      </div>
    </section>
  );
}
