import { CheckCircle2 } from "lucide-react";

export default function SustainableConstruction() {
  return (
    <section className="py-20 relative">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Sustainable Construction
            </h2>
            <p className="text-lg text-white">
              Built with the environment and your comfort in mind
            </p>
          </div>

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
              <div
                key={index}
                className="flex items-start gap-3 p-4 rounded-xl bg-white/60 border border-primary hover:border-primary transition-all hover:scale-105 transform cursor-pointer"
              >
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-black font-medium">{spec}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
