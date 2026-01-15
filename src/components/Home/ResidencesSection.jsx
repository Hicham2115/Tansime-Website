import { CheckCircle2 } from "lucide-react";
import img1 from "@/assets/img53.jpg";
import img2 from "@/assets/img59.jpg";
import img3 from "@/assets/img77.jpg";
import FadeInUp from "@/components/FadeInUp";
import ScaleIn from "@/components/ScaleIn";

export default function ResidencesSection() {
  return (
    <section className="py-20 relative border-t border-white/10">
      <div className="container px-4 md:px-6 space-y-16">
        {/* Preamble */}
        <FadeInUp className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            PRÉAMBULE
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-lg text-white leading-relaxed">
            Au cœur de la ville de Marrakech, Tasnime immobilier acteur de
            référence dans le domaine de l'immobilier lance deux projets
            exceptionnels résolument pensés dans une architecture contemporaine
            et érigés autour des valeurs de développement durable, qualité,
            innovation, et modernité : Le centre d'affaires TASNIME et Les
            résidences TASNIME.
          </p>
        </FadeInUp>

        {/* Residences Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <FadeInUp delay={0.2} className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#f1c692]">
              RÉSIDENCES TASNIME
            </h2>
            <p className="text-white text-lg leading-relaxed">
              Les résidences Tasnime se distinguent par la convivialité des
              espaces, la durabilité des matériaux de construction ainsi que la
              qualité des finitions. Le projet prévoit la réalisation de plus de
              40 magasins et showrooms en RDC pour l'animation commerciale des
              résidences dont un supermarché (MARJANE market).
            </p>
            <p className="text-white leading-relaxed">
              Les résidences TASNIME sont des résidences sécurisées conçues
              selon une architecture sobre et raffinée offrant une expérience de
              vie exceptionnelle. Ces résidences Premium sont animées par un jeu
              de jardins et piscines constituant une symphonie d'élégance et de
              confort.
            </p>

            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-2xl hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-primary" />
                Points Forts Développement Durable
              </h3>
              <ul className="space-y-3">
                {[
                  "Isolation thermique et phonique avec double vitrage",
                  "Structures en dalle pleine (inertie thermique)",
                  "Climatisation INVERTER",
                  "Eclairage LED",
                  "Detecteurs de présence dans les circulations",
                  "Ascenseurs de marque international KONE",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-white text-sm"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.4} className="space-y-8">
            {/* Typologies Card */}
            <div className="bg-card/50 backdrop-blur-sm p-8 hover:scale-105 transition-all duration-500 rounded-3xl border border-white/10 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-6">
                Typologies & Superficies
              </h3>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h2 className="text-white font-bold">Studios & F2</h2>
                  <p className="text-white font-semibold text-sm">
                    1 chambre, salon et cuisine à l'américaine (36 m² à 55 m²)
                  </p>
                </div>
                <div className="w-full h-px bg-white/10" />
                <div className="space-y-2">
                  <h2 className="text-white font-bold">Appartements F3</h2>
                  <p className="text-white font-semibold text-sm">
                    2 chambres, salon et cuisine (68 m² à 85 m²)
                  </p>
                </div>
                <div className="w-full h-px bg-white/10" />
                <div className="space-y-2">
                  <h2 className="text-white font-bold">Appartements F4</h2>
                  <p className="text-white font-semibold text-sm">
                    3 chambres, salon et cuisine (108 m² à 112 m²)
                  </p>
                </div>
                <div className="w-full h-px bg-white/10" />
                <div className="space-y-2">
                  <h2 className="text-white font-bold">Duplexes</h2>
                  <p className="text-white font-semibold text-sm">
                    2 salons, 3 ou 4 chambres à coucher (96 m² à 186 m²).
                    Certains avec piscines privatives.
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Feature Highlight */}
            <div className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm hover:scale-105 transition-all duration-500 border border-white/10">
              <p className="text-white font-semibold italic text-center">
                "L'efficacité énergétique est au cœur de la conception
                architecturale et technique du projet."
              </p>
            </div>
          </FadeInUp>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[img1, img2, img3].map((img, idx) => (
            <ScaleIn
              key={idx}
              delay={0.6 + idx * 0.2}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 shadow-2xl"
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300 z-10" />
              <img
                src={img}
                alt={`Tasnime Residence View ${idx + 1}`}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
            </ScaleIn>
          ))}
        </div>
      </div>
    </section>
  );
}
