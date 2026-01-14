import { MapPin, Clock, Car } from "lucide-react";

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
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Strategic Location
            </h2>
            <p className="text-lg text-white">
              Perfectly positioned for business success
            </p>
          </div>

          <div className="space-y-6">
            {locationBenefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-6 rounded-2xl bg-white/60 border border-white/10 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 transform cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-lg text-black font-medium">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
