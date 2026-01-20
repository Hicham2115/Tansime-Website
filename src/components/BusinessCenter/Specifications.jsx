import { CheckCircle2 } from "lucide-react";
import FadeInUp from "@/components/FadeInUp";

export default function Specifications() {
  return (
    <section className="py-20 relative">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <FadeInUp className="text-center space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary">
              Technical Specifications
            </h2>
          </FadeInUp>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Double-glazed facades for optimal insulation",
              "INVERTER air conditioning systems",
              "LED lighting throughout",
              "Smart building management system",
              "High-speed fiber optic connectivity",
              "Advanced security systems",
              "Sustainable construction materials",
              "Accessible design for all abilities",
            ].map((spec, index) => (
              <FadeInUp
                key={index}
                delay={index * 0.05}
                className="flex items-start gap-3 p-4 rounded-xl bg-primary/90 backdrop-blur-sm border border-white/10 hover:border-primary transition-all hover:scale-105 transform cursor-pointer"
              >
                <CheckCircle2 className="w-6 h-6 text-white/80 shrink-0 mt-0.5" />
                <span className="text-white font-medium">{spec}</span>
              </FadeInUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
