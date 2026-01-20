import FadeInUp from "@/components/FadeInUp";

export default function MissionStatement() {
  return (
    <section className="py-20 relative">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <FadeInUp className="p-8 md:p-12 rounded-3xl bg-card/50 backdrop-blur-sm border border-white/10 hover:border-primary/30 transition-all duration-300">
            <p className="text-lg md:text-xl text-white leading-relaxed text-center font-semibold">
              Tasnime Immobilier est un{" "}
              <span className="font-semibold text-[#b1cc4b]">
                acteur de référence
              </span>{" "}
              du secteur immobilier de Marrakech, livrant des projets qui
              combinent{" "}
              <span className="font-semibold text-[#b1cc4b]">
                l'architecture contemporaine
              </span>
              ,{" "}
              <span className="font-semibold text-[#b1cc4b]">
                la durabilité
              </span>
              , et{" "}
              <span className="font-semibold text-[#b1cc4b]">
                l'artisanat supérieur
              </span>
              .
            </p>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}
