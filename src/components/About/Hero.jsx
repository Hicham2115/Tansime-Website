import { Target } from "lucide-react";
import heroImg from "@/assets/Imgs/SAM-SALON.jpg";

export default function Hero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover -mt-20 bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImg})` }}
      ></div>
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(201,169,97,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(201,169,97,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="container relative z-10 px-4 md:px-6 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 backdrop-blur-sm animate-fade-in-up">
            <Target className="w-4 h-4 text-[#f0ba78]" />
            <span className="text-sm font-medium text-white">Our Story</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white animate-fade-in-up animation-delay-100">
            Who We{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#328a93] via-[#328a93] to-[#328a93]">
              Are
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
            Tasnime Immobilier – A reference player in Marrakech's real estate
            sector
          </p>
        </div>
      </div>
    </section>
  );
}
