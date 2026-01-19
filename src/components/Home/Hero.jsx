import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, MailOpen, MapPin } from "lucide-react";
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
              <MapPin className="w-4 h-4 text-[#b1cc4b]" />
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
            <span className="text-transparent bg-clip-text bg-[#b1cc4b]">
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
            <button
              className="w-[260px] h-[56px] py-4 px-8 flex gap-3 text-white font-bold text-md rounded-md shadow-lg transition-transform transform bg-transparent border-2 border-white hover:scale-105 hover:border-primary cursor-pointer hover:shadow-primary/50 hover:shadow-2xl focus:outline-none"
              id="startButton"
            >
              Explore Our Projects
              <ExternalLink className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <Link
              to="/contact"
              className="w-[260px] h-[56px] relative cursor-pointer py-4 px-4 text-center font-barlow inline-flex justify-center items-center text-base uppercase text-white rounded-lg border-solid transition-transform duration-300 ease-in-out group outline-offset-4 focus:outline focus:outline-2 focus:outline-white focus:outline-offset-4 overflow-hidden hover:scale-105 active:scale-95"
            >
              <span className="relative z-20 flex font-bold items-center gap-2">
                Contact Us
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  <MailOpen className="w-5 h-5" />
                </span>
              </span>

              <span className="absolute left-[-75%] top-0 h-full w-[50%] bg-white/20 rotate-12 z-10 blur-lg group-hover:left-[125%] transition-all duration-1000 ease-in-out"></span>

              <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute h-[20%] rounded-tl-lg border-l-2 border-t-2 top-0 left-0"></span>
              <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute group-hover:h-[90%] h-[60%] rounded-tr-lg border-r-2 border-t-2 top-0 right-0"></span>
              <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute h-[60%] group-hover:h-[90%] rounded-bl-lg border-l-2 border-b-2 left-0 bottom-0"></span>
              <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute h-[20%] rounded-br-lg border-r-2 border-b-2 right-0 bottom-0"></span>
            </Link>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}
