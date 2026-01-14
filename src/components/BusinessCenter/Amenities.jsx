import { Users, Coffee, Monitor, Briefcase } from "lucide-react";
import img1 from "@/assets/Imgs/SALON 1.jpg";
import img2 from "@/assets/Imgs/SAM-SALON.jpg";
import img3 from "@/assets/Imgs/CH-2.jpg";
import img4 from "@/assets/Imgs/SAM.jpg";

export default function Amenities() {
  const amenities = [
    {
      icon: Users,
      title: "Conference Rooms",
      description:
        "Fully equipped meeting spaces for presentations and client briefs.",
    },
    {
      icon: Coffee,
      title: "Lounge Areas",
      description:
        "Comfortable break zones for relaxation and informal networking.",
    },
    {
      icon: Monitor,
      title: "IT Support",
      description:
        "On-site technical assistance to ensure smooth daily operations.",
    },
    {
      icon: Briefcase,
      title: "Reception Services",
      description: "Professional front-desk service to welcome your guests.",
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            World-Class Amenities
          </h2>
          <p className="text-lg text-[#f5c386] max-w-2xl mx-auto">
            Designed for convenience, comfort, and productivity.
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-20">
          {amenities.map((item, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-white/70 border border-white/10 hover:border-primary/30 hover:shadow-lg transition-all duration-300 hover:scale-105 transform cursor-pointer"
            >
              <div className="w-12 h-12 mx-auto rounded-full bg-primary shadow-md flex items-center justify-center mb-4 text-white">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-black mb-2">
                {item.title}
              </h3>
              <p className="text-black text-sm">{item.description}</p>
            </div>
          ))}
        </div>

        {/* New Content & Image Grid Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Content Side */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white">
              Experience the Perfect Balance of Work and Life
            </h3>
            <p className="text-white/80 leading-relaxed text-lg">
              Our business center offers more than just office space; it
              provides a holistic environment tailored for success. Enjoy
              premium facilities that cater to your professional needs while
              offering spaces to unwind and recharge.
            </p>
            <p className="text-white/80 leading-relaxed text-lg">
              From state-of-the-art conference rooms to relaxing lounge areas,
              every detail is designed to enhance your workday.
            </p>
          </div>

          {/* Image Grid Side */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden h-48 border border-white/10 shadow-lg group hover:scale-[1.02] transition-transform duration-300">
                <img
                  src={img1}
                  alt="Business Center Interior"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="rounded-2xl overflow-hidden h-64 border border-white/10 shadow-lg group hover:scale-[1.02] transition-transform duration-300">
                <img
                  src={img3}
                  alt="Lounge Area"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="rounded-2xl overflow-hidden h-64 border border-white/10 shadow-lg group hover:scale-[1.02] transition-transform duration-300">
                <img
                  src={img2}
                  alt="Meeting Room"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="rounded-2xl overflow-hidden h-48 border border-white/10 shadow-lg group hover:scale-[1.02] transition-transform duration-300">
                <img
                  src={img4}
                  alt="Office Space"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
