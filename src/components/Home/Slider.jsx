import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../App.css";

// import required modules
import { EffectCards, Pagination, Navigation } from "swiper/modules";
import { CheckCircle2 } from "lucide-react";
import FadeInUp from "@/components/FadeInUp";

import salonDup from "../../assets/Imgs/A7409578.JPG";
import salonSamKitch from "../../assets/Imgs/A7409585.JPG";
import samDup from "../../assets/Imgs/A7409574.JPG";
import samSalon from "../../assets/Imgs/A7409576.JPG";
import sam from "../../assets/Imgs/A7409471.JPG";

const sliderImages = [
  {
    src: salonDup,
    title: "Chambre de Luxe",
    description: "Suites spacieuses et élégamment conçues",
  },
  {
    src: salonSamKitch,
    title: "Salon Moderne",
    description: "Espaces de vie contemporains avec finitions premium",
  },
  {
    src: samDup,
    title: "Cuisine Moderne",
    description:
      "Kitchenette entièrement équipée avec électroménager de qualité",
  },
  {
    src: samSalon,
    title: "Espace Divertissement",
    description: "Espace dédié à la détente et aux loisirs",
  },
  {
    src: sam,
    title: "Chambre d'Invités",
    description: "Hébergement confortable pour vos invités",
  },
];

export default function Slider() {
  return (
    <>
      <section className="py-20 relative border-t border-white/10 -mt-10">
        <div className="container px-4 md:px-6 space-y-16">
          {/* Preamble */}
          <FadeInUp className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              BIENVENUE À TASNIME
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
            <p
              className="text-lg text-black  text-sm
  sm:text-base
  lg:text-lg
  leading-snug
  sm:leading-relaxed font-semibold"
            >
              Découvrez l'apogée de la vie moderne et des espaces commerciaux
              haut de gamme à Marrakech. Tasnime Immobilier présente deux
              projets visionnaires qui redéfinissent le paysage immobilier.
              Basés sur les fondations d'une architecture contemporaine et de
              pratiques durables, nos développements incarnent l'excellence,
              l'innovation et la conception sophistiquée.
            </p>
            <p
              className="text-base text-gray-700  text-sm
  sm:text-base
  lg:text-lg
  leading-snug
  sm:leading-relaxed"
            >
              Chaque détail a été soigneusement élaboré pour offrir une
              expérience exceptionnelle, combinant le luxe avec la
              fonctionnalité et la responsabilité environnementale.
            </p>
          </FadeInUp>

          {/* Residences Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <FadeInUp delay={0.2} className="space-y-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  RÉSIDENCES TASNIME
                </h2>
                <div className="w-16 h-1 bg-primary rounded-full" />
              </div>

              <p
                className="text-black text-lg  text-sm
  sm:text-base
  lg:text-lg
  leading-snug
  sm:leading-relaxed font-semibold"
              >
                Expérimentez le luxe de vivre à son meilleur. Les Résidences
                Tasnime présentent des espaces consciencieusement conçus qui
                privilégient le confort, la durabilité et l'esthétique moderne.
                Avec une attention méticuleuse à la qualité de la construction
                et aux finitions haut de gamme, chaque résidence est un
                sanctuaire d'élégance.
              </p>

              <div
                className="space-y-4  text-sm
  sm:text-base
  lg:text-lg
  leading-snug
  sm:leading-relaxed"
              >
                <div className="flex gap-3 items-start">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-primary mb-1">
                      Espace Commercial de Premier Plan
                    </h4>
                    <p className="text-sm font-semibold text-black">
                      Plus de 40 boutiques et showrooms premium au
                      rez-de-chaussée, y compris le supermarché MARJANE
                    </p>
                  </div>
                </div>

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

                <div className="flex gap-3 items-start">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-primary mb-1">
                      Architecture Durable
                    </h4>
                    <p className="text-sm font-semibold text-black">
                      Conception écologiquement responsable avec systèmes
                      économes en énergie
                    </p>
                  </div>
                </div>
              </div>

              <p
                className="text-black  text-sm
  sm:text-base
  lg:text-lg
  leading-snug
  sm:leading-relaxed font-semibold pt-4 border-t border-primary/30"
              >
                Chaque résidence est conçue pour offrir une expérience de vie
                exceptionnelle, fusionnant harmonieusement le design
                contemporain avec l'élégance intemporelle et la responsabilité
                environnementale.
              </p>
            </FadeInUp>

            <FadeInUp delay={0.4} className="space-y-8">
              <Swiper
                className="mySwiper"
                effect={"cards"}
                grabCursor={true}
                pagination={{ clickable: true }}
                navigation={true}
                modules={[EffectCards, Pagination, Navigation]}
                loop={true}
              >
                {sliderImages.map((slide, index) => (
                  <SwiperSlide key={index} className="relative">
                    <div className="w-full h-full rounded-lg overflow-hidden ">
                      <img
                        src={slide.src}
                        alt={slide.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-5 left-0 right-0  p-4">
                        <h3 className="text-white font-bold text-lg">
                          {slide.title}
                        </h3>
                        <p className="text-white text-sm">
                          {slide.description}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </FadeInUp>
          </div>
        </div>
      </section>
    </>
  );
}
