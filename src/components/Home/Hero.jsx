import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import HeroPic from "@/assets/Imgs/SALON 1.jpg";
import { motion } from "motion/react";
import FadeInUp from "@/components/FadeInUp";

export default function Hero() {
  const text =
    "Tasnime Immobilier offers premium residences and high-end business centers designed for comfort, innovation, and sustainability in the heart of Marrakech.";
  const letters = text.split("");

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.015, // typing speed
      },
    },
  };

  const child = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

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
          <FadeInUp className="flex justify-center -mt-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
              <MapPin className="w-4 h-4 text-[#f0ba78]" />
              <span className="text-sm font-medium text-white">
                Marrakech, Morocco
              </span>
            </div>
          </FadeInUp>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: 0.1,
            }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-white drop-shadow-lg"
          >
            Discover Luxury Living and{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#328a93] via-[#328a93] to-[#328a93]">
              Business Spaces
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={container}
            initial="hidden"
            animate="visible"
            className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-md"
          >
            {letters.map((char, index) => (
              <motion.span
                key={index}
                variants={child}
                style={{ whiteSpace: "pre-wrap" }}
              >
                {char}
              </motion.span>
            ))}
          </motion.p>

          {/* CTA Buttons */}
          <FadeInUp
            delay={0.3}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
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
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}
