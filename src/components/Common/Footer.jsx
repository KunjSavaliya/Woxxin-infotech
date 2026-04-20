import React from "react";
import Link from "next/link";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import Text from "@/app/Reusable/Text";


function Footer() {
  const AdFormats = [
    { name: "Mobile Apps", link: "/mobile-app" },
    { name: "Mobile Games", link: "/mobile-game" },
    { name: "H5 Games / Quiz", link: "/h5-game" },
    { name: "Video Ads", link: "/video-ads" },
    { name: "Google Ads", link: "/google-ads" },
    { name: "Investment", link: "/investment" },
    { name: "Publishing", link: "/publishing" },
  ];

  return (
    <footer className="bg-[#03000F] text-gray-300 mt-[-3px]">
      <div className="max-w-[99rem] mx-auto pl-16 pr-16 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 ">
            <div className="space-y-5">
              <Text className=" text-xl font-semibold text-white text-start">
                Register Office
              </Text>
              <div className="flex items-start gap-3">
                <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-300">
                  128, Royal Plaza, Ved Road,
                  <br />
                  Surat, Gujarat, India – 395004
                </p>
              </div>
              <div className="flex items-center gap-4 sm:gap-5 mt-2">
                {/* <Link
                  href="#"
                  className="bg-white/10 p-2.5 rounded-full hover:bg-blue-500 transition duration-300 transform hover:scale-110"
                >
                  <FaFacebookF size={18} className="text-white" />
                </Link> */}

                <Link
                  href="https://www.linkedin.com/company/woxxinsolution/"
                  className="bg-white/10 p-2.5 rounded-full hover:bg-blue-700 transition duration-300 transform hover:scale-110"
                >
                  <FaLinkedinIn size={18} className="text-white" />
                </Link>

                <Link
                  href="https://www.instagram.com/woxxinsolution?utm_source=qr&igsh=MWl0d2p4ZGhsdDE0ag%3D%3D"
                  className="bg-white/10 p-2.5 rounded-full hover:bg-pink-500 transition duration-300 transform hover:scale-110"
                >
                  <FaInstagram size={18} className="text-white" />
                </Link>

                {/* <Link
                  href="#"
                  className="bg-white/10 p-2.5 rounded-full hover:bg-sky-400 transition duration-300 transform hover:scale-110"
                >
                  <FaTwitter size={18} className="text-white" />
                </Link> */}

                {/* <Link
                  href="https://www.youtube.com/channel/UCJJOqSmgPQuQiGoCVGdAWZQ"
                  target="_blank"
                  className="bg-white/10 p-2.5 rounded-full hover:bg-red-500 transition duration-300 transform hover:scale-110"
                >
                  <FaYoutube size={18} className="text-white" />
                </Link> */}
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
                    812–815, Cyber City, Uttran,
                    <br />
                    Mota Varachha, Surat,
                    <br />
                    Gujarat, India – 394105
                  </p>
                </li>
                <li className="flex items-center gap-3">
                  <FaEnvelope className="text-gray-400 shrink-0" />
                  <a href="mailto:contact@woxxin.com">contact@woxxin.com</a>
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
              <ul className="space-y-3 text-[16px] md:text-[18px]">
                {AdFormats.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.link}
                      className="relative inline-block group pb-1"
                    >
                      <span className="absolute left-0 bottom-0 h-[2px] w-full bg-[#5961F9] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>

                      <span className="text-gray-300 group-hover:text-white transition">
                        {item.name}
                      </span>
                    </Link>
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
                    href="/aboutus"
                    className="relative inline-block pb-1"
                  >
                    About Us
                    <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#5961F9] transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>

                <li className="group">
                  <Link
                    href="/career"
                    className="relative inline-block pb-1"
                  >
                    Career
                    <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#5961F9] transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>

                <li className="group">
                  <Link
                    href="/contact"
                    className="relative inline-block pb-1"
                  >
                    Contact Us
                    <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#5961F9] transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>

                <li className="group">
                  <Link
                    href="/investment"
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
