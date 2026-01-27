import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Home, ArrowRight } from "lucide-react";
import heroImg from "@/assets/img59.jpg";
import FadeInUp from "@/components/FadeInUp";
import HeroVideo from "../../assets/VID TASNIME - SITEWEB 2.mp4";

import A7409473 from "../../assets/Imgs2/A7409471.JPG";
import A7409479 from "../../assets/Imgs2/A7409457.JPG";
import A7409482 from "../../assets/Imgs2/A7409482.JPG";
import A7409486 from "../../assets/Imgs2/A7409494.JPG";
import A7409489 from "../../assets/Imgs2/A7409535.JPG";
import A7409494 from "../../assets/Imgs2/A7409563.JPG";

import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cube";
import "swiper/css/effect-cards";

import "../../App.css";
import {
  Mousewheel,
  Pagination,
  EffectCoverflow,
  EffectCube,
  EffectCards,
} from "swiper/modules";

export default function Hero() {
  return (
    <>
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        {/* <div
          className="absolute inset-0 bg-cover -mt-20 bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImg})` }}
        ></div> */}

        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={HeroVideo}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="container relative z-10 px-4 md:px-6 py-20">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <FadeInUp className="flex justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 backdrop-blur-sm">
                <Home className="w-4 h-4 text-[#daff54]" />
                <span className="text-sm font-medium text-white">
                  Vie Résidentielle
                </span>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.2}>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
                Résidences{" "}
                <span className="text-transparent bg-clip-text bg-[#daff54]">
                  Tasnime
                </span>
              </h1>
            </FadeInUp>

            <FadeInUp delay={0.4}>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                La Vie de Luxe Redéfinie – Une expérience de vie sécurisée,
                élégante et contemporaine au cœur de Marrakech.
              </p>
            </FadeInUp>

            <FadeInUp delay={0.6} className="flex justify-center">
              <Link
                to="/contact"
                className="w-[230px] h-[56px] relative cursor-pointer py-4 px-4 text-center font-barlow inline-flex justify-center items-center text-base uppercase text-white rounded-lg border-solid transition-transform duration-300 ease-in-out group outline-offset-4 focus:outline focus:outline-2 focus:outline-white focus:outline-offset-4 overflow-hidden hover:scale-105 active:scale-95"
              >
                <span className="relative z-20 flex font-bold items-center gap-2">
                  Planifier une Visite
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </span>

                <span className="absolute left-[-75%] top-0 h-full w-[50%] bg-white/20 rotate-12 z-10 blur-lg group-hover:left-[125%] transition-all duration-1000 ease-in-out"></span>

                <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-secondary absolute h-[20%] rounded-tl-lg border-l-2 border-t-2 top-0 left-0"></span>
                <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-secondary absolute group-hover:h-[90%] h-[60%] rounded-tr-lg border-r-2 border-t-2 top-0 right-0"></span>
                <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-secondary absolute h-[60%] group-hover:h-[90%] rounded-bl-lg border-l-2 border-b-2 left-0 bottom-0"></span>
                <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-secondary absolute h-[20%] rounded-br-lg border-r-2 border-b-2 right-0 bottom-0"></span>
              </Link>
              {/* <Button
              asChild
              size="lg"
              className="group px-8 py-6 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:scale-105 text-md"
            >
              <Link to="/contact" className="flex items-center gap-2">
                Book a Visit
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button> */}
            </FadeInUp>
          </div>
        </div>
      </section>
      <h2 className="text-3xl md:text-4xl text-center mt-30 font-bold text-primary mb-20">
        RÉSIDENCES TASNIME
      </h2>
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-10">
        <div className="flex flex-col lg:flex-row gap-12 items-start w-full max-w-6xl">
          {/* Left Side - Existing Text */}
          <FadeInUp delay={0.2} className="flex-1 space-y-6">
            <p
              className="
  text-sm
  sm:text-base
  lg:text-lg
  leading-snug
  sm:leading-relaxed
  text-gray-800
  font-medium
"
            >
              Les résidences TASNIME sont des résidences sécurisées conçues
              selon une architecture sobre et raffinée offrant une expérience de
              vie exceptionnelle. Ces résidences Premium sont animées par un jeu
              de jardins et piscines constituant une symphonie d'élégance et de
              confort. Les résidences disposent de pisccines communes pour
              adultes et enfants en plus des piscines privatives pour certains
              duplexes.
            </p>

            <p className="text-primary text-lg leading-relaxed font-bold">
              Elles sont composées de différents typologies d'habitation à
              savoir:
            </p>
            <p
              className="
  text-sm
  sm:text-base
  lg:text-lg
  leading-snug
  sm:leading-relaxed
  text-gray-800
  font-medium
"
            >
              • Appartements F2 ou studios (1 chambre, salon et cuisine à
              l'américaine)
              <br />• Appartements F2 ou studios (1 chambre, salon et cuisine à
              l'américaine) Appartements F3 (2 chambres, salon et cuisine){" "}
              <br />• Appartements F4 (3 chambres, salon et cuisine). <br />•
              Duplexes avec 2 salons, 3 ou 4 chambres à coucher.
            </p>
            <p
              className="
  text-sm
  sm:text-base
  lg:text-lg
  leading-snug
  sm:leading-relaxed
  text-gray-800
  font-medium
"
            >
              Les résidences sont conçues selon les principes de développement
              durable et sont dotées des finitions de qualité supérieure. Elles
              offrent une large variété de superficies qui s'adaptent aux
              différents besoins et budgets:
            </p>
          </FadeInUp>
          <FadeInUp delay={0.2} className="flex-1 space-y-6">
            {/* Right Side - New Text */}
            <motion.div
              className="flex-1 w-full max-w-lg lg:max-w-none"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <div className="relative w-full h-[350px] rounded-2xl overflow-hidden">
                <Swiper
                  direction={"vertical"}
                  slidesPerView={1}
                  spaceBetween={30}
                  mousewheel={true}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Mousewheel, Pagination]}
                  className="mySwiper2 w-full h-full"
                >
                  <SwiperSlide>
                    <img src={A7409494} alt="Transportation" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={A7409473} alt="Transportation" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={A7409482} alt="Transportation" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={A7409479} alt="Transportation" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={A7409489} alt="Transportation" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={A7409486} alt="Transportation" />
                  </SwiperSlide>
                </Swiper>
              </div>
            </motion.div>
            <p
              className="
  text-sm
  sm:text-base
  lg:text-lg
  leading-snug
  sm:leading-relaxed
  text-gray-800
  font-medium 
  ml-6
"
            >
              De 36 M2 à 55 M2 pour les studios <br /> De 68 M2 à 85 M2 pour les
              appartements F3 <br />
              De 108 à 112 M2 pour les appartements F4 <br />
              De 96 à 186 M2 pour les duplexes
            </p>{" "}
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
