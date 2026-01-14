import { Shield, Waves, Trees, Zap, Wind, Sparkles } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Shield,
      title: "Security & Privacy",
      description: "Gated complex with 24/7 controlled access and surveillance",
    },
    {
      icon: Waves,
      title: "Luxury Pools",
      description:
        "Adult and children's communal pools, plus private pools in select duplexes",
    },
    {
      icon: Trees,
      title: "Landscaped Gardens",
      description:
        "Beautifully designed green spaces for relaxation and recreation",
    },
    {
      icon: Zap,
      title: "Energy Efficient",
      description: "INVERTER air conditioning and LED lighting throughout",
    },
    {
      icon: Wind,
      title: "Superior Insulation",
      description: "Thermal and acoustic insulation with double-glazed facades",
    },
    {
      icon: Sparkles,
      title: "Premium Finishes",
      description: "High-quality materials and elegant design in every detail",
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Luxury Amenities
          </h2>
          <p className="text-lg text-[#f1c692] max-w-2xl mx-auto">
            Every detail designed for your comfort and peace of mind
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-white/70 border border-gray-200 shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:scale-105 transform cursor-pointer"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">
                {feature.title}
              </h3>
              <p className="text-black leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
