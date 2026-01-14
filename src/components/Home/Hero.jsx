import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import HeroPic from "@/assets/Imgs/SALON 1.jpg";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover -mt-20 bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HeroPic})` }}
      ></div>
      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="container relative z-10 px-4 md:px-6 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm animate-fade-in-up -mt-16 ">
            <MapPin className="w-4 h-4 text-[#f0ba78]" />
            <span className="text-sm font-medium text-white">
              Marrakech, Morocco
            </span>
          </div>

          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white drop-shadow-lg animate-fade-in-up animation-delay-100">
            Discover Luxury Living and{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#328a93] via-[#328a93] to-[#328a93]">
              Business Spaces
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-md animate-fade-in-up animation-delay-200">
            Tasnime Immobilier offers premium residences and high-end business
            centers designed for comfort, innovation, and sustainability in the
            heart of Marrakech.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-300">
            <Button
              asChild
              size="lg"
              className="group relative px-8 py-6 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-2xl shadow-primary/20 hover:shadow-primary/40 hover:scale-105 text-md"
            >
              <Link to="/residences" className="flex items-center gap-2">
                Explore Our Projects
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="px-8 py-6 border border-white rounded-xl bg-transparent hover:bg-transparent hover:scale-105 hover:text-white transition-all duration-300 text-md font-semibold"
            >
              <Link to="/contact">Contact Us Today</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
