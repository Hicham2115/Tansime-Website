import React from "react";

function Background() {
  return (
    <div className="fixed inset-0 -z-10 bg-gradient-to-br from-[#fef9f3] via-[#f5e6d3] to-[#faf8f5]">
      {/* Main gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#d9ac6f]/10 via-transparent to-[#c9944f]/10"></div>

      {/* Animated gradient orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#d9ac6f]/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-gradient-to-tr from-[#c9944f]/15 to-transparent rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-[#d9ac6f]/10 to-[#c9944f]/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(#d9ac6f 1px, transparent 1px), linear-gradient(90deg, #d9ac6f 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>
    </div>
  );
}

export default Background;
