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
    // { label: "CUISINES ÉQUIPÉES", icon: CookingPot },
    { label: "ASCENSEURS KONE", icon: ArrowUpDown },
    // { label: "PISCINES", icon: Waves },
    { label: "PARKING", icon: ParkingSquare },
  ];

  return (
    <section className="py-20 relative border-t border-white/10 -mt-10">
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
      </div>
    </section>
  );
}
