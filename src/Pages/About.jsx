// import { Button } from "@/components/ui/button";
// import { Link } from "react-router-dom";
// import {
//   Target,
//   Award,
//   Users,
//   TrendingUp,
//   Lightbulb,
//   Shield,
//   Leaf,
//   Sparkles,
//   ArrowRight,
//   MapPin,
//   Building2,
// } from "lucide-react";

// export default function About() {
//   const values = [
//     {
//       icon: Lightbulb,
//       title: "Innovation",
//       description:
//         "Pioneering modern architectural solutions that set new standards in real estate development",
//     },
//     {
//       icon: Award,
//       title: "Quality",
//       description:
//         "Uncompromising commitment to superior craftsmanship and premium materials",
//     },
//     {
//       icon: Leaf,
//       title: "Sustainability",
//       description:
//         "Eco-friendly practices and energy-efficient designs for a better tomorrow",
//     },
//     {
//       icon: Sparkles,
//       title: "Modernity",
//       description:
//         "Contemporary designs that blend aesthetics with functionality",
//     },
//   ];

//   const achievements = [
//     { icon: Building2, value: "2+", label: "Major Projects" },
//     { icon: Users, value: "150+", label: "Happy Residents" },
//     { icon: Award, value: "10+", label: "Years Experience" },
//     { icon: TrendingUp, value: "100%", label: "Client Satisfaction" },
//   ];

//   return (
//     <div className="min-h-screen">
//       {/* Hero Section */}
//       <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/10 to-background">
//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(201,169,97,0.15),transparent)]" />
//         </div>
//         <div className="absolute inset-0 bg-[linear-gradient(rgba(201,169,97,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(201,169,97,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

//         <div className="container relative z-10 px-4 md:px-6 py-20">
//           <div className="max-w-4xl mx-auto text-center space-y-8">
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm animate-fade-in-up">
//               <Target className="w-4 h-4 text-primary" />
//               <span className="text-sm font-medium text-primary">
//                 Our Story
//               </span>
//             </div>

//             <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground animate-fade-in-up animation-delay-100">
//               Who We{" "}
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-amber-400 to-primary/60">
//                 Are
//               </span>
//             </h1>

//             <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
//               Tasnime Immobilier – A reference player in Marrakech's real estate
//               sector
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Mission Statement */}
//       <section className="py-20 relative">
//         <div className="container px-4 md:px-6">
//           <div className="max-w-4xl mx-auto">
//             <div className="p-8 md:p-12 rounded-3xl bg-card border border-border hover:border-primary/30 transition-all duration-300">
//               <p className="text-2xl md:text-3xl text-foreground leading-relaxed text-center font-light">
//                 Tasnime Immobilier is a{" "}
//                 <span className="font-semibold text-primary">
//                   reference player
//                 </span>{" "}
//                 in Marrakech's real estate sector, delivering projects that
//                 combine{" "}
//                 <span className="font-semibold text-primary">
//                   contemporary architecture
//                 </span>
//                 ,{" "}
//                 <span className="font-semibold text-primary">
//                   sustainability
//                 </span>
//                 , and{" "}
//                 <span className="font-semibold text-primary">
//                   superior craftsmanship
//                 </span>
//                 .
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Core Values */}
//       <section className="py-20 relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />

//         <div className="container relative px-4 md:px-6">
//           <div className="text-center space-y-4 mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-foreground">
//               Our Core Values
//             </h2>
//             <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//               The principles that guide everything we do
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
//             {values.map((value, index) => (
//               <div
//                 key={index}
//                 className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/10 text-center"
//               >
//                 <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 mx-auto group-hover:bg-primary/20 transition-colors group-hover:scale-110 duration-300">
//                   <value.icon className="w-8 h-8 text-primary" />
//                 </div>
//                 <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
//                   {value.title}
//                 </h3>
//                 <p className="text-muted-foreground leading-relaxed">
//                   {value.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Achievements */}
//       <section className="py-20 relative">
//         <div className="container px-4 md:px-6">
//           <div className="text-center space-y-4 mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-foreground">
//               Our Achievements
//             </h2>
//             <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//               Numbers that reflect our commitment to excellence
//             </p>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
//             {achievements.map((achievement, index) => (
//               <div
//                 key={index}
//                 className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 text-center"
//               >
//                 <achievement.icon className="w-10 h-10 text-primary mx-auto mb-4" />
//                 <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">
//                   {achievement.value}
//                 </div>
//                 <div className="text-sm text-muted-foreground">
//                   {achievement.label}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Location */}
//       <section className="py-20 relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />

