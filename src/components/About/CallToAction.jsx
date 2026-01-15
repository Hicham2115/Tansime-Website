import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import FadeInUp from "@/components/FadeInUp";

export default function CallToAction() {
  return (
    <section className="py-20 relative overflow-hidden">
      <FadeInUp className="container relative px-4 md:px-6 bg-card/50 backdrop-blur-sm p-6 w-[70%] mx-auto rounded-lg border border-white/10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-3xl font-bold text-white">
            Ready to Learn More?
          </h2>
          <p className="text-lg text-white/70">
            Discover how Tasnime Immobilier can help you find your perfect space
            in Marrakech
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
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
              <Link to="/residences">View Projects</Link>
            </Button>
          </div>
        </div>
      </FadeInUp>
    </section>
  );
}
