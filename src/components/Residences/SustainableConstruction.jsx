import { CheckCircle2 } from "lucide-react";
import FadeInUp from "@/components/FadeInUp";

export default function SustainableConstruction() {
  return (
    <section className="py-20 relative">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <FadeInUp className="text-center space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Sustainable Construction
            </h2>
            <p className="text-lg text-white">
              Built with the environment and your comfort in mind
            </p>
          </FadeInUp>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Thermal and acoustic insulation",
              "Double-glazed facades",
              "LED lighting throughout",
              "INVERTER air conditioning",
              "Eco-friendly materials",
              "Energy-efficient design",
              "Water conservation systems",
              "Green building standards",
            ].map((spec, index) => (
              <FadeInUp
                key={index}
                delay={index * 0.05}
                className="flex items-start gap-3 p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-white/10 hover:border-primary transition-all hover:scale-105 transform cursor-pointer"
              >
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <span className="text-white font-medium">{spec}</span>
              </FadeInUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
