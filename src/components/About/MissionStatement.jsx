import FadeInUp from "@/components/FadeInUp";

export default function MissionStatement() {
  return (
    <section className="py-20 relative">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <FadeInUp className="p-8 md:p-12 rounded-3xl bg-card/50 backdrop-blur-sm border border-white/10 hover:border-primary/30 transition-all duration-300">
            <p className="text-lg md:text-xl text-white leading-relaxed text-center font-semibold">
              Tasnime Immobilier is a{" "}
              <span className="font-semibold text-[#f1c692]">
                reference player
              </span>{" "}
              in Marrakech's real estate sector, delivering projects that
              combine{" "}
              <span className="font-semibold text-[#f1c692]">
                contemporary architecture
              </span>
              ,{" "}
              <span className="font-semibold text-[#f1c692]">sustainability</span>
              , and{" "}
              <span className="font-semibold text-[#f1c692]">
                superior craftsmanship
              </span>
              .
            </p>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}
