import FadeInUp from "@/components/FadeInUp";

export default function MissionStatement() {
  return (
    <section className="py-12 sm:py-20 relative overflow-hidden">
      <FadeInUp
        className="
          container
          relative
          px-4
          md:px-6
          bg-primary/90
          backdrop-blur-sm
          p-6
          sm:p-8
          w-full
          sm:w-[90%]
          lg:w-[70%]
          mx-auto
          rounded-xl
          border
          border-white/10
          hover:border-primary/30
          transition-all
          duration-300
        "
      >
        <div className="max-w-3xl mx-auto text-center space-y-6">
          {/* Title */}
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Mission de Tasnime Immobilier
          </h2>

          {/* Paragraph */}
          <p
            className="
              text-sm
              sm:text-base
              lg:text-lg
              leading-snug
              sm:leading-relaxed
              text-white/90
            "
          >
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
            <span className="font-semibold text-[#b1cc4b]">la durabilité</span>,
            et{" "}
            <span className="font-semibold text-[#b1cc4b]">
              l'artisanat supérieur
            </span>
            .
          </p>
        </div>
      </FadeInUp>
    </section>
  );
}
