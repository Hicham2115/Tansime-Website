import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, MailOpen, MapPin } from "lucide-react";
import HeroPic from "@/assets/Imgs/RUR04229.jpg";
import { motion } from "motion/react";
import FadeInUp from "@/components/FadeInUp";
import HeroVideo from "../../assets/VID TASNIME - SITEWEB 2.mp4";

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
  const words = text.split(" "); // split by space

  return (
    <>
      <section className="relative min-h-[30vh] sm:min-h-[50vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        {/* <div
          className="absolute inset-0 bg-cover -mt-20 bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${HeroPic})` }}
        ></div> */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={HeroVideo}
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="container relative z-10 px-4 md:px-6 py-20">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Badge */}
            <FadeInUp className="flex justify-center -mt-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
                <MapPin className="w-4 h-4 text-[#daff54]" />
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
              className="text-center font-bold tracking-tight drop-shadow-lg"
            >
              {/* Big first line */}
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-transparent bg-clip-text bg-[#daff54]">
                TASNIME
              </span>

              {/* Smaller second line */}
              <span className="block text-lg sm:text-xl md:text-2xl text-white mt-2">
                votre adresse d'exception au cœur de Marrakech
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={container}
              initial="hidden"
              animate="visible"
              className="text-sm sm:text-base lg:text-lg leading-snug sm:leading-relaxed text-white max-w-3xl mx-auto drop-shadow-md"
            >
              {words.map((word, index) => (
                <motion.span
                  key={index}
                  variants={child}
                  className="inline-block mr-1"
                >
                  {word}
                </motion.span>
              ))}
            </motion.p>

            {/* CTA Buttons */}
            <FadeInUp
              delay={0.3}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              {/* Centre D'affaire Button */}
              <Link
                to="/business-center"
                className="w-[220px] h-[56px] flex justify-center items-center text-white font-bold text-md uppercase rounded-md border-2 border-white bg-transparent shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-primary/50 focus:outline-none cursor-pointer"
              >
                Centre D'affaire
                <ExternalLink className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 ml-3" />
              </Link>

              {/* Residences Button */}
              <Link
                to="/residences"
                className="w-[220px] h-[56px] flex justify-center items-center text-white font-bold text-md uppercase rounded-md border-2 border-white bg-transparent shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-primary/50 focus:outline-none cursor-pointer"
              >
                Residences
                <ExternalLink className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 ml-3" />
              </Link>

              {/* Contact Button with Icon */}
              <Link
                to="/contact"
                className="w-[220px] h-[56px] relative flex justify-center items-center text-white font-bold text-md uppercase rounded-md border-2 border-white bg-transparent shadow-lg overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-primary/50 focus:outline-none cursor-pointer group"
              >
                <span className="flex items-center gap-2 z-20">
                  Nous Contacter
                  <MailOpen className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>

                {/* Animated shine effect */}
                <span className="absolute left-[-75%] top-0 h-full w-[50%] bg-white/20 rotate-12 z-10 blur-lg group-hover:left-[125%] transition-all duration-1000 ease-in-out"></span>

                {/* Borders */}
                {/* <span className="absolute top-0 left-0 w-1/2 h-[20%] border-t-2 border-l-2 border-[#D4EDF9] rounded-tl-lg drop-shadow-3xl transition-all duration-300"></span>
                <span className="absolute top-0 right-0 w-1/2 h-[60%] border-t-2 border-r-2 border-[#D4EDF9] rounded-tr-lg drop-shadow-3xl group-hover:h-[90%] transition-all duration-300"></span>
                <span className="absolute bottom-0 left-0 w-1/2 h-[60%] border-b-2 border-l-2 border-[#D4EDF9] rounded-bl-lg drop-shadow-3xl group-hover:h-[90%] transition-all duration-300"></span>
                <span className="absolute bottom-0 right-0 w-1/2 h-[20%] border-b-2 border-r-2 border-[#D4EDF9] rounded-br-lg drop-shadow-3xl transition-all duration-300"></span> */}
              </Link>
            </FadeInUp>
          </div>
        </div>
      </section>
      <h2 className="text-3xl md:text-4xl text-center mt-10 md:mt-14 lg:mt-16 font-bold text-primary">
        PRÉAMBULE
      </h2>

      <section className="relative flex items-center justify-center overflow-hidden px-10 py-16 lg:py-20">
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
              Au cœur de la ville de Marrakech, Tasnime immobilier acteur de
              référence dans le domaine de l'immobilier lance deux projets
              exceptionnels résolument pensés dans une architecture
              contemporaine et érigés autour des valeurs de développement
              durable, qualité, innovation, et modernité :
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
              <span className="text-primary font-bold">
                Le centre d'affaires TASNIME:
              </span>{" "}
              nouvelle adresse du business à Marrakech, ce projet de haut
              standing offre une grande flexibilité avec des plateaux bureaux
              Open Space de différentes superficies qui s'adaptent à tous les
              besoins.
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
              <span className="text-primary font-bold">
                Les résidences TASNIME:
              </span>{" "}
              projet de résidences prémium composé de studios, appartements F3,
              F4 et duplexes érigées en complexe intégré sécurisé avec piscines
              et jardins.
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
              Idéalement situés au croisement de deux boulevard structurants de
              la ville ocre (Bd de Safi et Av Charaf), les deux projets
              disposent d'un emplacement idéal avec une meilleure accessibilité
              (10 min du centre ville, 5 min de …
            </p>
          </FadeInUp>

          {/* Right Side - New Text */}
          <FadeInUp delay={0.4} className="flex-1 space-y-6">
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
              l'accès autoroute Casa-Agadir, 5 min de la future gare TGV)
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
              Les deux projets se distinguent par la durabilité des matériaux de
              construction, la qualité des finitions et le caractère smart des
              équipements. L'efficacité énergétique est au cœur de la conception
              architecturale et technique du projet avec plusieurs dispositions
              constructives notamment :
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
      <div className="flex justify-center mt-8 lg:mt-12">
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
      <h2 className="text-3xl md:text-4xl text-center mt-10 md:mt-14 lg:mt-16 font-bold text-primary">
        Centre D'Affaires
      </h2>
      <section className="relative flex items-center justify-center overflow-hidden px-10 py-16 lg:py-20">
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
              Le centre d'affaires TASNIME est composé de 72 plateaux bureaux
              avec des surfaces allant de 56 m2 à 126 m2 offrant une large
              fourchette de superficies qui s'adaptent aux différents besoins et
              budgets.
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
              Les plateaux bureaux sont dotés de finitions raffinées et de tous
              les équipements nécessaires au bon déroulement des activités
              professionnelles (climatisation centralisée, connexions
              électriques et informatiques, ....)
            </p>
          </FadeInUp>
          {/* Right Side - New Text */}
          <FadeInUp delay={0.4} className="flex-1 space-y-6">
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
        </div>
      </section>

      <h2 className="text-3xl md:text-4xl text-center mt-10 md:mt-14 lg:mt-16 font-bold text-primary">
        Residences
      </h2>
      <section className="relative flex flex-col items-center justify-center overflow-hidden px-10 py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row gap-12 items-start w-full max-w-6xl">
          {/* Left Side - Existing Text */}
          <FadeInUp delay={0.2} className="flex-1 space-y-6">
            <p className="text-sm sm:text-base lg:text-lg leading-snug sm:leading-relaxed text-gray-800 font-medium">
              Les résidences TASNIME sont des résidences sécurisées conçues
              selon une architecture sobre et raffinée offrant une expérience de
              vie exceptionnelle. Ces résidences Premium sont animées par un jeu
              de jardins et piscines constituant une symphonie d'élégance et de
              confort. Les résidences disposent de piscines communes pour
              adultes et enfants en plus des piscines privatives pour certains
              duplexes.
            </p>

            <p className="text-primary text-lg leading-relaxed font-bold">
              Elles sont composées de différents typologies d'habitation à
              savoir:
            </p>
            <p className="text-sm sm:text-base lg:text-lg leading-snug sm:leading-relaxed text-gray-800 font-medium">
              • Appartements F2 ou studios (1 chambre, salon et cuisine à
              l'américaine).
              <br />• Appartements F2 ou studios (1 chambre, salon et cuisine à
              l'américaine).
              <br /> Appartements F3 (2 chambres, salon et cuisine) <br />•
              Appartements F4 (3 chambres, salon et cuisine). <br />• Duplexes
              avec 2 salons, 3 ou 4 chambres à coucher.
              <br />
              <br />
              Les résidences Tasnime se distinguent par la convivialité des
              espaces, la durabilité des matériaux de construction ainsi que la
              qualité des finitions.
              <br />
              <br />
              Le projet prévoit la réalisation de plus de 40 magasins et
              showrooms en RDC pour l'animation commerciale des résidences dont
              un supermarché (MARJANE market).
            </p>
          </FadeInUp>

          <FadeInUp delay={0.2} className="flex-1 space-y-6">
            <p className="text-sm sm:text-base lg:text-lg leading-snug sm:leading-relaxed text-gray-800 font-medium">
              Les résidences sont conçues selon les principes de développement
              durable et sont dotées des finitions de qualité supérieure. Elles
              offrent une large variété de superficies qui s'adaptent aux
              différents besoins et budgets:
            </p>

            <p className="text-sm sm:text-base lg:text-lg leading-snug sm:leading-relaxed text-primary font-bold">
              De 36 M2 à 55 M2 pour les studios <br />
              De 68 M2 à 85 M2 pour les appartements F3 <br />
              De 108 à 112 M2 pour les appartements F4 <br />
              De 96 à 186 M2 pour les duplexes
            </p>
            <p className="text-sm sm:text-base lg:text-lg leading-snug sm:leading-relaxed text-black font-semibold">
              La construction du projet est mise en œuvre selon les principes de
              développement durable avec l'utilisation de matériaux et
              équipements de qualité supérieure:
            </p>

            <p className="text-sm sm:text-base lg:text-lg leading-snug sm:leading-relaxed text-primary font-bold">
              • Isolation thermique et phonique avec double vitrage au niveau
              des façades. <br /> • Structures en dalle pleine assurant une
              bonne inertie thermique et isolation phonique. Climatisation
              INVERTER. <br />• Eclairage LED. <br />• Detecteurs de présence
              dans les circulations communes (escaliers et couloirs). <br />•
              Ascenseurs de marque international KONE de capacité.
            </p>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
