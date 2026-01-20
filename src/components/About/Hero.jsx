import { Target } from "lucide-react";
import heroImg from "@/assets/Imgs/SAM-SALON.jpg";
import FadeInUp from "@/components/FadeInUp";

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover -mt-20 bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImg})` }}
      ></div>

      <div className="absolute inset-0 bg-black/60"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(201,169,97,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(201,169,97,0.03)_1px,transparent_1px)] bg-size-[64px_64px]" />

      <div className="container relative z-10 px-4 md:px-6 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <FadeInUp className="flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 backdrop-blur-sm">
              <Target className="w-4 h-4 text-[#b1cc4b]" />
              <span className="text-sm font-medium text-white">
                Notre Histoire
              </span>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
              Qui sommes-nous
              <span className="text-transparent bg-clip-text bg-[#b1cc4b]"></span>
            </h1>
          </FadeInUp>

          <FadeInUp delay={0.4}>
            <p className="text-lg md:text-xl text-white max-w-3xl mx-auto leading-relaxed">
              Tasnime Immobilier – Un acteur de référence dans le secteur
              immobilier de Marrakech
            </p>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}
