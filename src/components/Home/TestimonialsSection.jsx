import { Quote, Star } from "lucide-react";
import FadeInUp from "@/components/FadeInUp";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Ahmed Benali",
      role: "Homeowner",
      content:
        "Buying our home with Tasnime Immobilier was the best decision we made. The quality of construction and attention to detail is unmatched in Marrakech.",
      initials: "AB",
    },
    {
      name: "Sarah Lahlou",
      role: "Business Owner",
      content:
        "The office space at the Business Center is perfect for our growing team. Modern facilities, great location, and professional management.",
      initials: "SL",
    },
    {
      name: "Karim Tazi",
      role: "Investor",
      content:
        "I have invested in multiple projects with Tasnime. Their commitment to deadlines and quality gives me complete peace of mind.",
      initials: "KT",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container px-4 md:px-6">
        <FadeInUp className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            Client Experiences
          </h2>
          <p className="text-lg text-black max-w-2xl mx-auto">
            Don't just take our word for it. Here is what our valued clients and
            partners have to say about their experience with us.
          </p>
        </FadeInUp>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <FadeInUp
              key={index}
              delay={index * 0.2}
              className="relative p-8 hover:-translate-y-4 rounded-3xl bg-primary/90 backdrop-blur-sm border border-white/10 hover:border-primary/50 transition-all duration-300 group"
            >
              <Quote className="absolute top-8 right-8 w-10 h-10 text-primary/20 group-hover:text-primary/40 transition-colors" />

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-linear-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold text-lg shadow-lg">
                    {item.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{item.name}</h4>
                    <p className="text-sm text-[#f1c692]">{item.role}</p>
                  </div>
                </div>

                <p className="text-white leading-relaxed italic">
                  "{item.content}"
                </p>

                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-[#f0ba78] fill-[#f0ba78]"
                    />
                  ))}
                </div>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}
