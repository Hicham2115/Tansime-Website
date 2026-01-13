import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Building2,
  Home as HomeIcon,
  Shield,
  Leaf,
  Award,
  MapPin,
} from "lucide-react";
import HeroPic from "@/assets/Imgs/SALON 1.jpg";

function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover -mt-20 bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HeroPic})` }}
      ></div>
      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="container relative z-10 px-4 md:px-6 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm animate-fade-in-up -mt-16 ">
            <MapPin className="w-4 h-4 text-[#f0ba78]" />
            <span className="text-sm font-medium text-white">
              Marrakech, Morocco
            </span>
          </div>

          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white drop-shadow-lg animate-fade-in-up animation-delay-100">
            Discover Luxury Living and{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#328a93] via-[#328a93] to-[#328a93]">
              Business Spaces
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-md animate-fade-in-up animation-delay-200">
            Tasnime Immobilier offers premium residences and high-end business
            centers designed for comfort, innovation, and sustainability in the
            heart of Marrakech.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-300">
            <Button
              asChild
              size="lg"
              className="group relative px-8 py-6 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-2xl shadow-primary/20 hover:shadow-primary/40 hover:scale-105 text-md"
            >
              <Link to="/residences" className="flex items-center gap-2">
                Explore Our Projects
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="px-8 py-6 border border-[#f1c692] rounded-xl bg-transparent hover:bg-transparent hover:text-[#f1c692] transition-all duration-300 text-md font-semibold"
            >
              <Link to="/contact">Contact Us Today</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  const values = [
    {
      icon: Award,
      title: "Innovation",
      description:
        "We embrace cutting-edge design and smart building solutions to create spaces that anticipate the future needs of modern living and working.",
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      icon: Shield,
      title: "Quality",
      description:
        "Premium construction with durable materials, double-glazed windows, and superior finishes. Every detail is crafted to exceed expectations.",
      color: "from-primary/20 to-amber-500/20",
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description:
        "Energy-efficient INVERTER systems, LED lighting, thermal and acoustic insulation. Building responsibly for a greener tomorrow.",
      color: "from-green-500/20 to-emerald-500/20",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              About Tasnime Immobilier
            </h2>
            <p className="text-lg text-[#f1c692] font-semibold max-w-3xl mx-auto leading-relaxed">
              Located in the vibrant city of Marrakech, Tasnime Immobilier is a
              leading real estate developer committed to delivering exceptional
              residential and business projects.
            </p>
          </div>

          {/* 3 Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl bg-white/60 backdrop-blur-md border border-[#d9ac6f]/20 hover:border-[#d9ac6f]/40 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#d9ac6f]/10"
                >
                  {/* Gradient background */}
                  <div
                    className={`absolute inset-0 bg-white/60 ${value.color} opacity-50 group-hover:opacity-70 transition-opacity duration-500`}
                  />

                  <div className="relative p-8 space-y-4">
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#1c5f66] to-[#1c5f66] flex items-center justify-center shadow-lg shadow-[#d9ac6f]/30 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-black group-hover:text-[#f1c692] transition-colors">
                      {value.title}
                    </h3>

                    {/* Description */}
                    <p className="text-black/70 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Location Info */}
          <div className="text-center pt-8">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/60 backdrop-blur-md border border-[#d9ac6f]/20 shadow-lg">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-black font-medium">
                Strategically located at Bd de Safi & Av Charaf, Marrakech
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedProjects() {
  const projects = [
    {
      title: "Business Center",
      description:
        "Flexible office spaces with state-of-the-art facilities, designed for modern businesses.",
      features: [
        "Open-space Offices",
        "Smart Building",
        "Prime Location",
        "Energy Efficient",
      ],
      link: "/business-center",
      gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
      title: "Tasnime Residences",
      description:
        "Premium apartments and duplexes with gardens, pools, and superior finishes.",
      features: [
        "Private Pools",
        "Landscaped Gardens",
        "24/7 Security",
        "Luxury Amenities",
      ],
      link: "/residences",
      gradient: "from-primary/20 to-amber-500/20",
    },
  ];

  return (
    <section className="py-24 relative -mt-20">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Featured Projects
          </h2>
          <p className="text-lg text-[#f1c692] max-w-2xl mx-auto">
            Explore our portfolio of premium developments that redefine luxury
            living and working in Marrakech.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/10"
            >
              {/* Gradient background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-50 group-hover:opacity-70 transition-opacity duration-500`}
              />

              <div className="relative p-8 space-y-6">
                <div className="space-y-3">
                  <h3 className="text-3xl font-bold text-white transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Features grid */}
                <div className="grid grid-cols-2 gap-3">
                  {project.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-sm text-white"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </div>
                  ))}
                </div>

                <Button
                  asChild
                  variant="outline"
                  className="w-full group/btn border border-[#f1c692] bg-transparent text-primary-foreground font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-primary/30"
                >
                  <Link
                    to={project.link}
                    className="flex items-center justify-center gap-2"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <AboutSection />
      <FeaturedProjects />
    </div>
  );
}
