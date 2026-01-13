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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#d9ac6f]/10 border border-[#d9ac6f]/20 backdrop-blur-sm animate-fade-in-up">
              <Building2 className="w-4 h-4 text-[#d9ac6f]" />
              <span className="text-sm font-medium text-white">
                Commercial Real Estate
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white animate-fade-in-up animation-delay-100">
              Tasnime{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#d9ac6f] via-[#d9ac6f] to-[#d9ac6f]">
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
              className="group px-8 py-6 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:scale-105 text-md animate-fade-in-up animation-delay-300"
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Premium Features
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything your business needs to thrive in a modern, sustainable
              environment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-[#292727f4] border border-gray-200 shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-primary">
                  {feature.title}
                </h3>
                <p className="text-gray-200 leading-relaxed">
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              World-Class Amenities
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Designed for convenience, comfort, and productivity.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {amenities.map((item, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-[#292727f4] border border-white/10 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 mx-auto rounded-full bg-white/10 shadow-md flex items-center justify-center mb-4 text-white">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm">{item.description}</p>
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
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Strategic Location
              </h2>
              <p className="text-lg text-gray-600">
                Perfectly positioned for business success
              </p>
            </div>

            <div className="space-y-6">
              {locationBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-6 rounded-2xl bg-[#292727] border border-white/10 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.01]"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-lg text-white font-medium">
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Ready to Elevate Your Business?
            </h2>
            <p className="text-xl text-gray-600">
              Contact us today to schedule a visit and discover how Tasnime
              Business Center can transform your workspace.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="group px-8 py-6 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:scale-105 text-md"
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
