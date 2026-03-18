"use client";

export default function EarthAnimation() {
    return (
        <div className="flex items-center justify-center h-screen bg-white">
            <div className="globe"></div>

            <style jsx>{`
        .globe {
          width: 300px;
          height: 300px;
          border-radius: 50%;
          background: radial-gradient(circle at 30% 30%, #ffffff, #dcdcdc);
          position: relative;
          overflow: hidden;
        }

        /* Dots layer */
        .globe::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image: radial-gradient(#3e2a4d 1px, transparent 1px);
          background-size: 6px 6px;
          opacity: 0.6;
          animation: rotate 20s linear infinite;
        }

        /* Lines animation */
        .globe::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(120deg, transparent, #ff4d6d, transparent);
          opacity: 0.3;
          animation: rotateReverse 15s linear infinite;
        }

        @keyframes rotate {
          from {
            transform: rotate(0deg) scale(1.1);
          }
          to {
            transform: rotate(360deg) scale(1.1);
          }
        }

        @keyframes rotateReverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
      `}</style>
        </div>
    );
}