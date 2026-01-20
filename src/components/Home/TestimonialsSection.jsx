import { Quote, Star } from "lucide-react";
import FadeInUp from "@/components/FadeInUp";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Ahmed Benali",
      role: "Propriétaire",
      content:
        "Acheter notre maison avec Tasnime Immobilier a été la meilleure décision que nous ayons prise. La qualité de la construction et l'attention aux détails sont incomparables à Marrakech.",
      initials: "AB",
    },
    {
      name: "Sarah Lahlou",
      role: "Propriétaire d'Entreprise",
      content:
        "L'espace de bureau au Centre d'Affaires est parfait pour notre équipe en croissance. Installations modernes, excellent emplacement et gestion professionnelle.",
      initials: "SL",
    },
    {
      name: "Karim Tazi",
      role: "Investisseur",
      content:
        "J'ai inverti dans plusieurs projets avec Tasnime. Leur engagement envers les délais et la qualité me donne une tranquillité d'esprit complète.",
      initials: "KT",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container px-4 md:px-6">
        <FadeInUp className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            Expériences des Clients
          </h2>
          <p className="text-lg text-black max-w-2xl mx-auto">
            N'ayez pas juste notre parole. Voici ce que nos clients et
            partenaires précieux disent de leur expérience avec nous.
          </p>
        </FadeInUp>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <FadeInUp
              key={index}
              delay={index * 0.2}
              className="relative p-8 hover:-translate-y-4 rounded-3xl bg-primary/90 backdrop-blur-sm border border-white/10 hover:border-primary/50 transition-all duration-300 group"
            >
              <Quote className="absolute top-8 right-8 w-10 h-10 text-primary/20 group-hover:text-primary/40 transition-colors" />

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-linear-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold text-lg shadow-lg">
                    {item.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{item.name}</h4>
                    <p className="text-sm text-[#f1c692]">{item.role}</p>
                  </div>
                </div>

                <p className="text-white leading-relaxed italic">
                  "{item.content}"
                </p>

                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-[#f0ba78] fill-[#f0ba78]"
                    />
                  ))}
                </div>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}
