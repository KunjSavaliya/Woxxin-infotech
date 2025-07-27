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
            <div className="fixed top-0 left-0 z-[9999] w-full h-full flex items-center justify-center bg-[#110f27] backdrop-blur-sm">
                <div className="flex space-x-2">
                    <div className="w-4 h-4 bg-[#5961F9] rounded-full animate-bounce"></div>
                    <div className="w-4 h-4 bg-[#5961F9] rounded-full animate-bounce [animation-delay:-0.2s]"></div>
                    <div className="w-4 h-4 bg-[#5961F9] rounded-full animate-bounce [animation-delay:-0.4s]"></div>
                </div>



            </div>
        );
    }

    return children;
}