//         <div className="container relative px-4 md:px-6">
//           <div className="max-w-4xl mx-auto">
//             <div className="text-center space-y-6 mb-12">
//               <h2 className="text-4xl md:text-5xl font-bold text-foreground">
//                 Strategic Location
//               </h2>
//               <p className="text-lg text-muted-foreground">
//                 Perfectly positioned in the heart of Marrakech
//               </p>
//             </div>

//             <div className="p-8 md:p-12 rounded-3xl bg-card border border-border hover:border-primary/30 transition-all duration-300">
//               <div className="flex items-start gap-4 mb-6">
//                 <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
//                   <MapPin className="w-6 h-6 text-primary" />
//                 </div>
//                 <div>
//                   <h3 className="text-2xl font-bold text-foreground mb-3">
//                     Prime Intersection
//                   </h3>
//                   <p className="text-lg text-muted-foreground leading-relaxed">
//                     Strategically located at the intersection of two main
//                     boulevards:{" "}
//                     <span className="text-primary font-semibold">
//                       Boulevard de Safi
//                     </span>{" "}
//                     and{" "}
//                     <span className="text-primary font-semibold">
//                       Avenue Charaf
//                     </span>
//                     , our projects are easily accessible and offer a premium
//                     living and working environment.
//                   </p>
//                 </div>
//               </div>

//               <div className="grid md:grid-cols-3 gap-4 pt-6 border-t border-border/50">
//                 <div className="text-center p-4">
//                   <div className="text-2xl font-bold text-primary mb-1">
//                     10 min
//                   </div>
//                   <div className="text-sm text-muted-foreground">
//                     From Downtown
//                   </div>
//                 </div>
//                 <div className="text-center p-4">
//                   <div className="text-2xl font-bold text-primary mb-1">
//                     5 min
//                   </div>
//                   <div className="text-sm text-muted-foreground">
//                     From Highway
//                   </div>
//                 </div>
//                 <div className="text-center p-4">
//                   <div className="text-2xl font-bold text-primary mb-1">
//                     5 min
//                   </div>
//                   <div className="text-sm text-muted-foreground">
//                     From TGV Station
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />

//         <div className="container relative px-4 md:px-6">
//           <div className="max-w-3xl mx-auto text-center space-y-8">
//             <h2 className="text-4xl md:text-5xl font-bold text-foreground">
//               Ready to Learn More?
//             </h2>
//             <p className="text-xl text-muted-foreground">
//               Discover how Tasnime Immobilier can help you find your perfect
//               space in Marrakech
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Button
//                 asChild
//                 size="lg"
//                 className="group px-8 py-6 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-2xl shadow-primary/20 hover:shadow-primary/40 hover:scale-105 text-lg"
//               >
//                 <Link to="/contact" className="flex items-center gap-2">
//                   Contact Us
//                   <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                 </Link>
//               </Button>
//               <Button
//                 asChild
//                 size="lg"
//                 variant="outline"
//                 className="px-8 py-6 border-2 border-primary/30 hover:border-primary hover:bg-primary/5 rounded-xl transition-all duration-300 text-lg font-semibold"
//               >
//                 <Link to="/residences">View Projects</Link>
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }



function About() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center text-primary-foreground px-4">
      <div className="text-center max-w-md">
        <div className="mb-4 text-5xl">🚧</div>

        <h1 className="text-3xl font-bold tracking-tight mb-2">
          Still in Development
        </h1>

        <p className="text-primary-foreground/80 text-sm">
          This section is currently being built. Please check back soon for
          updates.
        </p>
      </div>
    </div>
  );
}

export default About;
