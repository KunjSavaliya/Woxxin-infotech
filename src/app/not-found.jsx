'use client';
import React, { useEffect } from 'react';

import Button from '@/app/Reusable/Button';


import Link from 'next/link';
function Page404() {
 useEffect(() => {
    document.title = 'Not Found - Woxxin Solution';
  }, []);
    return (
        <>
           <div className="relative w-full h-[50dvh] md:h-[90dvh] xl:h-[100dvh]  overflow-hidden bg-[#110f27]" >
      
      {/* Full Image */}
      <img
        src="/HomePages/2x.png"
        alt="404 Not Found"
        className="w-full h-full object-fill md:object-none xl:object-fill"
      />

      {/* Button Overlay */}
      <div className="absolute inset-0 flex items-end justify-center pb-14 sm:pb-20 md:pb-28 ">
        <Link href="/">
           <Button
                        text="Go to Home page"
                        iconColor="#6C63FF"
                        className="w-full  md:text-xl font-semibold py-3 text-white  rounded-md hover:bg-[#5961F9]/10 transition duration-300 mt-2 sm:mt-5   bg-transparent border border-[#5961F9] bg-[#110F27]"
                      >
        
                      </Button>
        </Link>
      </div>

    </div>
        </>
    );
}

export default Page404;
