import { Lightbulb, Award, Leaf, Sparkles } from "lucide-react";

export default function CoreValues() {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "Pioneering modern architectural solutions that set new standards in real estate development",
    },
    {
      icon: Award,
      title: "Quality",
      description:
        "Uncompromising commitment to superior craftsmanship and premium materials",
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description:
        "Eco-friendly practices and energy-efficient designs for a better tomorrow",
    },
    {
      icon: Sparkles,
      title: "Modernity",
      description:
        "Contemporary designs that blend aesthetics with functionality",
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container relative px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Our Core Values
          </h2>
          <p className="text-lg text-[#f1c692] max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-white/70 border border-gray-200 shadow-sm hover:shadow-xl hover:shadow-primary/10 text-center transition-all duration-300 hover:scale-105 transform cursor-pointer"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 mx-auto group-hover:bg-primary/20 transition-colors group-hover:scale-110 duration-300">
                <value.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3 group-hover:text-primary transition-colors">
                {value.title}
              </h3>
              <p className="text-black/80 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
