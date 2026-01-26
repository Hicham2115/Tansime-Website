import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, MailOpen, MapPin } from "lucide-react";
import HeroPic from "@/assets/Imgs/RUR04229.jpg";
import { motion } from "motion/react";
import FadeInUp from "@/components/FadeInUp";
import img1 from "@/assets/Imgs/A7409547.JPG";
import img2 from "@/assets/Imgs/A7409553.JPG";
import img3 from "@/assets/Imgs/A7409576.jpg";
import ScaleIn from "@/components/ScaleIn";

export default function Hero() {
  const text =
    "Le centre d'affaires et résidences Tasnime est un complexe immobilier premium standing situé au quartier prisé de Marrakech Al Izdihar à 10 min du centre ville proche de l'aéroport et des accès de l'autoroute Casablanca Agadir . Le projet Tasnime vous offre un cadre de vie exceptionnel conçu selon les valeurs  de développement durable,  qualité, innovation et modernité.";
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
  const handleScroll = () => {
    window.scrollBy({
      top: 4900,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover -mt-20 bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${HeroPic})` }}
        ></div>
        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="container relative z-10 px-4 md:px-6 py-20">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Badge */}
            <FadeInUp className="flex justify-center -mt-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
                <MapPin className="w-4 h-4 text-[#b1cc4b]" />
                <span className="text-sm font-medium text-white">
                  Marrakech, Maroc
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
              TASNIME votre adresse d'exception au cœur <br />
              <span className="text-transparent bg-clip-text bg-[#b1cc4b]">
                de Marrakech
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
                className="w-[260px] h-[56px] whitespace-nowrap py-4 px-8 flex gap-3 text-white font-bold text-md rounded-md shadow-lg transition-transform transform bg-transparent border-2 border-white hover:scale-105 hover:border-primary cursor-pointer hover:shadow-primary/50 hover:shadow-2xl focus:outline-none"
                id="startButton"
                onClick={handleScroll}
              >
                Découvrir nos Projets
                <ExternalLink className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <Link
                to="/contact"
                className="w-[260px] h-[56px] relative cursor-pointer py-4 px-4 text-center font-barlow inline-flex justify-center items-center text-base uppercase text-white rounded-lg border-solid transition-transform duration-300 ease-in-out group outline-offset-4 focus:outline focus:outline-2 focus:outline-white focus:outline-offset-4 overflow-hidden hover:scale-105 active:scale-95"
              >
                <span className="relative z-20 flex font-bold items-center gap-2">
                  Nous Contacter
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
      <h2 className="text-3xl md:text-4xl text-center mt-30 font-bold text-primary">
        PRÉAMBULE
      </h2>
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-10 mt-10">
        <div className="flex flex-col lg:flex-row gap-12 items-start w-full max-w-6xl">
          {/* Left Side - Existing Text */}
          <FadeInUp delay={0.2} className="flex-1 space-y-6">
            <p className="text-black text-lg leading-relaxed font-semibold">
              Au cœur de la ville de Marrakech, Tasnime immobilier acteur de
              référence dans le domaine de l'immobilier lance deux projets
              exceptionnels résolument pensés dans une architecture
              contemporaine et érigés autour des valeurs de développement
              durable, qualité, innovation, et modernité :
            </p>

            <p className="text-black text-lg leading-relaxed font-semibold">
              <span className="text-primary font-bold">
                Le centre d'affaires TASNIME:
              </span>{" "}
              nouvelle adresse du business à Marrakech, ce projet de haut
              standing offre une grande flexibilité avec des plateaux bureaux
              Open Space de différentes superficies qui s'adaptent à tous les
              besoins.
            </p>

            <p className="text-black text-lg leading-relaxed font-semibold">
              <span className="text-primary font-bold">
                Les résidences TASNIME:
              </span>{" "}
              projet de résidences prémium composé de studios, appartements F3,
              F4 et duplexes érigées en complexe intégré sécurisé avec piscines
              et jardins.
            </p>

            <p className="text-black text-lg leading-relaxed font-semibold">
              Idéalement situés au croisement de deux boulevard structurants de
              la ville ocre (Bd de Safi et Av Charaf), les deux projets
              disposent d'un emplacement idéal avec une meilleure accessibilité
              (10 min du centre ville, 5 min de …
            </p>
          </FadeInUp>

          {/* Right Side - New Text */}
          <FadeInUp delay={0.4} className="flex-1 space-y-6">
            <p className="text-black text-lg leading-relaxed font-semibold">
              l'accès autoroute Casa-Agadir, 5 min de la future gare TGV)
            </p>

            <p className="text-black text-lg leading-relaxed font-semibold">
              Les deux projets se distinguent par la durabilité des matériaux de
              construction, la qualité des finitions et le caractère smart des
              équipements. L'efficacité énergétique est au cœur de la conception
              architecturale et technique du projet avec plusieurs dispositions
              constructives notamment :
            </p>

            <p className="text-black text-lg leading-relaxed font-semibold">
              • Isolation thermique et phonique des bureaux avec double vitrages
              à faible émissivité thermique isolés par gaz d'argon Isolation
              thermique et phonique des appartements avec double vitrage au
              niveau des façades. <br />• Structures en dalle pleine assurant
              une bonne inertie thermique et isolation phonique. <br />•
              Climatisation INVERTER des appartements et gainable au niveau des
              bureaux. <br />• Eclairage LED. Etc...
            </p>
          </FadeInUp>
        </div>
      </section>
      {/* Image Grid */}
      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-10">
        {[img1, img2, img3].map((img, idx) => (
          <ScaleIn
            key={idx}
            delay={0.6 + idx * 0.2}
            className="group relative aspect-[5/3] mx-4 overflow-hidden rounded-2xl border border-white/10 shadow-2xl"
          >
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300 z-10" />
            <img
              src={img}
              alt={`Tasnime Residence View ${idx + 1}`}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
            />
          </ScaleIn>
        ))}
      </div> */}
      <div className="flex justify-center mt-10">
        <Button
          asChild
          className="group flex items-center gap-2 px-5 py-3 bg-primary text-white font-semibold rounded-md shadow-lg transition-all duration-300 hover:bg-primary/90 hover:shadow-primary/50 hover:scale-105"
          size="md"
        >
          <Link to="/gallery" className="flex items-center gap-2">
            Voir Notre Gallerie
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </>
  );
}
