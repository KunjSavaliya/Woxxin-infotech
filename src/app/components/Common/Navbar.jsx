"use client";
import React, { useState, useEffect, useRef } from "react";
import { HiMenu, HiX, HiChevronDown, HiChevronUp } from "react-icons/hi";
import { useRouter, usePathname } from "next/navigation";
import "animate.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const dropdownRef = useRef(null);

  const dropdownItems = [
    {
      title: "Mobile Apps",
      navigate: "/components/pages/eco-system/mobile-app",
    },
    {
      title: "Mobile Games",
      navigate: "/components/pages/eco-system/mobile-game",
    },
    {
      title: "H5 Games / Quiz",
      navigate: "/components/pages/eco-system/h5-game",
    },
    { title: "Video Ads", navigate: "/components/pages/eco-system/video-ads" },
    {
      title: "Google Ads",
      navigate: "/components/pages/eco-system/google-ads",
    },
  ];

  const handleNavigation = (path) => {
    setIsDropdownOpen(false);
    setMobileDropdownOpen(false);
    setIsOpen(false);
    if (path) router.push(path);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isActive = (path) => pathname === path;
  const isEcosystemActive =
    pathname.startsWith("/components/pages/eco-system/eco-system") ||
    dropdownItems.some((item) => pathname.startsWith(item.navigate));

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-[#110f27] shadow-md">
      <div className="flex items-center justify-between p-4 text-white lg:justify-around">
        <img
          src="/logo.png"
          alt="logo"
          className="cursor-pointer w-28"
          onClick={() => handleNavigation("/")}
        />

        {/* Desktop Nav */}
        <div className="items-center hidden gap-8 text-xl font-light lg:flex">
          <p
            onClick={() => handleNavigation("/components/pages/aboutus")}
            className={`relative cursor-pointer after:content-[''] after:absolute after:left-1/2 after:translate-x-[-50%] after:bottom-[-6px] after:h-[3px] after:w-[70%] after:rounded-full after:bg-[#6960EB] ${
              isActive("/components/pages/aboutus") || isActive("/")
                ? "text-white after:block"
                : "after:hidden"
            }`}
          >
            About Us
          </p>

          <div className="relative" ref={dropdownRef}>
            <div
              className="relative flex items-center cursor-pointer"
              onClick={() =>
                handleNavigation("/components/pages/eco-system/eco-system")
              }
            >
              <span
                className={`relative after:content-[''] after:absolute after:left-1/2 after:translate-x-[-50%] after:bottom-[-6px] after:h-[3px] after:w-[70%] after:rounded-full after:bg-[#6960EB] ${
                  isEcosystemActive ? "text-white after:block" : "after:hidden"
                }`}
              >
                Ecosystem
              </span>
              <div
                className="ml-1"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsDropdownOpen(!isDropdownOpen);
                }}
              >
                {isDropdownOpen ? <HiChevronUp /> : <HiChevronDown />}
              </div>
            </div>

            {isDropdownOpen && (
              <div className="absolute mt-4 bg-white text-black border border-[#6C63FF] shadow-xl rounded-2xl p-4 w-56 z-50">
                {dropdownItems.map((item, index) => (
                  <div key={index}>
                    <div
                      className={`cursor-pointer transition-colors
                        ${
                          isActive(item.navigate)
                            ? "text-[#6C63FF] font-semibold"
                            : "text-black hover:text-[#6C63FF]"
                        }`}
                      onClick={() => handleNavigation(item.navigate)}
                    >
                      <p className="text-lg">{item.title}</p>
                    </div>
                    {index < dropdownItems.length - 1 && (
                      <hr className="my-2" />
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          <p
            onClick={() => handleNavigation("/components/pages/investment")}
            className={`relative cursor-pointer after:content-[''] after:absolute after:left-1/2 after:translate-x-[-50%] after:bottom-[-6px] after:h-[3px] after:w-[70%] after:rounded-full after:bg-[#6960EB] ${
              isActive("/components/pages/investment")
                ? "text-white after:block"
                : "after:hidden"
            }`}
          >
            Investment
          </p>
          <p
            onClick={() => handleNavigation("/components/pages/publishing")}
            className={`relative cursor-pointer after:content-[''] after:absolute after:left-1/2 after:translate-x-[-50%] after:bottom-[-6px] after:h-[3px] after:w-[70%] after:rounded-full after:bg-[#6960EB] ${
              isActive("/components/pages/publishing")
                ? "text-white after:block"
                : "after:hidden"
            }`}
          >
            Publishing
          </p>
          <p
            onClick={() => handleNavigation("/components/pages/career")}
            className={`relative cursor-pointer after:content-[''] after:absolute after:left-1/2 after:translate-x-[-50%] after:bottom-[-6px] after:h-[3px] after:w-[70%] after:rounded-full after:bg-[#6960EB] ${
              isActive("/components/pages/career")
                ? "text-white after:block"
                : "after:hidden"
            }`}
          >
            Career
          </p>

          <p
            onClick={() => handleNavigation("/components/pages/contact-us")}
            className={`relative cursor-pointer after:content-[''] after:absolute after:left-1/2 after:translate-x-[-50%] after:bottom-[-6px] after:h-[3px] after:w-[70%] after:rounded-full after:bg-[#6960EB] ${
              isActive("/components/pages/contact-us")
                ? "text-white after:block"
                : "after:hidden"
            }`}
          >
            Contact Us
          </p>
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden ">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <HiX size={30} /> : <HiMenu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-[#110f27] z-40 p-4 animate__animated animate__fadeInDown overflow-y-auto">
          <div className="flex items-center justify-between mb-6">
            <img
              src="/logo.png"
              alt="logo"
              className="w-28"
              onClick={() => handleNavigation("/")}
            />
            <button onClick={() => setIsOpen(false)}>
              <HiX size={30} />
            </button>
          </div>

          <div className="flex flex-col gap-5">
            {/* About Us */}
            <p
              onClick={() => handleNavigation("/components/pages/aboutus")}
              className={`text-xl font-semibold cursor-pointer
      ${
        isActive("/components/pages/aboutus") || isActive("/")
          ? "text-[#6C63FF]"
          : "text-white"
      }`}
            >
              About Us
            </p>

            {/* Ecosystem */}
            <div className="mb-2">
              <p
                className={`flex items-center justify-between text-xl font-semibold cursor-pointer
        ${isEcosystemActive ? "text-[#6C63FF]" : "text-white"}`}
                onClick={() =>
                  handleNavigation("/components/pages/eco-system/eco-system")
                }
              >
                Ecosystem
                <span
                  onClick={(e) => {
                    e.stopPropagation();
                    setMobileDropdownOpen(!mobileDropdownOpen);
                  }}
                >
                  {mobileDropdownOpen ? <HiChevronUp /> : <HiChevronDown />}
                </span>
              </p>

              {/* Ecosystem dropdown */}
              {mobileDropdownOpen && (
                <div className="mt-3 ml-4 flex flex-col gap-3">
                  {dropdownItems.map((item, index) => (
                    <p
                      key={index}
                      onClick={() => handleNavigation(item.navigate)}
                      className={`cursor-pointer
              ${
                isActive(item.navigate)
                  ? "text-[#6C63FF] font-semibold"
                  : "text-white"
              }`}
                    >
                      {item.title}
                    </p>
                  ))}
                </div>
              )}
            </div>

            {/* Investment */}
            <p
              onClick={() => handleNavigation("/components/pages/investment")}
              className={`text-xl font-semibold cursor-pointer
      ${
        isActive("/components/pages/investment")
          ? "text-[#6C63FF]"
          : "text-white"
      }`}
            >
              Investment
            </p>

            {/* Publishing */}
            <p
              onClick={() => handleNavigation("/components/pages/publishing")}
              className={`text-xl font-semibold cursor-pointer
      ${
        isActive("/components/pages/publishing")
          ? "text-[#6C63FF]"
          : "text-white"
      }`}
            >
              Publishing
            </p>

            {/* Career */}
            <p
              onClick={() => handleNavigation("/components/pages/career")}
              className={`text-xl font-semibold cursor-pointer
      ${
        isActive("/components/pages/career") ? "text-[#6C63FF]" : "text-white"
      }`}
            >
              Career
            </p>

            {/* Contact */}
            <p
              onClick={() => handleNavigation("/components/pages/contact-us")}
              className={`text-xl font-semibold cursor-pointer
      ${
        isActive("/components/pages/contact-us")
          ? "text-[#6C63FF]"
          : "text-white"
      }`}
            >
              Contact Us
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
