"use client";
import React, { useEffect } from "react";
import Text from "../../../Reusable/Text";
import Button from "@/app/Reusable/Button";
import "animate.css";
import ScrollAnimation from "react-animate-on-scroll";
import CountUp from "react-countup";
import { useRouter } from "next/navigation";
import GlobalPartners from "@/app/Reusable/GlobalPartners";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import { useState } from "react";
import Globe from "./earth/earth";
import MobileAppSection from "@/app/Reusable/MobileSection";


function Aboutus() {
  const router = useRouter();
  const [selectedGame, setSelectedGame] = useState(null);
  const handleMouseEnter = (game) => {
    clearTimeout(hoverTimeout);
    hoverTimeout = setTimeout(() => {
      setSelectedGame(game);
    }, 200); // small delay for smooth UX
  };

  const handleMouseLeave = () => {
    hoverTimeout = setTimeout(() => {
      setSelectedGame(null);
    }, 200);
  };
  const games = [
    {
      title: "Arrow Puzzle",
      img: "/HomePages/G1.png",
      logo: "/HomePages/logo1.png",
      playstore: "https://play.google.com",
      appstore: "https://apple.com/app-store",
      screenshots: [
        "/HomePages/G1-1.png",
        "/HomePages/G1-2.png",
        "/HomePages/G1-3.png"
      ]
    },
    {
      title: "Screw Puzzle",
      img: "/HomePages/G2.png",
      logo: "/HomePages/AboutUs/ScrewLogo.png",
      playstore: "https://play.google.com",
      appstore: "https://apple.com/app-store",
      screenshots: [
        "/HomePages/AboutUs/Screw1.png",
        "/HomePages/AboutUs/Screw2.png",
        "/HomePages/AboutUs/Screw3.png"
      ]
    },
    {
      title: "Screw Puzzle",
      img: "/HomePages/G3.png",
      logo: "/HomePages/logo3.png",
      playstore: "https://play.google.com",
      appstore: "https://apple.com/app-store",
      screenshots: [
        "/HomePages/G3-1.png",
        "/HomePages/G3-2.png",
        "/HomePages/G3-3.png"
      ]
    },
    {
      title: "Snake Arrow Puzzle",
      img: "/HomePages/G4.png",
      logo: "/HomePages/logo4.png",
      playstore: "https://play.google.com",
      appstore: "https://apple.com/app-store",
      screenshots: [
        "/HomePages/G4-1.png",
        "/HomePages/G4-2.png",
        "/HomePages/G4-3.png"
      ]
    },
    {
      title: "Wool 3D Puzzle",
      img: "/HomePages/G5.png",
      logo: "/HomePages/logo5.png",
      playstore: "https://play.google.com",
      appstore: "https://apple.com/app-store",
      screenshots: [
        "/HomePages/G5-1.png",
        "/HomePages/G5-2.png",
        "/HomePages/G5-3.png"
      ]
    },
    {
      title: "Arrow Puzzle",
      img: "/HomePages/G6.png",
      logo: "/HomePages/logo6.png",
      playstore: "https://play.google.com",
      appstore: "https://apple.com/app-store",
      screenshots: [
        "/HomePages/G6-1.png",
        "/HomePages/G6-2.png",
        "/HomePages/G6-3.png"
      ]
    }
  ];

  useEffect(() => {
    document.title = "About Us - Woxxin Solution";
  }, []);

  const handleClick = () => {
    router.push("/components/pages/eco-system/eco-system");
  };
  return (
    <>
      <MobileAppSection
        bgImageSrc="/HomePages/Homedesign.png"
        logoSrc="/HomePages/Google.png"
        iconSrc="/HomePages/AboutUs/AboutUSD.png"
        title="Accelerate Your App / H5 Game Growth"
        title1="Woxxin Solutions is a dynamic company focused on creating
              innovative Mobile Applications and engaging Mobile games, boasting
              over 650 million downloads globally."
        bgImageClassNames="h-full"
        iconClassNames=" md:w-auto lg:w-full h-[400px]"

      />
      <div className="flex flex-wrap justify-center gap-28 mt-10">

        <div>
          <div className="relative flex items-center justify-center h-[180px]">
            <h1 className="absolute text-[120px] md:text-[90px] font-bold text-transparent outline-blue opacity-50 select-none">
              100M+
            </h1>
            <h1 className="absolute bottom-4 text-[50px] md:text-[65px] font-semibold text-blue-gradient glow-blue">
              <CountUp end={100} duration={10} suffix="M+" />
            </h1>
          </div>
          <div>
            <Text className="text-white text-3xl font-bold">Global Downloads</Text>
          </div>
        </div>

        <div>
          <div className="relative flex items-center justify-center h-[180px]">
            <h1 className="absolute text-[120px] md:text-[90px] font-bold text-transparent outline-green opacity-50 select-none">
              50M+
            </h1>
            <h1 className="absolute bottom-4 text-[50px] md:text-[65px] font-semibold text-green-gradient glow-green">
              <CountUp end={50} duration={10} suffix="M+" />
            </h1>
          </div>
          <div>
            <Text className="text-white text-3xl font-bold">Monthly Active Users</Text>
          </div>
        </div>

      </div>
      <div className="">
        <div className="mt-10 w-full h-[1px] bg-gradient-to-r from-transparent via-[#434343] to-transparent opacity-50"></div>
      </div>

      <Globe />

      <div>
        <div className="relative flex items-center justify-center h-[180px]">
          <h1 className="absolute text-[90px] md:text-[80px] font-bold outline-soft select-none">
            Mobile Games
          </h1>
          <h1 className="absolute bottom-4 text-[50px] md:text-[65px] font-semibold text-soft-gradient">
            Mobile Games
          </h1>

        </div>
      </div>

      <div>
        <div className="relative flex items-center justify-center h-[180px]">
          <h1 className="absolute text-[90px] md:text-[50px] font-bold outline-softWS select-none">
            Why Choose Woxxin Solution
          </h1>
          <h1 className="absolute bottom-10 text-[50px] md:text-[45px] font-semibold text-soft-gradientWS">
            Why Choose Woxxin Solution
          </h1>

        </div>
      </div>
      <div className="relative w-full h-[500px] md:h-[650px] lg:h-[750px] overflow-hidden">

        {/* 🌌 BACKGROUND IMAGE */}
        <img
          src="/HomePages/AboutUs/WhyCBg.png"
          alt="background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* 📦 OVERLAY CONTENT IMAGE */}
        <div className="relative z-10 flex items-center justify-center h-full px-4">
          <img
            src="/HomePages/AboutUs/WhyC.png"
            alt="content"
            className="w-full max-w-[900px] md:max-w-[1100px] lg:max-w-[1300px] object-contain"
          />
        </div>

      </div>

      <div className="flex flex-wrap justify-center gap-8 bg-gray-50 p-6 md:p-12">
        {games.map((game, index) => (
          <div
            key={index}
            onClick={() => setSelectedGame(game)}
            className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-500 w-full sm:w-[320px] md:w-[360px] cursor-pointer"
          >
            {/* IMAGE */}
            <div className="relative  overflow-hidden">
              <img
                src={game.img}
                alt={game.title}
                className="w-full h-full object-fill transition duration-500 group-hover:scale-110"
              />

              {/* HOVER OVERLAY */}
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                <p className="text-white text-lg font-semibold">
                  View Details
                </p>
              </div>
            </div>

            {/* FOOTER */}
            <div className="p-4 flex items-center justify-center bg-[#6510d5]">
              <p className="text-lg md:text-xl text-white font-medium">
                {game.title}
              </p>
            </div>
          </div>
        ))}
      </div>

      {selectedGame && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-3 sm:p-6">

          {/* CLOSE BUTTON */}
          <button
            onClick={() => setSelectedGame(null)}
            className="fixed top-4 right-4 z-50 text-white text-3xl hover:scale-110 transition"
          >
            ✕
          </button>

          {/* MODAL BOX */}
          <div className="w-full max-w-6xl max-h-[90vh] bg-white rounded-2xl overflow-hidden flex flex-col md:flex-row">

            {/* LEFT SIDE */}
            <div className="w-full md:w-[20%] flex flex-row sm:flex-row md:flex-col  items-center justify-center p-5 sm:p-6 gap-4 text-center bg-gray-100">

              <img
                src={selectedGame.logo || selectedGame.img}
                alt="logo"
                className="w-16 h-16 sm:w-32 sm:h-32 object-contain"
              />

              <h2 className="text-xl sm:text-3xl font-bold text-black">
                {selectedGame.title}
              </h2>

              {/* BUTTONS */}
              <div className="flex flex-col gap-3 w-full sm:w-auto">
                <a
                  href={selectedGame.playstore}
                  target="_blank"
                  className="flex justify-center items-center gap-2 bg-black text-white px-4 py-2 rounded-md hover:scale-105 transition w-full sm:w-auto"
                >
                  <FaGooglePlay />
                  Play Store
                </a>

                <a
                  href={selectedGame.appstore}
                  target="_blank"
                  className="flex justify-center items-center gap-2 bg-black text-white px-4 py-2 rounded-md hover:scale-105 transition w-full sm:w-auto"
                >
                  <FaApple />
                  App Store
                </a>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="w-full md:w-[80%] overflow-y-auto p-4">

              <div className="flex gap-4">
                {(selectedGame.screenshots || [selectedGame.img]).map(
                  (img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt="screenshot"
                      className="w-full h-[350px] sm:h-[350px] md:h-[400px] xl:h-[500px] object-fill rounded-lg"
                    />
                  )
                )}
              </div>

            </div>
          </div>
        </div>
      )}
      <div>
        <GlobalPartners />
      </div>
      <div className="mt-[-3px] xl:p-0  p-6">
        <div className="flex flex-col justify-between gap-28 text-white md:flex-row max-w-[90rem] mx-auto">
          <div className="flex items-center w-full md:w-3/5 ">
            <ScrollAnimation animateIn="animate__animated animate__zoomIn">
              <Text className="text-4xl md:text-4xl lg:text-5xl xl:text-[55px] text-white font-light text-start break-words">
                Enhancing Personalized App Experiences for Billions
              </Text>
            </ScrollAnimation>
          </div>
          <div className="w-full mt-6 md:w-2/5 md:mt-0 ">
            <ScrollAnimation animateIn="animate__animated animate__zoomIn">
              <ul className="space-y-4">
                {[
                  "Market Research",
                  "Marketing Optimization",
                  "Product Optimization",
                  "Monetization/Subscription Optimization",
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[#AAB0C0] opacity-80"></span>
                    <span className="text-xl  md:text-lg lg:text-[27px] text-[#AAB0C0]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <div className="relative  mt-[-3px]">
        <div>
          <img
            src="/HomePages/Home6.png"
            alt="Main Background"
            className="w-full h-[35vh] "
          />
        </div>
        <div className="absolute top-0 items-center w-full h-full ">
          <div className="flex justify-center mt-20 sm:mt-12 lg:mt-10 xl:mt-28">
            <Button
              text="Discover Ecosystem"
              iconColor="#6C63FF"
              className="mt-2 sm:mt-5 text-white font-bold border border-[#5961F9]  "
              onButtonClick={handleClick}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Aboutus;
