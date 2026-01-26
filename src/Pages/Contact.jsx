import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  Building2,
  MessageSquare,
} from "lucide-react";
import chambreImage from "@/assets/Imgs/SAM-DUP.jpg";
import PageTransition from "@/components/PageTransition";
import FadeInUp from "@/components/FadeInUp";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ fullName: "", email: "", phone: "", message: "" });
      }, 3000);
    }, 1500);
  };

  return (
    <PageTransition className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat -mt-20"
          style={{ backgroundImage: `url(${chambreImage})` }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(201,169,97,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(201,169,97,0.03)_1px,transparent_1px)] bg-[length:64px_64px]" />

        <div className="container relative z-10 px-4 md:px-6 py-16 sm:py-20">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <FadeInUp className="flex justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
                <MessageSquare className="w-4 h-4 text-[#b1cc4b]" />
                <span className="text-sm sm:text-base font-medium text-white">
                  Nous Contacter
                </span>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.2}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                Entrez en Contact avec{" "}
                <span className="text-[#b1cc4b]">Tasnime Immobilier</span>
              </h1>
            </FadeInUp>

            <FadeInUp delay={0.4}>
              <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
                Vous avez des questions ou vous souhaitez planifier une visite ?
                Contactez-nous via notre formulaire ou nos canaux de
                communication directs.
              </p>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-20 relative">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
            {/* Form */}
            <FadeInUp className="flex-1">
              <div className="p-6 sm:p-8 md:p-10 rounded-2xl bg-primary/90 backdrop-blur-sm border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/90 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <Send className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                    Envoyez-nous un Message
                  </h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">
                      Nom Complet *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      placeholder="Entrez votre nom complet"
                      className="w-full px-4 py-3 bg-white/5 border-2 border-white rounded-xl focus:border-primary focus:outline-none transition-colors duration-300 text-white placeholder:text-white/60"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-white mb-2">
                        Adresse E-mail *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="votre@email.com"
                        className="w-full px-4 py-3 bg-white/5 border-2 border-white rounded-xl focus:border-primary focus:outline-none transition-colors duration-300 text-white placeholder:text-white/60"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-white mb-2">
                        Numéro de Téléphone *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        placeholder="+212 XXX XXX XXX"
                        className="w-full px-4 py-3 bg-white/5 border-2 border-white rounded-xl focus:border-primary focus:outline-none transition-colors duration-300 text-white placeholder:text-white/60"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      placeholder="Parlez-nous de votre demande..."
                      className="w-full px-4 py-3 bg-white/5 border-2 border-white rounded-xl focus:border-primary focus:outline-none transition-colors duration-300 resize-none text-white placeholder:text-white/60"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || isSubmitted}
                    className={`group relative w-full px-6 py-3 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-3 cursor-pointer ${
                      isSubmitted
                        ? "bg-primary/90 text-white"
                        : "bg-primary/90 text-white hover:bg-primary/90"
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Envoi en cours...</span>
                      </>
                    ) : isSubmitted ? (
                      <>
                        <CheckCircle className="w-6 h-6" />
                        <span>Message Envoyé !</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        <span>Envoyer le Message</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </FadeInUp>

            {/* Sidebar */}
            <FadeInUp delay={0.2} className="flex-1 flex flex-col gap-6">
              {/* Company Info */}
              <div className="p-6 sm:p-8 rounded-2xl bg-primary/90 backdrop-blur-sm border border-white/10 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/90 rounded-xl flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Tasnime Immobilier
                  </h3>
                </div>

                <div className="space-y-3">
                  <a
                    href="tel:+21261369512"
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-all duration-300 group"
                  >
                    <Phone className="w-5 h-5 mt-0.5 shrink-0 text-white group-hover:scale-110 transition-transform" />
                    <div>
                      <p className="text-xs text-white mb-1">Téléphone</p>
                      <span className="text-sm font-semibold text-white">
                        +212 61 36 95 12
                      </span>
                    </div>
                  </a>

                  <a
                    href="mailto:contact@tasnime-immobilier.ma"
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-all duration-300 group"
                  >
                    <Mail className="w-5 h-5 mt-0.5 shrink-0 text-white group-hover:scale-110 transition-transform" />
                    <div>
                      <p className="text-xs text-white mb-1">E-mail</p>
                      <span className="text-sm font-semibold text-white break-all">
                        TASNIMEKECH@GMAIL.COM
                      </span>
                    </div>
                  </a>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5">
                    <MapPin className="w-5 h-5 mt-0.5 shrink-0 text-white" />
                    <div>
                      <p className="text-xs text-white mb-1">Adresse</p>
                      <p className="text-sm font-semibold text-white">
                        MARRAKECH - BD SAFI X AV. ACHARAF
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-md aspect-video">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d3395.9611727058036!2d-8.029307!3d31.662281999999998!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDM5JzQzLjIiTiA4wrAwMSc0OS40Ilc!5e0!3m2!1sen!2sus!4v1768611899120!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>
            </FadeInUp>
          </div>

          {/* Benefits */}
          <div className="mt-12 max-w-3xl mx-auto">
            <FadeInUp
              delay={0.4}
              className="p-6 sm:p-8 rounded-2xl bg-primary/90 backdrop-blur-sm border border-white/10 text-center shadow-lg"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                Visitez Nos Projets
              </h3>
              <p className="text-white mb-6 text-sm sm:text-base">
                Planifiez une visite pour expérimenter nos résidences premium et
                nos centres d'affaires en personne. Notre équipe est prête à
                vous faire visiter et répondre à toutes vos questions.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "Consultation Professionnelle",
                  "Horaires de Visite Flexibles",
                  "Guidance d'Expert",
                  "Visites Personnalisées",
                ].map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/90 border border-white/10"
                  >
                    <CheckCircle className="w-4 h-4 text-white" />
                    <span className="text-xs sm:text-sm font-medium text-white">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
