import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Images } from "lucide-react";
import FadeInUp from "@/components/FadeInUp";

export default function CallToAction() {
  return (
    <section className="py-20 relative overflow-hidden">
      <FadeInUp className="container relative px-4 md:px-6 bg-card/50 backdrop-blur-sm p-6 w-[70%] mx-auto rounded-lg border border-white/10">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-3xl font-bold text-white">
            Ready to Elevate Your Business?
          </h2>
          <p className="text-lg text-white/70">
            Contact us today to schedule a visit and discover how Tasnime
            Business Center can transform your workspace.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <button
              className="w-[260px] h-[56px] py-4 px-8 flex gap-3 text-white font-bold text-md rounded-md shadow-lg transition-transform transform bg-transparent border-2 border-white hover:scale-105 hover:border-primary cursor-pointer hover:shadow-primary/50 hover:shadow-2xl focus:outline-none"
              id="startButton"
            >
              Contact Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button> */}

            <Link
              to="/gallery"
              className="w-[260px] h-[56px] relative cursor-pointer py-4 px-4 text-center font-barlow inline-flex justify-center items-center text-base uppercase text-white rounded-lg border-solid transition-transform duration-300 ease-in-out group outline-offset-4 focus:outline focus:outline-2 focus:outline-white focus:outline-offset-4 overflow-hidden hover:scale-105 active:scale-95"
            >
              <span className="relative z-20 flex font-bold items-center gap-2">
                View Gallery
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  <Images className="w-5 h-5" />
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
              className="flex justify-center items-center gap-2 px-8 py-6 bg-primary text-white rounded-xl hover:bg-primary/80 transition-all duration-300 shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:scale-105 text-md"
            >
              <Link to="/contact">
                Contact Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              className="flex justify-center items-center gap-2 px-6 py-6 border-2 border-primary hover:bg-white hover:scale-105 text-black bg-white rounded-xl transition-all duration-300 text-md"
            >
              <Link to="/gallery">View Gallery</Link>
            </Button> */}
          </div>
        </div>
      </FadeInUp>
    </section>
  );
}
