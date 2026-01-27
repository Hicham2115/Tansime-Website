import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  Building2,
  Home,
  ArrowRight,
  Loader2,
  CheckCircle,
} from "lucide-react";
import Logo from "../../assets/Logo.png";

function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle, loading, success, error

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    try {
      await axios.post("https://formspree.io/f/xkorkbna", {
        email: email,
        message: "New newsletter subscription from footer",
      });
      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus("idle"), 3000);
    } catch (error) {
      console.error("Subscription error:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  const quickLinks = [
    { name: "Accueil", href: "/" },
    { name: "Centre d'Affaires", href: "/business-center" },
    { name: "Résidences", href: "/residences" },
    { name: "Galerie", href: "/gallery" },
    { name: "À Propos", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const projects = [
    { name: "Centre d'Affaires", href: "/business-center", icon: Building2 },
    { name: "Résidences Tasnime", href: "/residences", icon: Home },
  ];

  return (
    <footer className="bg-[#0b161c] border-t border-border relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Link to="/" className="inline-flex items-center gap-3 group">
                <div className=" p-2 rounded-lg">
                  <img src={Logo} alt="" width={150} height={150} />
                </div>
                {/* <div className="flex flex-col">
                  <span className="text-xl font-bold tracking-tight text-foreground">
                    TASNIME
                  </span>
                  <span className="text-xs text-primary font-medium tracking-wider">
                    IMMOBILIER
                  </span>
                </div> */}
              </Link>
              <div className="w-16 h-1 bg-[#b1cc4b] mt-2 rounded-full" />
            </div>
            <p className="white leading-relaxed mb-6 text-sm">
              Un développeur immobilier de premier plan à Marrakech, livrant des
              projets résidentiels et commerciaux exceptionnels avec la
              durabilité, la qualité et la modernité au premier plan.
            </p>

            {/* Newsletter */}
            <div className="space-y-3">
              <h4 className="font-bold text-sm text-white">Rester Informé</h4>
              <form onSubmit={handleSubscribe} className="flex relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Votre email"
                  required
                  disabled={status === "loading" || status === "success"}
                  className="flex-1 px-4 py-2 bg-card border border-border rounded-l-lg focus:outline-none focus:border-primary transition-colors text-sm text-foreground disabled:opacity-70"
                />
                <button
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  className={`px-4 py-2 text-primary-foreground rounded-r-lg transition-all duration-300 flex items-center justify-center group ${
                    status === "success"
                      ? "bg-green-600"
                      : status === "error"
                        ? "bg-red-600"
                        : "bg-[#b1cc4b] hover:bg-[#b1cc4b]/90"
                  }`}
                >
                  {status === "loading" ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : status === "success" ? (
                    <CheckCircle className="w-4 h-4" />
                  ) : (
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  )}
                </button>
              </form>
              {status === "success" && (
                <p className="text-xs text-green-500 animate-in fade-in slide-in-from-top-1">
                  Merci de votre inscription !
                </p>
              )}
              {status === "error" && (
                <p className="text-xs text-red-500 animate-in fade-in slide-in-from-top-1">
                  Une erreur est survenue. Réessayez.
                </p>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-foreground relative inline-block">
              Liens Rapides
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-[#b1cc4b] rounded-full" />
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-white hover:text-[#b1cc4b] transition-all duration-300 flex items-center group text-sm"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-primary mr-0 group-hover:mr-2 transition-all duration-300 rounded-full" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-foreground relative inline-block">
              Nos Projets
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-[#b1cc4b] rounded-full" />
            </h3>
            <ul className="space-y-3">
              {projects.map((project, index) => (
                <li key={index}>
                  <Link
                    to={project.href}
                    className="white hover:text-[#b1cc4b] transition-all duration-300 flex items-center gap-2 group text-sm"
                  >
                    <project.icon className="w-4 h-4 text-[#b1cc4b] group-hover:text-[#b1cc4b] transition-colors" />
                    {project.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-foreground relative inline-block">
              Nous Contacter
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-[#b1cc4b] rounded-full" />
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 white text-sm group">
                <MapPin className="w-5 h-5 text-[#b1cc4b] shrink-0 mt-0.5 group-hover:text-[#b1cc4b] transition-colors" />
                <span className="group-hover:text-[#b1cc4b] transition-colors">
                  MARRAKECH - BD SAFI X AV. ACHARAF
                </span>
              </li>
              <li className="flex items-center gap-3 white text-sm group">
                <Phone className="w-5 h-5 text-[#b1cc4b] shrink-0 group-hover:text-[#b1cc4b] transition-colors" />
                <a
                  href="tel:+212XXXXXXXXX"
                  className="group-hover:text-[#b1cc4b] transition-colors"
                >
                  +212 61 36 95 12
                </a>
              </li>
              <li className="flex items-center gap-3 white text-sm group">
                <Mail className="w-5 h-5 text-[#b1cc4b] shrink-0 group-hover:text-[#b1cc4b] transition-colors" />
                <a
                  href="mailto:contact@tasnime-immobilier.ma"
                  className="group-hover:text-[#b1cc4b] transition-colors break-all"
                >
                  TASNIMEKECH@GMAIL.COM
                </a>
              </li>
            </ul>

            {/* Social Media */}
            <div className="mt-6">
              <h4 className="font-bold text-sm mb-3 text-white">Nous Suivre</h4>
              <div className="flex gap-3">
                {[
                  {
                    icon: Facebook,
                    href: "https://web.facebook.com/p/Tasnime-61577909202998/?_rdc=1&_rdr#",
                    label: "Facebook",
                  },
                  {
                    icon: Instagram,
                    href: "https://www.instagram.com/tasnime.immo/",
                    label: "Instagram",
                  },
                  // { icon: Linkedin, href: "#", label: "LinkedIn" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg bg-card border border-border hover:bg-[#b1cc4b] hover:border-[#b1cc4b] flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                  >
                    <social.icon className="w-5 h-5 white group-hover:text-white  transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="white text-sm text-center md:text-left">
              &copy; {currentYear} – Designed & developed by{" "}
              <a
                className="underline"
                href="https://wespeak.ma"
                target="_blank"
                rel="noopener noreferrer"
              >
                WeSpeak Media
              </a>
              .
            </p>

            {/* <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm">
              <a
                href="/privacy"
                className="white hover:text-primary transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="white hover:text-primary transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="/cookies"
                className="white hover:text-primary transition-colors"
              >
                Cookie Policy
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
