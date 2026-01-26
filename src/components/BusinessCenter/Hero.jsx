import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Building2, ArrowRight } from "lucide-react";
import bussinesspic from "@/assets/img77.jpg";
import FadeInUp from "@/components/FadeInUp";

import A7409538 from "../../assets/Imgs/A7409538.JPG";
import A7409545 from "../../assets/Imgs/A7409545.JPG";
import A7409515 from "../../assets/Imgs/A7409515.JPG";
import A7409558 from "../../assets/Imgs/A7409558.JPG";
import A7409473 from "../../assets/Imgs/A7409473.JPG";
import A7409562 from "../../assets/Imgs/A7409562.JPG";

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
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover -mt-20 bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bussinesspic})` }}
        ></div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(201,169,97,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(201,169,97,0.03)_1px,transparent_1px)] bg-size-[64px_64px]" />

        <div className="container relative z-10 px-4 md:px-6 py-20">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <FadeInUp className="flex justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#328a93]/20 backdrop-blur-sm">
                <Building2 className="w-4 h-4 text-[#b1cc4b]" />
                <span className="text-sm font-medium text-white">
                  Immobilier Commercial
                </span>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.2}>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
                Centre d'Affaires{" "}
                <span className="text-transparent bg-clip-text bg-[#b1cc4b]">
                  Tasnime
                </span>
              </h1>
            </FadeInUp>

            <FadeInUp delay={0.4}>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Destination Commerciale Premier de Marrakech – Architecture haut
                de gamme, agencements flexibles et commodités modernes conçus
                pour les entreprises de toutes tailles.
              </p>
            </FadeInUp>

            <FadeInUp delay={0.6} className="flex justify-center">
              <Link
                to="/contact"
                className="w-[360px] h-[56px] relative cursor-pointer py-4 px-4 text-center font-barlow inline-flex justify-center items-center text-base uppercase text-white rounded-lg border-solid transition-transform duration-300 ease-in-out group outline-offset-4 focus:outline focus:outline-2 focus:outline-white focus:outline-offset-4 overflow-hidden hover:scale-105 active:scale-95"
              >
                <span className="relative z-20 flex font-bold items-center gap-2">
                  Demander Plus d'Informations
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </span>

                <span className="absolute left-[-75%] top-0 h-full w-[50%] bg-white/20 rotate-12 z-10 blur-lg group-hover:left-[125%] transition-all duration-1000 ease-in-out"></span>

                <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute h-[20%] rounded-tl-lg border-l-2 border-t-2 top-0 left-0"></span>
                <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute group-hover:h-[90%] h-[60%] rounded-tr-lg border-r-2 border-t-2 top-0 right-0"></span>
                <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute h-[60%] group-hover:h-[90%] rounded-bl-lg border-l-2 border-b-2 left-0 bottom-0"></span>
                <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute h-[20%] rounded-br-lg border-r-2 border-b-2 right-0 bottom-0"></span>
              </Link>
              {/* <Button
              asChild
              size="lg"
              className="group px-8 py-6 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:scale-105 text-md"
            >
              <Link to="/contact" className="flex items-center gap-2">
                Request More Information
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button> */}
            </FadeInUp>
          </div>
        </div>
      </section>

      <h2 className="text-3xl md:text-4xl text-center mt-30 font-bold text-primary mb-20">
        TASNIME BUSINESS CENTER
      </h2>
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-10 -mt-10">
        <div className="flex flex-col lg:flex-row gap-12 items-start w-full max-w-6xl">
          {/* Left Side - Existing Text */}
          <FadeInUp delay={0.2} className="flex-1 space-y-6">
            <p className="text-black text-lg leading-relaxed font-semibold">
              Le centre d'affaires TASNIME est composé de 72 plateaux bureaux
              avec des surfaces allant de 56 m2 à 126 m2 offrant une large
              fourchette de superficies qui s'adaptent aux différents besoins et
              budgets.
            </p>

            <p className="text-black text-lg leading-relaxed font-semibold">
              Les plateaux bureaux sont dotés de finitions raffinées et de tous
              les équipements nécessaires au bon déroulement des activités
              professionnelles (climatisation centralisée, connexions
              électriques et informatiques, ....)
            </p>
            <p className="text-black text-lg leading-relaxed font-semibold">
              Le centre d'affaires Tasnime est conçue selon une architecture
              sobre et moderne pensée autour des valeurs de qualité et de
              développement durable. La construction du projet a été réalisée
              avec des matériaux durables alliant confort et efficacité
              énergétique avec un double vitrage épais à faible émissivité
              thermique isolés par gaz d'argon, structures en dalles pleines
              assurant une bonne inertie thermique, portes avec isolation
              phonique et thermique, éclairage LED, etc
            </p>
          </FadeInUp>

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
                  <img src={A7409562} alt="Transportation" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={A7409473} alt="Transportation" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={A7409558} alt="Transportation" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={A7409515} alt="Transportation" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={A7409545} alt="Transportation" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={A7409538} alt="Transportation" />
                </SwiperSlide>
              </Swiper>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
