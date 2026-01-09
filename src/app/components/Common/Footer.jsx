import React from 'react';
import Link from 'next/link';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import Text from '@/app/Reusable/Text';

function Footer() {
  const AdFormats = [
    'Mobile Apps',
    'Mobile Games',
    'H5 Games / Quiz',
    'Video Ads',
    'Google Ads',
    'Investment',
    'App Acquire',
  ];

  return (
    <footer className="bg-[#110f27] text-gray-300 mt-[-3px]">
      <div className="max-w-[99rem] mx-auto pl-16 pr-16 pt-20">

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* LEFT COLUMN */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 ">

            {/* Head Office */}
            <div className="space-y-4">
              <Text size="text-xl font-semibold text-white text-start" >
Register Office
  </Text>

              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-gray-400 mt-1 shrink-0" />
                <p className="text-[16px] md:text-[18px] leading-relaxed">
                  128, Royal Plaza, Ved Road,<br />
                  Surat, Gujarat, India – 395004
                </p>
              </div>
            </div>

            {/* Branch Office */}
            <div className="space-y-4">
              <Text size="text-xl font-semibold text-white text-start">
                Corporate Office
              </Text>

              <ul className="space-y-3 text-[16px] md:text-[18px] leading-relaxed">
            

                <li className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-gray-400 mt-1 shrink-0" />
                  <p>
                    812–815, Cyber City, Uttran,<br />
                    Mota Varachha, Surat,<br />
                    Gujarat, India – 394105
                  </p>
                </li>
                    <li className="flex items-center gap-3">
                  <FaEnvelope className="text-gray-400 shrink-0" />
                  <a href="mailto:woxxin@gmail.com">woxxin@gmail.com</a>
                </li>

                <li className="flex items-center gap-3">
                  <FaPhoneAlt className="text-gray-400 shrink-0" />
                  <a href="tel:+919313903561">+91-93139 03561</a>
                </li>
              </ul>
            </div>

          </div>

          {/* RIGHT COLUMN */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 ">

            {/* Our Solutions */}
            <div className="space-y-4">
              <Text size="text-xl font-semibold text-white text-start">
                Our Solutions
              </Text>

              <ul className="space-y-2 text-[16px] md:text-[18px]">
                {AdFormats.map((item, index) => (
                  <li key={index} className="hover:text-white transition">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-4">
              <Text size="text-xl font-semibold text-white text-start">
                Company
              </Text>
<ul className="space-y-2 text-[16px] md:text-[18px]">
  <li className="group">
    <Link
      href="/components/pages/aboutus"
      className="relative inline-block pb-1"
    >
      About Us
      <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#5961F9] transition-all duration-300 group-hover:w-full" />
    </Link>
  </li>

  <li className="group">
    <Link
      href="/components/pages/career"
      className="relative inline-block pb-1"
    >
      Career
      <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#5961F9] transition-all duration-300 group-hover:w-full" />
    </Link>
  </li>

  <li className="group">
    <Link
      href="/components/pages/contactus"
      className="relative inline-block pb-1"
    >
      Contact Us
      <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#5961F9] transition-all duration-300 group-hover:w-full" />
    </Link>
  </li>

  <li className="group">
    <Link
      href="/components/pages/investment"
      className="relative inline-block pb-1"
    >
      Investment
      <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#5961F9] transition-all duration-300 group-hover:w-full" />
    </Link>
  </li>
</ul>
            </div>

          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-16 pt-6 pb-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Woxxin Solution. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;
