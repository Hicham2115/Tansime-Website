import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  Building2,
  Clock,
  MessageSquare,
} from "lucide-react";
import chambreImage from "@/assets/Imgs/SAM-DUP.jpg";

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
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          message: "",
        });
      }, 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover -mt-20 bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${chambreImage})` }}
        ></div>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(201,169,97,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(201,169,97,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

        <div className="container relative z-10 px-4 md:px-6 py-20">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm animate-fade-in-up">
              <MessageSquare className="w-4 h-4 text-[#d9ac6f]" />
              <span className="text-sm font-medium text-white">Contact Us</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white animate-fade-in-up animation-delay-100">
              Get in Touch with{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#328a93] via-[#328a93] to-[#328a93]">
                Tasnime Immobilier
              </span>
            </h1>

            <p className="text-xl text-white/90 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
              Have questions or want to schedule a visit? Reach out to us
              through our contact form or via our direct communication channels.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content Section */}
      <section className="py-20 relative">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="p-8 md:p-10 rounded-2xl bg-white/80 border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Send className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-black">
                    Send Us a Message
                  </h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-semibold text-black mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border-2  rounded-xl focus:border-primary focus:outline-none transition-colors duration-300 text-white placeholder:text-gray-500"
                      placeholder="Enter your full name"
                    />
                  </div>

                  {/* Email and Phone */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-black mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border-2  rounded-xl focus:border-primary focus:outline-none transition-colors duration-300 text-white placeholder:text-gray-500"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-black mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border-2  rounded-xl focus:border-primary focus:outline-none transition-colors duration-300 text-white placeholder:text-gray-500"
                        placeholder="+212 XXX XXX XXX"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-black mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white/5 border-2  rounded-xl focus:border-primary focus:outline-none transition-colors duration-300 resize-none text-white placeholder:text-gray-500"
                      placeholder="Tell us about your inquiry..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting || isSubmitted}
                    className={`group relative w-full px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-3 cursor-pointer ${
                      isSubmitted
                        ? "bg-green-500 text-white"
                        : "bg-primary text-primary-foreground hover:bg-primary/90"
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-3 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : isSubmitted ? (
                      <>
                        <CheckCircle className="w-6 h-6" />
                        <span>Message Sent!</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information Sidebar */}
            <div className="space-y-6">
              {/* Company Info Card */}
              <div className="p-8 rounded-2xl bg-white/80 border border-white/10 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-black">
                    Tasnime Immobilier
                  </h3>
                </div>

                <div className="space-y-4">
                  {/* Phone */}
                  <a
                    href="tel:+212XXXXXXXXX"
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-all duration-300 group"
                  >
                    <Phone className="w-5 h-5 mt-0.5 shrink-0 text-primary group-hover:scale-110 transition-transform" />
                    <div>
                      <p className="text-xs text-black mb-1">Phone</p>
                      <span className="text-sm font-semibold text-black">
                        +212 XXX XXX XXX
                      </span>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:contact@tasnime-immobilier.ma"
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-all duration-300 group"
                  >
                    <Mail className="w-5 h-5 mt-0.5 shrink-0 text-primary group-hover:scale-110 transition-transform" />
                    <div>
                      <p className="text-xs text-black mb-1">Email</p>
                      <span className="text-sm font-semibold text-black break-all">
                        contact@tasnime-immobilier.ma
                      </span>
                    </div>
                  </a>

                  {/* Address */}
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5">
                    <MapPin className="w-5 h-5 mt-0.5 shrink-0 text-primary" />
                    <div>
                      <p className="text-xs text-black mb-1">Address</p>
                      <p className="text-sm font-semibold text-black">
                        Intersection of Bd de Safi & Av Charaf
                        <br />
                        Marrakech, Morocco
                      </p>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5">
                    <Clock className="w-5 h-5 mt-0.5 shrink-0 text-primary" />
                    <div>
                      <p className="text-xs text-black mb-1">
                        Business Hours
                      </p>
                      <p className="text-sm font-semibold text-black">
                        Mon - Fri: 9:00 AM - 6:00 PM
                        <br />
                        Sat: 10:00 AM - 2:00 PM
                        <br />
                        Sun: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-md aspect-square bg-white/80">
                <div className="w-full h-full bg-white/80 flex items-center justify-center">
                  <div className="text-center space-y-3">
                    <MapPin className="w-12 h-12 text-gray-500 mx-auto" />
                    <p className="text-sm font-semibold text-black">
                      Interactive Map
                    </p>
                    <p className="text-xs text-gray-400 px-4">
                      Bd de Safi & Av Charaf
                      <br />
                      Marrakech
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="p-8 rounded-2xl bg-white/80 border border-white/10 text-center shadow-lg">
              <h3 className="text-2xl font-bold text-black mb-4">
                Visit Our Projects
              </h3>
              <p className="text-black mb-6">
                Schedule a visit to experience our premium residences and
                business centers firsthand. Our team is ready to show you around
                and answer all your questions.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "Professional Consultation",
                  "Flexible Viewing Times",
                  "Expert Guidance",
                  "Personalized Tours",
                ].map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10"
                  >
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-black">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
