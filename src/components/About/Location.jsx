import { MapPin } from "lucide-react";

export default function Location() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container relative px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-6 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary">
              Localisation Stratégique
            </h2>
            <p className="text-lg text-black">
              Parfaitement positionnée au cœur de Marrakech
            </p>
          </div>

          <div className="p-2 md:p-8 rounded-3xl bg-primary/90 border border-white/20 hover:border-primary/30 transition-all duration-300 hover:scale-101 transform cursor-pointer shadow-xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/90 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Carrefour Principal
                </h3>
                <p className="text-lg text-white leading-relaxed">
                  Stratégiquement situé à l'intersection de deux grands
                  boulevards :{" "}
                  <span className="text-[#b1cc4b] font-semibold">
                    Boulevard de Safi
                  </span>{" "}
                  et{" "}
                  <span className="text-[#b1cc4b] font-semibold">
                    Avenue Charaf
                  </span>
                  , nos projets sont facilement accessibles et offrent un
                  environnement de vie et de travail premium.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 pt-6 border-t border-gray-200/50">
              <div className="text-center p-4">
                <div className="text-2xl font-bold text-white mb-1">10 min</div>
                <div className="text-sm text-white">Du Centre-Ville</div>
              </div>
              <div className="text-center p-4">
                <div className="text-2xl font-bold text-white mb-1">5 min</div>
                <div className="text-sm text-white">De l'Autoroute</div>
              </div>
              <div className="text-center p-4">
                <div className="text-2xl font-bold text-white mb-1">5 min</div>
                <div className="text-sm text-white">De la Gare TGV</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
