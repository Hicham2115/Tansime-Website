import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Home, ArrowLeft, Mail, AlertCircle } from "lucide-react";
import img from "@/assets/Imgs/SALON 1.jpg"; // Using a nice background image
import PageTransition from "@/components/PageTransition";

export default function NotFound() {
  return (
    <PageTransition className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-[2px] opacity-50"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(201,169,97,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(201,169,97,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="container relative z-10 px-4 md:px-6 py-20">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#f0ba78]/30 bg-[#f0ba78]/10 backdrop-blur-sm animate-fade-in-up">
            <AlertCircle className="w-4 h-4 text-[#f0ba78]" />
            <span className="text-sm font-medium text-[#f0ba78]">
              404 Error
            </span>
          </div>

          {/* Main Content */}
          <div className="space-y-4">
            <h1 className="text-800xl sm:text-9xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-white/50 to-transparent animate-fade-in-up animation-delay-100">
              404
            </h1>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white animate-fade-in-up animation-delay-200">
              Page Not Found
            </h2>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-300">
              The page you are looking for might have been removed, had its name
              changed, or is temporarily unavailable.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 animate-fade-in-up animation-delay-500">
            <Button
              asChild
              size="lg"
              className="group min-w-[160px] cursor-pointer bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:scale-105"
            >
              <Link to="/" className="flex items-center gap-2">
                <Home className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                Go Home
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="min-w-[160px] cursor-pointer border-2 border-white/20 bg-transparent text-white hover:bg-white hover:text-black hover:scale-105 rounded-xl transition-all duration-300"
            >
              <div
                onClick={() => window.history.back()}
                className="flex items-center gap-2 cursor-pointer"
              >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                Go Back
              </div>
            </Button>
          </div>

          {/* Help Links */}
          <div className="pt-12 animate-fade-in-up animation-delay-700">
            <p className="text-white/50 text-sm mb-4">
              Or explore our other pages:
            </p>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium text-[#f0ba78]">
              <Link
                to="/residences"
                className="hover:text-primary hover:underline transition-colors"
              >
                Residences
              </Link>
              <Link
                to="/business-center"
                className="hover:text-primary hover:underline transition-colors"
              >
                Business Center
              </Link>
              <Link
                to="/contact"
                className="hover:text-primary hover:underline transition-colors flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
