import { Users, Coffee, Monitor, Briefcase } from "lucide-react";
import img1 from "@/assets/Imgs/SALON 1.jpg";
import img2 from "@/assets/Imgs/SAM-SALON.jpg";
import img3 from "@/assets/Imgs/CH-2.jpg";
import img4 from "@/assets/Imgs/SAM.jpg";
import FadeInUp from "@/components/FadeInUp";
import ScaleIn from "@/components/ScaleIn";

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
        <FadeInUp className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            World-Class Amenities
          </h2>
          <p className="text-lg text-black max-w-2xl mx-auto">
            Designed for convenience, comfort, and productivity.
          </p>
        </FadeInUp>

        {/* Amenities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-20">
          {amenities.map((item, index) => (
            <FadeInUp
              key={index}
              delay={index * 0.1}
              className="text-center p-6 rounded-2xl bg-primary/90 backdrop-blur-sm border border-white/10 hover:border-primary/30 hover:shadow-lg transition-all duration-300 hover:scale-105 transform cursor-pointer"
            >
              <div className="w-12 h-12 mx-auto rounded-full bg-primary shadow-md flex items-center justify-center mb-4 text-white">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-white text-sm">{item.description}</p>
            </FadeInUp>
          ))}
        </div>

        {/* New Content & Image Grid Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Content Side */}
          <FadeInUp className="space-y-6">
            <h3 className="text-3xl font-bold text-primary">
              Experience the Perfect Balance of Work and Life
            </h3>
            <p className="text-black font-semibold leading-relaxed text-lg">
              Our business center offers more than just office space; it
              provides a holistic environment tailored for success. Enjoy
              premium facilities that cater to your professional needs while
              offering spaces to unwind and recharge.
            </p>
            <p className="text-black font-semibold leading-relaxed text-lg">
              From state-of-the-art conference rooms to relaxing lounge areas,
              every detail is designed to enhance your workday.
            </p>
          </FadeInUp>

          {/* Image Grid Side */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <ScaleIn
                delay={0.2}
                className="rounded-2xl overflow-hidden h-48 border border-white/10 shadow-lg group hover:scale-[1.02] transition-transform duration-300"
              >
                <img
                  src={img1}
                  alt="Business Center Interior"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </ScaleIn>
              <ScaleIn
                delay={0.3}
                className="rounded-2xl overflow-hidden h-64 border border-white/10 shadow-lg group hover:scale-[1.02] transition-transform duration-300"
              >
                <img
                  src={img3}
                  alt="Lounge Area"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </ScaleIn>
            </div>
            <div className="space-y-4 pt-8">
              <ScaleIn
                delay={0.4}
                className="rounded-2xl overflow-hidden h-64 border border-white/10 shadow-lg group hover:scale-[1.02] transition-transform duration-300"
              >
                <img
                  src={img2}
                  alt="Meeting Room"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </ScaleIn>
              <ScaleIn
                delay={0.5}
                className="rounded-2xl overflow-hidden h-48 border border-white/10 shadow-lg group hover:scale-[1.02] transition-transform duration-300"
              >
                <img
                  src={img4}
                  alt="Office Space"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </ScaleIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
