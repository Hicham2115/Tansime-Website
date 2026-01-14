import { Link } from "react-router-dom";
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
} from "lucide-react";
import Logo from "../../assets/Logo.png"

function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Business Center", href: "/business-center" },
    { name: "Residences", href: "/residences" },
    { name: "Gallery", href: "/gallery" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const projects = [
    { name: "Business Center", href: "/business-center", icon: Building2 },
    { name: "Tasnime Residences", href: "/residences", icon: Home },
  ];

  return (
    <footer className="bg-background border-t border-border relative overflow-hidden">
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
                <div className="bg-primary/10 p-2 rounded-lg border border-primary/20 group-hover:bg-primary/20 transition-colors">
                  <img src={Logo} alt="" width={150} height={150}/>
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
              <div className="w-16 h-1 bg-gradient-to-r from-primary to-primary/50 mt-2 rounded-full" />
            </div>
            <p className="text-white/80 leading-relaxed mb-6 text-sm">
              A leading real estate developer in Marrakech, delivering
              exceptional residential and business projects with sustainability,
              quality, and modernity at the forefront.
            </p>

            {/* Newsletter */}
            <div className="space-y-3">
              <h4 className="font-bold text-sm text-primary">Stay Updated</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 bg-card border border-border rounded-l-lg focus:outline-none focus:border-primary transition-colors text-sm text-foreground"
                />
                <button className="px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-r-lg transition-all duration-300 flex items-center justify-center group">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-foreground relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-primary rounded-full" />
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-white/80 hover:text-primary transition-all duration-300 flex items-center group text-sm"
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
              Our Projects
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-primary rounded-full" />
            </h3>
            <ul className="space-y-3">
              {projects.map((project, index) => (
                <li key={index}>
                  <Link
                    to={project.href}
                    className="text-white/80 hover:text-primary transition-all duration-300 flex items-center gap-2 group text-sm"
                  >
                    <project.icon className="w-4 h-4 text-primary/60 group-hover:text-primary transition-colors" />
                    {project.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-foreground relative inline-block">
              Get in Touch
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-primary rounded-full" />
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/80 text-sm group">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5 group-hover:text-primary/80 transition-colors" />
                <span className="group-hover:text-foreground transition-colors">
                  Intersection of Bd de Safi & Av Charaf
                  <br />
                  Marrakech, Morocco
                </span>
              </li>
              <li className="flex items-center gap-3 text-white/80 text-sm group">
                <Phone className="w-5 h-5 text-primary shrink-0 group-hover:text-primary/80 transition-colors" />
                <a
                  href="tel:+212XXXXXXXXX"
                  className="group-hover:text-foreground transition-colors"
                >
                  +212 XXX XXX XXX
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/80 text-sm group">
                <Mail className="w-5 h-5 text-primary shrink-0 group-hover:text-primary/80 transition-colors" />
                <a
                  href="mailto:contact@tasnime-immobilier.ma"
                  className="group-hover:text-foreground transition-colors break-all"
                >
                  contact@tasnime-immobilier.ma
                </a>
              </li>
            </ul>

            {/* Social Media */}
            <div className="mt-6">
              <h4 className="font-bold text-sm mb-3 text-primary">Follow Us</h4>
              <div className="flex gap-3">
                {[
                  { icon: Facebook, href: "#", label: "Facebook" },
                  { icon: Instagram, href: "#", label: "Instagram" },
                  { icon: Linkedin, href: "#", label: "LinkedIn" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg bg-card border border-border hover:bg-primary hover:border-primary flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                  >
                    <social.icon className="w-5 h-5 text-white/80 group-hover:text-primary-foreground transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/80 text-sm text-center md:text-left">
              &copy; {currentYear} Tasnime Immobilier. All rights reserved.
            </p>

            <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm">
              <a
                href="/privacy"
                className="text-white/80 hover:text-primary transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-white/80 hover:text-primary transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="/cookies"
                className="text-white/80 hover:text-primary transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
