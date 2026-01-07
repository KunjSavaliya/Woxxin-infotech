'use client';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function RouteLoader({ children }) {
    const pathname = usePathname();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        const timeout = setTimeout(() => {
            setLoading(false);
        }, 500); // Adjust delay as needed

        return () => clearTimeout(timeout);
    }, [pathname]);

if (loading) {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#110f27]">
      
      <div className="relative w-24 h-24">

        {/* Rotating Gradient Ring (NO WHITE LINE EVER) */}
        <div
          className="absolute inset-0 rounded-full animate-spin"
          style={{
            background:
              "conic-gradient(from 0deg, #5961F9 0deg, rgba(89,97,249,0.2) 120deg, transparent 240deg)",
            WebkitMask:
              "radial-gradient(farthest-side, transparent calc(100% - 4px), #000 calc(100% - 3px))",
            mask:
              "radial-gradient(farthest-side, transparent calc(100% - 4px), #000 calc(100% - 3px))",
          }}
        />

        {/* Static W (Transparent) */}
        <div
          className="absolute top-1/2 left-1/2 
                     -translate-x-1/2 -translate-y-1/2
                     w-10 h-10 rounded-full
                     border-2 border-[#5961F9]
                     flex items-center justify-center
                     text-[#5961F9] font-extrabold text-lg
                     bg-transparent">
          W
        </div>

      </div>

    </div>
  );
}







    return children;
}
