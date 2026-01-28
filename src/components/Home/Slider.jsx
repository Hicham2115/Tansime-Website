import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../App.css";

// import required modules
import { EffectCards, Pagination } from "swiper/modules";
import { CheckCircle2 } from "lucide-react";
import FadeInUp from "@/components/FadeInUp";

import salonDup from "../../assets/Imgs2/A7409535.JPG";
import salonSamKitch from "../../assets/Imgs2/2.jpg";
import samDup from "../../assets/Imgs2/A7409570.JPG";
import samSalon from "../../assets/Imgs2/A7409471.JPG";

const sliderImages = [
  { src: salonDup, title: "Chambre de Luxe" },
  { src: salonSamKitch, title: "Salon Moderne" },
  { src: samDup, title: "Cuisine Moderne" },
  { src: samSalon, title: "Espace Divertissement" },
];

export default function Slider() {
  return (
    <section className="py-20 relative border-t border-white/10 -mt-10">
      <div className="container px-4 md:px-6 space-y-16">
        {/* Header */}
        <FadeInUp className="max-w-4xl mx-auto text-center space-y-6">
          {/* <h2 className="text-3xl md:text-4xl font-bold text-primary">
            BIENVENUE À TASNIME
          </h2> */}
          {/* <div className="w-20 h-1 bg-primary mx-auto rounded-full" /> */}
        </FadeInUp>

        {/* Residences Section */}
        <div className="flex flex-col lg:flex-row gap-24 items-start justify-center">
          {/* Text / Features */}
          <FadeInUp
            delay={0.2}
            className="space-y-6 w-full lg:w-1/2 text-start"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                RÉSIDENCES TASNIME
              </h2>
              <div className="w-16 h-1 bg-primary rounded-full mb-6" />
            </div>

            <div className="space-y-4 text-sm sm:text-base lg:text-lg leading-snug sm:leading-relaxed">
              {/* Feature 1 */}
              <div className="flex gap-3 items-start">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-primary mb-1">
                    Espace Commercial de Premier Plan
                  </h4>
                  <p className="text-sm font-semibold text-black">
                    Plus de 40 boutiques et showrooms premium au rez-de-chaussée,
                    y compris le supermarché MARJANE
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-3 items-start">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-primary mb-1">
                    Environnement de Vie Sécurisé
                  </h4>
                  <p className="text-sm font-semibold text-black">
                    Systèmes de sécurité de pointe avec surveillance 24/7
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex gap-3 items-start">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-primary mb-1">
                    Jardins Luxuriants et Commodités
                  </h4>
                  <p className="text-sm font-semibold text-black">
                    Plusieurs piscines et jardins magnifiquement aménagés
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex gap-3 items-start">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-primary mb-1">
                    Architecture Durable
                  </h4>
                  <p className="text-sm font-semibold text-black">
                    Conception écologiquement responsable avec systèmes économes
                    en énergie
                  </p>
                </div>
              </div>
            </div>
          </FadeInUp>

          {/* Slider */}
          <FadeInUp
            delay={0.2}
            className="space-y-6 w-full lg:w-1/2 flex flex-col items-center lg:items-start"
          >
            <Swiper
              effect="cards"
              grabCursor
              pagination={{ clickable: true }}
              modules={[EffectCards, Pagination]}
              loop={false}
            >
              {sliderImages.map((slide, index) => (
                <SwiperSlide key={index} className="relative">
                  <div className="w-full h-full rounded-lg overflow-hidden">
                    <img
                      src={slide.src}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}
