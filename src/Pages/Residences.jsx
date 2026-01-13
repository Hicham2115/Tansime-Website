// import { Button } from "@/components/ui/button";
// import { Link } from "react-router-dom";
// import {
//   Home,
//   Shield,
//   Waves,
//   Trees,
//   Zap,
//   Wind,
//   Lock,
//   Sparkles,
//   ArrowRight,
//   CheckCircle2,
//   Bed,
//   Bath,
//   Maximize,
// } from "lucide-react";

// export default function Residences() {
//   const features = [
//     {
//       icon: Shield,
//       title: "Security & Privacy",
//       description: "Gated complex with 24/7 controlled access and surveillance",
//     },
//     {
//       icon: Waves,
//       title: "Luxury Pools",
//       description:
//         "Adult and children's communal pools, plus private pools in select duplexes",
//     },
//     {
//       icon: Trees,
//       title: "Landscaped Gardens",
//       description:
//         "Beautifully designed green spaces for relaxation and recreation",
//     },
//     {
//       icon: Zap,
//       title: "Energy Efficient",
//       description: "INVERTER air conditioning and LED lighting throughout",
//     },
//     {
//       icon: Wind,
//       title: "Superior Insulation",
//       description: "Thermal and acoustic insulation with double-glazed facades",
//     },
//     {
//       icon: Sparkles,
//       title: "Premium Finishes",
//       description: "High-quality materials and elegant design in every detail",
//     },
//   ];

//   const housingTypes = [
//     {
//       type: "Studio / F2",
//       description: "1 bedroom, living room, American-style kitchen",
//       size: "36–55 m²",
//       icon: Bed,
//       bedrooms: 1,
//       bathrooms: 1,
//     },
//     {
//       type: "F3",
//       description: "2 bedrooms, living room, kitchen",
//       size: "68–85 m²",
//       icon: Bed,
//       bedrooms: 2,
//       bathrooms: 1,
//     },
//     {
//       type: "F4",
//       description: "3 bedrooms, living room, kitchen",
//       size: "108–112 m²",
//       icon: Bed,
//       bedrooms: 3,
//       bathrooms: 2,
//     },
//     {
//       type: "Duplex",
//       description: "3–4 bedrooms, 2 living rooms",
//       size: "96–186 m²",
//       icon: Home,
//       bedrooms: "3-4",
//       bathrooms: "2-3",
//     },
//   ];

//   return (
//     <div className="min-h-screen">
//       {/* Hero Section */}
//       <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-background via-amber-950/20 to-primary/20">
//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(201,169,97,0.15),transparent)]" />
//         </div>
//         <div className="absolute inset-0 bg-[linear-gradient(rgba(201,169,97,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(201,169,97,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

//         <div className="container relative z-10 px-4 md:px-6 py-20">
//           <div className="max-w-4xl mx-auto text-center space-y-8">
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm animate-fade-in-up">
//               <Home className="w-4 h-4 text-primary" />
//               <span className="text-sm font-medium text-primary">
//                 Residential Living
//               </span>
//             </div>

//             <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground animate-fade-in-up animation-delay-100">
//               Tasnime{" "}
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-amber-400 to-primary/60">
//                 Residences
//               </span>
//             </h1>

//             <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
//               Premium Living, Redefined – A secure, elegant, and contemporary
//               living experience in the heart of Marrakech.
//             </p>

//             <Button
//               asChild
//               size="lg"
//               className="group px-8 py-6 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-2xl shadow-primary/20 hover:shadow-primary/40 hover:scale-105 text-lg animate-fade-in-up animation-delay-300"
//             >
//               <Link to="/contact" className="flex items-center gap-2">
//                 Book a Visit
//                 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//               </Link>
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* Introduction */}
//       <section className="py-20 relative">
//         <div className="container px-4 md:px-6">
//           <div className="max-w-4xl mx-auto">
//             <div className="prose prose-lg prose-invert max-w-none">
//               <p className="text-xl text-muted-foreground leading-relaxed text-center">
//                 Tasnime Residences offer a secure, elegant, and contemporary
//                 living experience. Combining landscaped gardens, communal and
//                 private pools, and superior finishes, our residences are
//                 designed for comfort, safety, and style.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Key Features */}
//       <section className="py-20 relative">
//         <div className="container px-4 md:px-6">
//           <div className="text-center space-y-4 mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-foreground">
//               Luxury Amenities
//             </h2>
//             <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//               Every detail designed for your comfort and peace of mind
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
//             {features.map((feature, index) => (
//               <div
//                 key={index}
//                 className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/10"
//               >
//                 <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
//                   <feature.icon className="w-7 h-7 text-primary" />
//                 </div>
//                 <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
//                   {feature.title}
//                 </h3>
//                 <p className="text-muted-foreground leading-relaxed">
//                   {feature.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Housing Types */}
//       <section className="py-20 relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />

