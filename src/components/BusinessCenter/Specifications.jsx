import { CheckCircle2 } from "lucide-react";
import FadeInUp from "@/components/FadeInUp";

export default function Specifications() {
  return (
    <section className="py-20 relative">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <FadeInUp className="text-center space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary">
              Spécifications Techniques
            </h2>
          </FadeInUp>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Façades à double vitrage pour une isolation optimale",
              "Systèmes de climatisation INVERTER",
              "Éclairage LED partout",
              "Système de gestion de bâtiment intelligent",
              "Connectivité fibre optique haute vitesse",
              "Systèmes de sécurité avancés",
              "Matériaux de construction durables",
              "Conception accessible pour tous les besoins",
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
