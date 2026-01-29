import { Link } from "react-router-dom";
import { Images, SendHorizontal } from "lucide-react";
import FadeInUp from "@/components/FadeInUp";

export default function CallToAction() {
  return (
    <section className="py-12 sm:py-20 relative overflow-hidden">
      <FadeInUp
        className="
          container
          relative
          px-4
          md:px-6
          bg-primary/90
          backdrop-blur-sm
          p-6
          sm:p-8
          w-full
          sm:w-[90%]
          lg:w-[70%]
          mx-auto
          rounded-xl
          border
          border-white/10
        "
      >
        <div className="max-w-3xl mx-auto text-center space-y-6">
          {/* Title */}
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Votre Maison de Rêves Vous Attend
          </h2>

          {/* Paragraph */}
          <p
            className="
              text-sm
              sm:text-base
              lg:text-lg
              leading-snug
              sm:leading-relaxed
              text-white/90
            "
          >
            Planifiez une visite aujourd&apos;hui et expérimentez le style de
            vie des Résidences Tasnime en personne.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="
                           w-full
                           sm:w-[260px]
                           h-[52px]
                           sm:h-[56px]
                           relative
                           cursor-pointer
                           py-4
                           px-4
                           text-center
                           font-barlow
                           inline-flex
                           justify-center
                           items-center
                           text-base
                           uppercase
                           text-white
                           rounded-lg
                           border-solid
                           transition-transform
                           duration-300
                           ease-in-out
                           group
                           outline-offset-4
                           focus:outline
                           focus:outline-2
                           focus:outline-white
                           focus:outline-offset-4
                           overflow-hidden
                           hover:scale-105
                           active:scale-95
                         "
            >
              <span className="relative z-20 flex font-bold items-center gap-2">
                Contact Us
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  <SendHorizontal className="w-5 h-5" />
                </span>
              </span>

              {/* Shine effect */}
              <span className="absolute left-[-75%] top-0 h-full w-[50%] bg-white/20 rotate-12 z-10 blur-lg group-hover:left-[125%] transition-all duration-1000 ease-in-out"></span>

              {/* Border animations */}
              <span className="w-1/2 transition-all duration-300 block border-white/60 absolute h-[20%] rounded-tl-lg border-l-2 border-t-2 top-0 left-0"></span>
              <span className="w-1/2 transition-all duration-300 block border-white/60 absolute group-hover:h-[90%] h-[60%] rounded-tr-lg border-r-2 border-t-2 top-0 right-0"></span>
              <span className="w-1/2 transition-all duration-300 block border-white/60 absolute h-[60%] group-hover:h-[90%] rounded-bl-lg border-l-2 border-b-2 left-0 bottom-0"></span>
              <span className="w-1/2 transition-all duration-300 block border-white/60 absolute h-[20%] rounded-br-lg border-r-2 border-b-2 right-0 bottom-0"></span>
            </Link>
            <Link
              to="/gallery"
              className="
                w-full
                sm:w-[260px]
                h-[52px]
                sm:h-[56px]
                relative
                cursor-pointer
                py-4
                px-4
                text-center
                font-barlow
                inline-flex
                justify-center
                items-center
                text-base
                uppercase
                text-white
                rounded-lg
                border-solid
                transition-transform
                duration-300
                ease-in-out
                group
                outline-offset-4
                focus:outline
                focus:outline-2
                focus:outline-white
                focus:outline-offset-4
                overflow-hidden
                hover:scale-105
                active:scale-95
              "
            >
              <span className="relative z-20 flex font-bold items-center gap-2">
                Voir la Galerie
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  <Images className="w-5 h-5" />
                </span>
              </span>

              {/* Shine effect */}
              <span className="absolute left-[-75%] top-0 h-full w-[50%] bg-white/20 rotate-12 z-10 blur-lg group-hover:left-[125%] transition-all duration-1000 ease-in-out"></span>

              {/* Border animations */}
              <span className="w-1/2 transition-all duration-300 block border-white/60 absolute h-[20%] rounded-tl-lg border-l-2 border-t-2 top-0 left-0"></span>
              <span className="w-1/2 transition-all duration-300 block border-white/60 absolute group-hover:h-[90%] h-[60%] rounded-tr-lg border-r-2 border-t-2 top-0 right-0"></span>
              <span className="w-1/2 transition-all duration-300 block border-white/60 absolute h-[60%] group-hover:h-[90%] rounded-bl-lg border-l-2 border-b-2 left-0 bottom-0"></span>
              <span className="w-1/2 transition-all duration-300 block border-white/60 absolute h-[20%] rounded-br-lg border-r-2 border-b-2 right-0 bottom-0"></span>
            </Link>
          </div>
        </div>
      </FadeInUp>
    </section>
  );
}
