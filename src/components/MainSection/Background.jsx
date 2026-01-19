import React from "react";

function Background() {
  return (
    <div className="fixed inset-0 -z-10 bg-white overflow-hidden">
      {/* Animated gradient overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(circle at 30% 20%, rgba(18, 90, 50, 0.15) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(192, 215, 111, 0.2) 0%, transparent 50%)",
          animation: "pulse 8s ease-in-out infinite alternate",
        }}
      ></div>

      {/* Large animated green orbs */}
      <div
        className="absolute -top-32 -right-32 w-[800px] h-[800px] bg-gradient-to-br from-[#125a32]/20 via-[#c0d76f]/15 to-transparent rounded-full blur-3xl"
        style={{ animation: "float 20s ease-in-out infinite" }}
      ></div>

      <div
        className="absolute -bottom-40 -left-40 w-[900px] h-[900px] bg-gradient-to-tr from-[#c0d76f]/20 via-[#125a32]/10 to-transparent rounded-full blur-3xl"
        style={{ animation: "float 25s ease-in-out infinite reverse" }}
      ></div>

      <div
        className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-gradient-to-r from-[#125a32]/15 to-transparent rounded-full blur-3xl"
        style={{ animation: "float 18s ease-in-out infinite 5s" }}
      ></div>

      {/* Additional accent orbs with lime green */}
      <div
        className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-gradient-to-bl from-[#c0d76f]/25 to-transparent rounded-full blur-2xl"
        style={{ animation: "float 15s ease-in-out infinite 3s" }}
      ></div>

      <div
        className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-[#125a32]/12 via-[#c0d76f]/10 to-transparent rounded-full blur-3xl"
        style={{ animation: "float 22s ease-in-out infinite 7s" }}
      ></div>

      {/* Geometric circle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.08]">
        <svg width="100%" height="100%" className="w-full h-full">
          <defs>
            <pattern
              id="circlePattern"
              x="0"
              y="0"
              width="120"
              height="120"
              patternUnits="userSpaceOnUse"
            >
              {/* Top left circle */}
              <circle
                cx="0"
                cy="0"
                r="55"
                fill="none"
                stroke="#125a32"
                strokeWidth="2"
              />
              {/* Top right circle */}
              <circle
                cx="120"
                cy="0"
                r="55"
                fill="none"
                stroke="#c0d76f"
                strokeWidth="2"
              />
              {/* Bottom left circle */}
              <circle
                cx="0"
                cy="120"
                r="55"
                fill="none"
                stroke="#c0d76f"
                strokeWidth="2"
              />
              {/* Bottom right circle */}
              <circle
                cx="120"
                cy="120"
                r="55"
                fill="none"
                stroke="#125a32"
                strokeWidth="2"
              />
              {/* Center circle */}
              <circle
                cx="60"
                cy="60"
                r="55"
                fill="none"
                stroke="#125a32"
                strokeWidth="2"
              />

              {/* Vertical lines */}
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="120"
                stroke="#125a32"
                strokeWidth="1.5"
                opacity="0.6"
              />
              <line
                x1="120"
                y1="0"
                x2="120"
                y2="120"
                stroke="#c0d76f"
                strokeWidth="1.5"
                opacity="0.6"
              />

              {/* Horizontal lines */}
              <line
                x1="0"
                y1="0"
                x2="120"
                y2="0"
                stroke="#125a32"
                strokeWidth="1.5"
                opacity="0.6"
              />
              <line
                x1="0"
                y1="120"
                x2="120"
                y2="120"
                stroke="#c0d76f"
                strokeWidth="1.5"
                opacity="0.6"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circlePattern)" />
        </svg>
      </div>

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
        }}
      ></div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -30px) scale(1.05);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.95);
          }
        }

        @keyframes pulse {
          0% {
            opacity: 0.2;
          }
          100% {
            opacity: 0.4;
          }
        }
      `}</style>
    </div>
  );
}

export default Background;