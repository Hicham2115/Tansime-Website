import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Building2,
  Wifi,
  Zap,
  Shield,
  Car,
  Wind,
  Lightbulb,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle2,
  Users,
  Briefcase,
  Monitor,
  Coffee,
} from "lucide-react";
import bussinesspic from "../assets/ESPACETV1.jpg";
import img53 from "../assets/img53.jpg";
import img59 from "../assets/img59.jpg";
import img77 from "../assets/img77.jpg";

export default function BusinessCenter() {
  const features = [
    {
      icon: Building2,
      title: "Open-Space Offices",
      description:
        "Flexible floor plans adaptable to startups, SMEs, and multinationals. Customize your workspace to foster collaboration and productivity.",
    },
    {
      icon: Shield,
      title: "Premium Construction",
      description:
        "Durable materials, double-glazed windows, and superior thermal and acoustic insulation ensure a quiet and professional environment.",
    },
    {
      icon: Zap,
      title: "Energy Efficiency",
      description:
        "Equipped with INVERTER air conditioning, LED lighting, and smart building solutions to minimize environmental impact and operating costs.",
    },
    {
      icon: Wifi,
      title: "High-Speed Connectivity",
      description:
        "Fiber optic internet pre-installed with advanced telecommunications infrastructure to keep your business connected at all times.",
    },
    {
      icon: Wind,
      title: "Climate Control",
      description:
        "Advanced HVAC systems provide optimal temperature and air quality control for comfort year-round, boosting employee well-being.",
    },
    {
      icon: Car,
      title: "Ample Parking",
      description:
        "Secure underground and surface parking dedicated to employees and visitors, resolving city center parking challenges.",
    },
  ];

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

  const locationBenefits = [
    {
      icon: MapPin,
      text: "Prime location near Safi Boulevard and Avenue Charaf",
    },
    { icon: Clock, text: "10 minutes from downtown Marrakech" },
    { icon: Car, text: "5 minutes from highway and future TGV station" },
  ];

  return (
    <div className="min-h-screen text-black">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover -mt-20 bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bussinesspic})` }}
        ></div>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(201,169,97,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(201,169,97,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

        <div className="container relative z-10 px-4 md:px-6 py-20">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#328a93]/20 backdrop-blur-sm animate-fade-in-up">
              <Building2 className="w-4 h-4 text-[#f1c692]" />
              <span className="text-sm font-medium text-white">
                Commercial Real Estate
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white animate-fade-in-up animation-delay-100">
              Tasnime{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r  from-[#328a93] via-[#328a93] to-[#328a93]">
                Business Center
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
              Marrakech's Premier Office Destination – High-end architecture,
              flexible layouts, and modern amenities designed for businesses of
              all sizes.
            </p>

            <Button
              asChild
              size="lg"
              className="group px-8 py-6 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:scale-105 text-md animate-fade-in-up animation-delay-300"
            >
              <Link to="/contact" className="flex items-center gap-2">
                Request More Information
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction */}
      {/* <section className="py-20 relative ">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg prose-gray max-w-none text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Redefining Workspace in Marrakech
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                The Tasnime Business Center redefines office spaces in Marrakech
                with high-end architecture, flexible layouts, and modern
                amenities. Whether you are a startup, SME, or multinational, our
                open-space office floors are adaptable to all business needs.
                Experience a workplace that inspires creativity and drives
                success.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Features Grid */}
      <section className="py-20 relative">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Premium Features
            </h2>
            <p className="text-lg text-[#f1c692] max-w-2xl mx-auto">
              Everything your business needs to thrive in a modern, sustainable
              environment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-white/70 border border-gray-200 shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-black ">
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

      {/* Amenities Section - NEW */}
      <section className="py-20 relative ">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              World-Class Amenities
            </h2>
            <p className="text-lg text-[#f5c386] max-w-2xl mx-auto">
              Designed for convenience, comfort, and productivity.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {amenities.map((item, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-white/70 border border-white/10 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
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
        </div>
      </section>

      {/* RÉSIDENCES TASNIME Section */}
      <section className="py-20 relative border-t border-white/10">
        <div className="container px-4 md:px-6 space-y-16">
          {/* Preamble */}
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              PRÉAMBULE
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
            <p className="text-lg text-white leading-relaxed">
              Au cœur de la ville de Marrakech, Tasnime immobilier acteur de
              référence dans le domaine de l'immobilier lance deux projets
              exceptionnels résolument pensés dans une architecture
              contemporaine et érigés autour des valeurs de développement
              durable, qualité, innovation, et modernité : Le centre d'affaires
              TASNIME et Les résidences TASNIME.
            </p>
          </div>

          {/* Residences Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-[#f1c692]">
                RÉSIDENCES TASNIME
              </h2>
              <p className="text-white text-lg leading-relaxed">
                Les résidences Tasnime se distinguent par la convivialité des
                espaces, la durabilité des matériaux de construction ainsi que
                la qualité des finitions. Le projet prévoit la réalisation de
                plus de 40 magasins et showrooms en RDC pour l'animation
                commerciale des résidences dont un supermarché (MARJANE market).
              </p>
              <p className="text-white leading-relaxed">
                Les résidences TASNIME sont des résidences sécurisées conçues
                selon une architecture sobre et raffinée offrant une expérience
                de vie exceptionnelle. Ces résidences Premium sont animées par
                un jeu de jardins et piscines constituant une symphonie
                d'élégance et de confort.
              </p>

              <div className="bg-white/70 p-6 rounded-2xl border border-white/10">
                <h3 className="text-xl font-bold text-black mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                  Points Forts Développement Durable
                </h3>
                <ul className="space-y-3">
                  {[
                    "Isolation thermique et phonique avec double vitrage",
                    "Structures en dalle pleine (inertie thermique)",
                    "Climatisation INVERTER",
                    "Eclairage LED",
                    "Detecteurs de présence dans les circulations",
                    "Ascenseurs de marque international KONE",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-black text-sm"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              {/* Typologies Card */}
              <div className="bg-white/70 p-8 rounded-3xl border border-white/10 shadow-xl">
                <h3 className="text-2xl font-bold text-black mb-6">
                  Typologies & Superficies
                </h3>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h2 className="text-black font-bold">
                      Studios & F2
                    </h2>
                    <p className="text-black font-semibold text-sm">
                      1 chambre, salon et cuisine à l'américaine (36 m² à 55 m²)
                    </p>
                  </div>
                  <div className="w-full h-px bg-white/10" />
                  <div className="space-y-2">
                    <h2 className="text-black font-bold">
                      Appartements F3
                    </h2>
                    <p className="text-black font-semibold text-sm">
                      2 chambres, salon et cuisine (68 m² à 85 m²)
                    </p>
                  </div>
                  <div className="w-full h-px bg-white/10" />
                  <div className="space-y-2">
                    <h2 className="text-black font-bold">
                      Appartements F4
                    </h2>
                    <p className="text-black font-semibold text-sm">
                      3 chambres, salon et cuisine (108 m² à 112 m²)
                    </p>
                  </div>
                  <div className="w-full h-px bg-white/10" />
                  <div className="space-y-2">
                    <h2 className="text-black font-bold">Duplexes</h2>
                    <p className="text-black font-semibold text-sm">
                      2 salons, 3 ou 4 chambres à coucher (96 m² à 186 m²).
                      Certains avec piscines privatives.
                    </p>
                  </div>
                </div>
              </div>

              {/* Additional Feature Highlight */}
              <div className="p-6 rounded-2xl bg-white/70 border border-white/10">
                <p className="text-black font-semibold italic text-center">
                  "L'efficacité énergétique est au cœur de la conception
                  architecturale et technique du projet."
                </p>
              </div>
            </div>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[img53, img59, img77].map((img, idx) => (
              <div
                key={idx}
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 shadow-2xl"
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300 z-10" />
                <img
                  src={img}
                  alt={`Tasnime Residence View ${idx + 1}`}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Accessibility */}
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
                  className="flex items-center gap-4 p-6 rounded-2xl bg-white/60 border border-white/10 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.01]"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-lg text-black font-medium">
                    {benefit.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      {/* <section className="py-20 relative">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Technical Specifications
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Double-glazed facades for optimal insulation",
                "INVERTER air conditioning systems",
                "LED lighting throughout",
                "Smart building management system",
                "High-speed fiber optic connectivity",
                "Advanced security systems",
                "Sustainable construction materials",
                "Accessible design for all abilities",
              ].map((spec, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white/60 border border-gray-100 hover:border-blue-200 transition-all"
                >
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium">{spec}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-primary/5" />

        <div className="container relative px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Ready to Elevate Your Business?
            </h2>
            <p className="text-xl text-white">
              Contact us today to schedule a visit and discover how Tasnime
              Business Center can transform your workspace.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="group px-8 py-6 bg-primary text-white rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:scale-105 text-md"
              >
                <Link to="/contact" className="flex items-center gap-2">
                  Contact Us
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="px-8 py-6 border-2 border-primary hover:bg-white hover:scale-105 text-black bg-white rounded-xl transition-all duration-300 text-md"
              >
                <Link to="/gallery">View Gallery</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
