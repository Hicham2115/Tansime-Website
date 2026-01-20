import { MapPin, Clock, Car } from "lucide-react";
import FadeInUp from "@/components/FadeInUp";

export default function Location() {
  const locationBenefits = [
    {
      icon: MapPin,
      text: "Prime location near Safi Boulevard and Avenue Charaf",
    },
    { icon: Clock, text: "10 minutes from downtown Marrakech" },
    { icon: Car, text: "5 minutes from highway and future TGV station" },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container relative px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <FadeInUp className="text-center space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary">
              Strategic Location
            </h2>
            <p className="text-lg text-black">
              Perfectly positioned for business success
            </p>
          </FadeInUp>

          <div className="space-y-6">
            {locationBenefits.map((benefit, index) => (
              <FadeInUp
                key={index}
                delay={index * 0.1}
                className="flex items-center gap-4 p-6 rounded-2xl bg-primary/90 backdrop-blur-sm border border-white/10 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 transform cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/90 flex items-center justify-center shrink-0">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-lg text-white font-medium">{benefit.text}</p>
              </FadeInUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
