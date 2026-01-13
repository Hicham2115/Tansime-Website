import React from "react";
import { Home, ArrowLeft, Search, Mail } from "lucide-react";

function NotFound() {
  return (
    <div className="min-h-screen  flex items-center justify-center p-4 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#65891c]/5 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-0 left-0 w-96 h-96 bg-[#bafc0c]/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      {/* Floating shapes */}
      <div className="absolute top-20 left-20 w-20 h-20 border-4 border-[#65891c]/20 rounded-lg rotate-12 animate-bounce"></div>
      <div
        className="absolute bottom-40 right-40 w-16 h-16 border-4 border-[#bafc0c]/30 rounded-full animate-bounce"
        style={{ animationDelay: "0.5s" }}
      ></div>

      <div className="relative z-10 max-w-4xl w-full">
        <div className="text-center space-y-8">
          {/* 404 Number*/}
          <div className="relative">
            <h1 className="text-[150px] sm:text-[200px] md:text-[250px] lg:text-[170px] font-black text-transparent bg-clip-text bg-linear-to-r from-[#a3d938] to-[#bafc0c] leading-none select-none">
              404
            </h1>
            <div className="absolute inset-0 text-[150px] sm:text-[200px] md:text-[250px] font-black text-[#65891c]/5 blur-sm leading-none select-none">
              404
            </div>
          </div>

          {/* Error Message */}
          <div className="space-y-4 -mt-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-black text-white">
              Oops! <span className="text-[#a3d938]">Page Not Found</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4 leading-relaxed">
              The page you're looking for seems to have wandered off into the
              digital wilderness. Don't worry, we'll help you find your way
              back!
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
            <button
              onClick={() => (window.location.href = "/")}
              className="group relative px-4 py-3 bg-[#65891c] text-white font-bold rounded-xl hover:bg-[#bafc0c] hover:text-[#65891c] transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(186,252,12,0.5)] hover:scale-105 flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              <Home className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Go Home</span>
            </button>

            <button
              onClick={() => window.history.back()}
              className="group cursor-pointer relative px-4 py-3 bg-[#0f1215] text-[#bafc0c] font-bold rounded-xl border-2 border-[#65891c] hover:bg-[#65891c] hover:text-white hover:border-[#bafc0c] transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(186,252,12,0.3)] hover:scale-105 flex items-center gap-3 w-full sm:w-auto justify-center overflow-hidden"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span>Go Back</span>
            </button>
          </div>

          {/* Help Section */}
          <div className="mt-12 pt-8 border-t-2 border-gray-200">
            <p className="text-gray-300 mb-4 font-semibold">
              Need help finding something?
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a
                href="/"
                className="text-[#a3d938] hover:text-[#bafc0c] transition-colors font-medium hover:underline"
              >
                Home
              </a>
              <span className="text-gray-300">•</span>
              <a
                href="/services"
                className="text-[#a3d938] hover:text-[#bafc0c] transition-colors font-medium hover:underline"
              >
                Services
              </a>
              <span className="text-gray-300">•</span>
              <a
                href="/about"
                className="text-[#a3d938] hover:text-[#bafc0c] transition-colors font-medium hover:underline"
              >
                About Us
              </a>
              <span className="text-gray-300">•</span>
              <a
                href="/contact"
                className="text-[#a3d938] hover:text-[#bafc0c] transition-colors font-medium hover:underline flex items-center gap-1"
              >
                <Mail className="w-4 h-4" />
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
