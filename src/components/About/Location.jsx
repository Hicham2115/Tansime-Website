import { MapPin } from "lucide-react";

export default function Location() {
  return (
    <section className="py-12 sm:py-20 relative overflow-hidden">
      <div className="container relative px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-4 sm:space-y-6 mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary">
              Localisation Stratégique
            </h2>
            <p
              className="
                text-sm
                sm:text-base
                lg:text-lg
                leading-snug
                sm:leading-relaxed
                text-gray-800
              "
            >
              Parfaitement positionnée au cœur de Marrakech
            </p>
          </div>

          {/* Card */}
          <div className="p-3 sm:p-6 md:p-8 rounded-3xl bg-primary/90 border border-white/20 hover:border-primary/30 transition-all duration-300 hover:scale-[1.01] transform cursor-pointer shadow-xl">
            {/* Top content */}
            <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/90 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">
                  Carrefour Principal
                </h3>
                <p
                  className="
                    text-sm
                    sm:text-base
                    lg:text-lg
                    text-white
                    leading-snug
                    sm:leading-relaxed
                  "
                >
                  Stratégiquement situé à l&apos;intersection de deux grands
                  boulevards dans le quartier d’Al Izdihar ——{" "}
                  <span className="text-[#daff54] font-semibold">
                    Boulevard de Safi
                  </span>{" "}
                  et{" "}
                  <span className="text-[#daff54] font-semibold">
                    Avenue Charaf ——
                  </span>
                  , nos projets sont facilement accessibles et offrent un
                  environnement de vie et de travail premium.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/30">
              <div className="text-center p-3 sm:p-4">
                <div className="text-xl sm:text-2xl font-bold text-white mb-1">
                  10 min
                </div>
                <div className="text-xs sm:text-sm text-white/90">
                  Du Centre-Ville
                </div>
              </div>

              <div className="text-center p-3 sm:p-4">
                <div className="text-xl sm:text-2xl font-bold text-white mb-1">
                  5 min
                </div>
                <div className="text-xs sm:text-sm text-white/90">
                  De l&apos;Autoroute
                </div>
              </div>

              <div className="text-center p-3 sm:p-4">
                <div className="text-xl sm:text-2xl font-bold text-white mb-1">
                  5 min
                </div>
                <div className="text-xs sm:text-sm text-white/90">
                  De la Gare TGV
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
