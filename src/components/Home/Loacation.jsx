import { Quote, Star } from "lucide-react";
import FadeInUp from "@/components/FadeInUp";

export default function Loacation() {
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
            Situation Du Project
          </h2>
          <p
            className=" text-sm
  sm:text-base
  lg:text-lg
  leading-snug
  sm:leading-relaxed text-black max-w-2xl mx-auto"
          >
            Le projet TASNIME estidéalement situé au croisement de deux
            boulevard structurants de la ville ocre (Bd de Safi et Av Charaf),
            les deux projets disposent d'un emplacement idéal avec une meilleure
            accessibilité (10 min du centre ville, 5 min de l'accès autoroute
            Casa-Agadir,5 min de la future gare TGV)
          </p>
        </FadeInUp>

        {/* Map */}
        <div className="rounded-2xl overflow-hidden border border-white/10 shadow-md aspect-video w-[70%] mx-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d3395.9611727058036!2d-8.029307!3d31.662281999999998!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDM5JzQzLjIiTiA4wrAwMSc0OS40Ilc!5e0!3m2!1sen!2sus!4v1768611899120!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
