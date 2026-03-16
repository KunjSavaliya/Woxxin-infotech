"use client";
import React, { useEffect } from "react";
import Button from "@/app/Reusable/Button";
import Link from "next/link";

function Page404() {
  useEffect(() => {
    document.title = "Not Found - Woxxin Solution";
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#110f27] flex items-center justify-center">

      {/* Image */}
      <img
        src="/HomePages/2x.png"
        alt="404 Not Found"
        className="absolute inset-0 w-full h-full object-fill"
      />

      {/* Button */}
      <div className="absolute bottom-8 w-full flex justify-center ">
        <Link href="/" className=" flex justify-center" >
          <Button
            text="Go to Home page"
            iconColor="#6C63FF"
            className="w-auto flex items-center justify-center gap-3 text-white font-semibold py-3 rounded-xl border border-[#5961F9] hover:bg-[#5961F9] transition bg-[#110F27]"
          />
        </Link>
      </div >

    </div >
  );
}

export default Page404;