//         <div className="container relative px-4 md:px-6">
//           <div className="text-center space-y-4 mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-foreground">
//               Available Residences
//             </h2>
//             <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//               Choose from a variety of layouts designed to fit your lifestyle
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
//             {housingTypes.map((housing, index) => (
//               <div
//                 key={index}
//                 className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/10"
//               >
//                 <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-[100px] opacity-50 group-hover:opacity-70 transition-opacity" />

//                 <div className="relative p-8 space-y-6">
//                   <div className="flex items-start justify-between">
//                     <div className="space-y-2">
//                       <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
//                         {housing.type}
//                       </h3>
//                       <p className="text-muted-foreground">
//                         {housing.description}
//                       </p>
//                     </div>
//                     <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
//                       <housing.icon className="w-6 h-6 text-primary" />
//                     </div>
//                   </div>

//                   <div className="flex items-center gap-6 pt-4 border-t border-border/50">
//                     <div className="flex items-center gap-2">
//                       <Bed className="w-5 h-5 text-primary" />
//                       <span className="text-sm text-foreground/80">
//                         {housing.bedrooms} bed
//                       </span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <Bath className="w-5 h-5 text-primary" />
//                       <span className="text-sm text-foreground/80">
//                         {housing.bathrooms} bath
//                       </span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <Maximize className="w-5 h-5 text-primary" />
//                       <span className="text-sm text-foreground/80">
//                         {housing.size}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Sustainable Construction */}
//       <section className="py-20 relative">
//         <div className="container px-4 md:px-6">
//           <div className="max-w-4xl mx-auto">
//             <div className="text-center space-y-4 mb-12">
//               <h2 className="text-4xl md:text-5xl font-bold text-foreground">
//                 Sustainable Construction
//               </h2>
//               <p className="text-lg text-muted-foreground">
//                 Built with the environment and your comfort in mind
//               </p>
//             </div>

//             <div className="grid md:grid-cols-2 gap-6">
//               {[
//                 "Thermal and acoustic insulation",
//                 "Double-glazed facades",
//                 "LED lighting throughout",
//                 "INVERTER air conditioning",
//                 "Eco-friendly materials",
//                 "Energy-efficient design",
//                 "Water conservation systems",
//                 "Green building standards",
//               ].map((spec, index) => (
//                 <div
//                   key={index}
//                   className="flex items-start gap-3 p-4 rounded-xl bg-card/30 border border-border/50 hover:border-primary/30 transition-all"
//                 >
//                   <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
//                   <span className="text-foreground/90">{spec}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-amber-500/10" />

//         <div className="container relative px-4 md:px-6">
//           <div className="max-w-3xl mx-auto text-center space-y-8">
//             <h2 className="text-4xl md:text-5xl font-bold text-foreground">
//               Your Dream Home Awaits
//             </h2>
//             <p className="text-xl text-muted-foreground">
//               Schedule a visit today and experience the Tasnime Residences
//               lifestyle firsthand.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Button
//                 asChild
//                 size="lg"
//                 className="group px-8 py-6 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-2xl shadow-primary/20 hover:shadow-primary/40 hover:scale-105 text-lg"
//               >
//                 <Link to="/contact" className="flex items-center gap-2">
//                   Book a Visit
//                   <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                 </Link>
//               </Button>
//               <Button
//                 asChild
//                 size="lg"
//                 variant="outline"
//                 className="px-8 py-6 border-2 border-primary/30 hover:border-primary hover:bg-primary/5 rounded-xl transition-all duration-300 text-lg font-semibold"
//               >
//                 <Link to="/gallery">View Gallery</Link>
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }


function Residences() {
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

export default Residences;
