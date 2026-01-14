import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Home, ArrowRight } from "lucide-react";
import heroImg from "@/assets/Imgs/CH-2.jpg";

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
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
            <Home className="w-4 h-4 text-[#f0ba78]" />
            <span className="text-sm font-medium text-white">
              Residential Living
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white animate-fade-in-up animation-delay-100">
            Tasnime{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#328a93] via-[#328a93] to-[#328a93]">
              Residences
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
            Premium Living, Redefined – A secure, elegant, and contemporary
            living experience in the heart of Marrakech.
          </p>

          <Button
            asChild
            size="lg"
            className="group px-8 py-6 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:scale-105 text-md animate-fade-in-up animation-delay-300"
          >
            <Link to="/contact" className="flex items-center gap-2">
              Book a Visit
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
