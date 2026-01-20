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
import ScaleIn from "@/components/ScaleIn";

const sliderImages = [
  {
    src: "/src/assets/Imgs/CHAMBRE.jpg",
    title: "Luxury Bedroom",
    description: "Spacious and elegantly designed bedroom suites",
  },
  {
    src: "/src/assets/Imgs/SALON 1.jpg",
    title: "Modern Living Room",
    description: "Contemporary living spaces with premium finishes",
  },
  {
    src: "/src/assets/Imgs/KITCHENETTE.jpg",
    title: "Modern Kitchen",
    description: "Fully equipped kitchenette with quality appliances",
  },
  {
    src: "/src/assets/Imgs/ESPACE TV 2.jpg",
    title: "Entertainment Area",
    description: "Dedicated space for relaxation and entertainment",
  },
  {
    src: "/src/assets/Imgs/CHAMBRE 2.jpg",
    title: "Guest Bedroom",
    description: "Comfortable guest accommodations",
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
              WELCOME TO TASNIME
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
            <p className="text-lg text-black leading-relaxed font-semibold">
              Discover the pinnacle of modern living and premium business spaces
              in Marrakech. Tasnime Immobilier presents two visionary projects
              that redefine the real estate landscape. Built on the foundation
              of contemporary architecture and sustainable practices, our
              developments embody excellence, innovation, and sophisticated
              design.
            </p>
            <p className="text-base text-gray-700 leading-relaxed">
              Every detail has been carefully crafted to deliver an exceptional
              experience, combining luxury with functionality and environmental
              responsibility.
            </p>
          </FadeInUp>

          {/* Residences Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <FadeInUp delay={0.2} className="space-y-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  TASNIME RESIDENCES
                </h2>
                <div className="w-16 h-1 bg-primary rounded-full" />
              </div>

              <p className="text-black text-lg leading-relaxed font-semibold">
                Experience luxury living at its finest. Tasnime Residences
                showcase thoughtfully designed spaces that prioritize comfort,
                sustainability, and modern aesthetics. With meticulous attention
                to construction quality and premium finishes, each residence is
                a sanctuary of elegance.
              </p>

              <div className="space-y-4">
                <div className="flex gap-3 items-start">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-black mb-1">
                      Prime Commercial Space
                    </h4>
                    <p className="text-sm text-gray-700">
                      Over 40 premium shops and showrooms on ground floor,
                      including MARJANE supermarket
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-black mb-1">
                      Secure Living Environment
                    </h4>
                    <p className="text-sm text-gray-700">
                      State-of-the-art security systems with 24/7 monitoring
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-black mb-1">
                      Lush Gardens & Amenities
                    </h4>
                    <p className="text-sm text-gray-700">
                      Multiple swimming pools and beautifully landscaped gardens
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-black mb-1">
                      Sustainable Architecture
                    </h4>
                    <p className="text-sm text-gray-700">
                      Environmentally conscious design with energy-efficient
                      systems
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-black leading-relaxed font-semibold pt-4 border-t border-primary/30">
                Each residence is crafted to provide an exceptional living
                experience, seamlessly blending contemporary design with
                timeless elegance and environmental responsibility.
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
                    <div className="w-full h-full rounded-lg overflow-hidden">
                      <img
                        src={slide.src}
                        alt={slide.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                        <h3 className="text-white font-bold text-lg">
                          {slide.title}
                        </h3>
                        <p className="text-gray-200 text-sm">
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
