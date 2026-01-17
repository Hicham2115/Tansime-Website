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
            INTRODUCTION
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-lg text-white leading-relaxed">
            In the heart of Marrakech, Tasnime Immobilier, a leading player in
            the real estate sector, is launching two exceptional projects
            resolutely designed with contemporary architecture and built around
            the values of sustainable development, quality, innovation, and
            modernity: The TASNIME Business Center and The TASNIME Residences.
          </p>
        </FadeInUp>

        {/* Residences Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <FadeInUp delay={0.2} className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#f1c692]">
              TASNIME RESIDENCES
            </h2>
            <p className="text-white text-lg leading-relaxed">
              Tasnime Residences are distinguished by the user-friendliness of
              the spaces, the durability of construction materials, and the
              quality of finishes. The project includes the creation of more
              than 40 shops and showrooms on the ground floor for commercial
              activity, including a supermarket (MARJANE market).
            </p>
            <p className="text-white leading-relaxed">
              TASNIME Residences are secure residences designed with sober and
              refined architecture, offering an exceptional living experience.
              These Premium residences are enlivened by a play of gardens and
              swimming pools, constituting a symphony of elegance and comfort.
            </p>

            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-2xl hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-primary" />
                Key Sustainability Features
              </h3>
              <ul className="space-y-3">
                {[
                  "Thermal and acoustic insulation with double glazing",
                  "Solid slab structures (thermal inertia)",
                  "INVERTER Air Conditioning",
                  "LED Lighting",
                  "Motion sensors in common areas",
                  "International brand KONE elevators",
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
            <div className="bg-card/50 backdrop-blur-sm p-8 hover:scale-101 transition-all duration-500 rounded-3xl border border-white/10 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-6">
                Typologies & Areas
              </h3>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h2 className="text-white font-bold">
                    Studios & 1-Bedroom (F2)
                  </h2>
                  <p className="text-white font-semibold text-sm">
                    1 bedroom, living room, and open-plan kitchen (36 m² to 55
                    m²)
                  </p>
                </div>
                <div className="w-full h-px bg-white/10" />
                <div className="space-y-2">
                  <h2 className="text-white font-bold">
                    2-Bedroom Apartments (F3)
                  </h2>
                  <p className="text-white font-semibold text-sm">
                    2 bedrooms, living room, and kitchen (68 m² to 85 m²)
                  </p>
                </div>
                <div className="w-full h-px bg-white/10" />
                <div className="space-y-2">
                  <h2 className="text-white font-bold">
                    3-Bedroom Apartments (F4)
                  </h2>
                  <p className="text-white font-semibold text-sm">
                    3 bedrooms, living room, and kitchen (108 m² to 112 m²)
                  </p>
                </div>
                <div className="w-full h-px bg-white/10" />
                <div className="space-y-2">
                  <h2 className="text-white font-bold">Duplexes</h2>
                  <p className="text-white font-semibold text-sm">
                    2 living rooms, 3 or 4 bedrooms (96 m² to 186 m²). Some with
                    private pools.
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Feature Highlight */}
            <div className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm hover:scale-105 transition-all duration-500 border border-white/10">
              <p className="text-white font-semibold italic text-center">
                "Energy efficiency is at the heart of the project's
                architectural and technical design."
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
