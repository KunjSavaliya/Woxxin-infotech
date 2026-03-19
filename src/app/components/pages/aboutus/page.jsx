"use client";
import React, { useEffect } from "react";
import Text from "../../../Reusable/Text";
import Button from "@/app/Reusable/Button";
import "animate.css";
import ScrollAnimation from "react-animate-on-scroll";
import CountUp from "react-countup";
import { useRouter } from "next/navigation";
import GlobalPartners from "@/app/Reusable/GlobalPartners";
import { FaGooglePlay, FaAppStoreIos } from "react-icons/fa";
import { useState } from "react";
import Globe from "./earth/earth";
import MobileAppSection from "@/app/Reusable/MobileSection";
import Image from "next/image";
import Link from "next/link";
import FadeUp from "@/app/Reusable/FadeUp";



function Aboutus() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [active, setActive] = useState(null);
  const games = [
    {
      img: "/HomePages/AboutUs/G1.png",
      title: "Snake Arrow : Puzzle Escape",
      playstore: "https://play.google.com/store/apps/details?id=com.snake.arrow.puzzle.game",
      appstore: "",
    },
    {
      img: "/HomePages/AboutUs/G2.png",
      title: "Screw Puzzle 3D - Brain Teaser",
      playstore: "https://play.google.com/store/apps/details?id=com.techxsolution.ScrewPuzzle3DBrainTeaser",
      appstore: "",

    },
    {
      img: "/HomePages/AboutUs/G3.png",
      title: "Wool 3D Puzzle - Yarn Unravel",
      playstore: "https://play.google.com/store/apps/details?id=com.techxsolution.Wool3DPuzzleYarnUnravel",
      appstore: "",

    },
    {
      img: "/HomePages/AboutUs/G4.png",
      title: "Pixel Puzzle",
      playstore: "https://play.google.com/store/apps/details?id=com.pixelpuzzle.puzzle.game",
      appstore: "",

    },
    {
      img: "/HomePages/AboutUs/G5.png",
      title: "Arrow Puzzle - Escape Game",
      playstore: "https://play.google.com/store/apps/details?id=com.techxsolution.ArrowsPuzzleEscapeGame",
      appstore: "",

    },
    {
      img: "/HomePages/AboutUs/G6.png",
      title: "Horse Racing",
      playstore: "",
      appstore: "",
    },
  ];
  const apps = [
    {
      img: "/HomePages/AboutUs/A1.png",
      title: "Messages : SMS Organizer",
      playstore: "https://play.google.com/store/apps/details?id=com.messagetext.sms.messenges.text&hl=en&gl=US",
    },
    {
      img: "/HomePages/AboutUs/A2.png",
      title: "Alarm - Clock & Reminder",
      playstore: "https://play.google.com/store/apps/details?id=com.alarmclock.reminder.alarm&hl=en&gl=IN",
    },
    {
      img: "/HomePages/AboutUs/A3.png",
      title: "Women Workout App",
      playstore: "https://play.google.com/store/apps/details?id=com.workout.weightloss.losebellyfat.fatburning&hl=en&gl=IN",
    },
    {
      img: "/HomePages/AboutUs/A4.png",
      title: "Calorie Counter - My Diet Diary",
      playstore: "https://play.google.com/store/apps/details?id=com.caloriecounter.healthy.dietplan.nutrition&hl=en&gl=IN",
    },
    {
      img: "/HomePages/AboutUs/A5.png",
      title: "AI Chat & Call : Lonely Call",
      playstore: "https://play.google.com/store/apps/details?id=com.ai.character.aichat.aicall&hl=en&gl=IN",
    },
    {
      img: "/HomePages/AboutUs/A6.png",
      title: "Video Downloader 2025",
      playstore: "https://play.google.com/store/apps/details?id=downloader.allvideodownloader.mp4videodownloader.hdvideo.fullhdvideo.mainlens&hl=en&gl=IN",
    },
  ];

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
        bgImageClassNames="h-full "
        iconClassNames=" md:w-auto lg:w-full h-[450px]"

      />
      <div className="flex  flex-wrap justify-evenly mt-10">
        <ScrollAnimation animateIn="animate__animated animate__fadeInUp">
          <div>
            <div className="relative flex items-center justify-center h-[180px]">
              <h1 className="absolute text-[80px] md:text-[90px] font-bold text-transparent outline-blue opacity-50 select-none">
                <CountUp end={100} duration={10} suffix="M+" />

              </h1>
              <h1 className="absolute bottom-4 text-[50px] md:text-[65px] font-semibold text-blue-gradient glow-blue">
                <CountUp end={100} duration={10} suffix="M+" />
              </h1>
            </div>
            <div>
              <Text className="text-white text-3xl font-bold">Global Downloads</Text>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="animate__animated animate__fadeInUp">


          <div>
            <div className="relative flex items-center justify-center h-[180px]">
              <h1 className="absolute text-[80px] md:text-[90px] font-bold text-transparent outline-green opacity-50 select-none">
                <CountUp end={50} duration={10} suffix="M+" />

              </h1>
              <h1 className="absolute bottom-4 text-[50px] md:text-[65px] font-semibold text-green-gradient glow-green">
                <CountUp end={50} duration={10} suffix="M+" />
              </h1>
            </div>
            <div>
              <Text className="text-white text-3xl font-bold">Monthly Active Users</Text>
            </div>
          </div>
        </ScrollAnimation>

      </div >
      <div className="">
        <div className="mt-10 w-full h-[1px] bg-gradient-to-r from-transparent via-[#434343] to-transparent opacity-50"></div>
      </div>

      <Globe />
      <div className="max-w-[90rem] mx-auto">
        <div className="relative flex items-center justify-center h-[180px]">
          <h1 className="absolute text-[50px] md:text-[80px] font-bold outline-soft select-none">
            Mobile Apps
          </h1>
          <h1 className="absolute bottom-10 md:bottom-4 text-[40px] md:text-[65px] font-semibold text-soft-gradient">
            Mobile Apps
          </h1>


        </div>

        <div className="mt-10 px-4 sm:px-6 md:px-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-8 md:gap-10 max-w-[80rem] mx-auto">

            {apps.map((app, index) => (
              <div key={index} className="group flex flex-col items-center">

                <div
                  className="
            relative 
            w-[160px] h-[160px]
            sm:w-[200px] sm:h-[200px]
            md:w-[250px] md:h-[250px]
            lg:w-[280px] lg:h-[280px]
            overflow-hidden
          "
                >
                  {/* Image */}
                  <Image
                    src={app.img}
                    alt={app.title}
                    fill
                    className="
              object-cover 
              transition-all duration-300
              group-hover:blur-sm group-hover:scale-105
            "
                  />

                  {/* Hover overlay */}
                  <div className="
            absolute inset-0 
            flex items-center justify-center gap-5
            opacity-0 group-hover:opacity-100
            transition-all duration-300
          ">
                    {app.playstore && (
                      <Link
                        href={app.playstore}
                        target="_blank"
                        className="text-green-400 text-[28px] sm:text-[60px] hover:scale-125 transition"
                      >
                        <FaGooglePlay />
                      </Link>
                    )}
                    {app.appstore && (
                      <Link
                        href={app.appstore}
                        target="_blank"
                        className="text-blue-400 text-[28px] sm:text-[60px] hover:scale-125 transition"
                      >
                        <FaAppStoreIos />
                      </Link>
                    )}
                  </div>
                </div>

                {/* Title */}
                <p className="text-white mt-3 text-sm sm:text-sm md:text-lg text-center max-w-[320px]">
                  {app.title}
                </p>
              </div>
            ))}

          </div>
        </div>
      </div>


      <div className="relative w-full py-14 px-4 md:px-10">
        <div className="relative flex items-center justify-center h-[180px]">
          <h1 className="absolute text-[50px] md:text-[80px] font-bold outline-soft select-none">
            Mobile Games
          </h1>
          <h1 className="absolute bottom-10 md:bottom-4 text-[40px] md:text-[65px] font-semibold text-soft-gradient">
            Mobile Games
          </h1>
        </div>
        <div className="mt-10 px-4 sm:px-6 md:px-10">

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-8 md:gap-10 max-w-[80rem] mx-auto">

            {games.map((game, index) => (
              <div key={index} className="group flex flex-col items-center">

                <div
                  className="
            relative 
            w-[160px] h-[160px]
            sm:w-[200px] sm:h-[200px]
            md:w-[250px] md:h-[250px]
            lg:w-[280px] lg:h-[280px]
            overflow-hidden
          "
                >
                  {/* Image */}
                  <Image
                    src={game.img}
                    alt={game.title}
                    fill
                    className="
              object-cover 
              transition-all duration-300
              group-hover:blur-sm group-hover:scale-105
            "
                  />

                  {/* Hover overlay */}
                  <div className="
            absolute inset-0 
            flex items-center justify-center gap-5
            opacity-0 group-hover:opacity-100
            transition-all duration-300
          ">
                    {game.playstore && (
                      <Link
                        href={game.playstore}
                        target="_blank"
                        className="text-green-400 text-[28px] sm:text-[60px] hover:scale-125 transition"
                      >
                        <FaGooglePlay />
                      </Link>
                    )}
                    {game.appstore && (
                      <Link
                        href={game.appstore}
                        target="_blank"
                        className="text-blue-400 text-[28px] sm:text-[60px] hover:scale-125 transition"
                      >
                        <FaAppStoreIos />
                      </Link>
                    )}
                  </div>
                </div>

                {/* Title */}
                <p className="text-white mt-3 text-xs sm:text-sm md:text-lg text-center max-w-[320px]">
                  {game.title}
                </p>
              </div>
            ))}

          </div>
        </div>
      </div>

      <div className="block md:hidden">
        <div className="">
          <div className="relative flex items-center justify-center h-[50px] md:h-[120px] ">
            <h1 className="absolute text-[26px] bottom-3 md:bottom-10 sm:text-[40px] md:text-[50px] font-bold outline-softWS select-none">
              Why Choose
            </h1>
            <h1 className="absolute  text-[21px] sm:text-[35px] md:text-[45px] font-semibold text-soft-gradientWS">
              Why Choose
            </h1>

          </div>
        </div>
        <div className="">
          <div className="relative flex items-center justify-center h-[50px]">
            <h1 className="absolute text-[26px] bottom-3 md:bottom-2 sm:text-[40px] md:text-[50px] font-bold outline-softWS select-none">
              Woxxin Solution
            </h1>
            <h1 className="absolute  text-[21px] sm:text-[35px] md:text-[45px] font-semibold text-soft-gradientWS">
              Woxxin Solution
            </h1>

          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <div className="relative flex items-center justify-center h-[120px]">

          <h1 className="absolute text-[50px] bottom-10 font-bold outline-softWS select-none">
            Why Choose Woxxin Solution
          </h1>

          <h1 className="absolute text-[45px] font-semibold text-soft-gradientWS">
            Why Choose Woxxin Solution
          </h1>

        </div>
      </div>
      <div className="w-full aspect-[16/8] md:aspect-[21/9] lg:aspect-[24/9] overflow-hidden ">
        <img
          src="/HomePages/AboutUs/WhyC.png"
          alt="background"
          className="w-full h-full object-fill"
        />
      </div>



      <div className="w-full px-4 md:px-8 xl:px-16 py-6">

        <div className="relative w-full max-w-[1400px] mx-auto aspect-[16/12] md:aspect-[21/15] xl:md:aspect-[21/18]">

          <img
            src="/HomePages/AboutUs/VM.png"
            alt="Mission Vision"
            className="w-full h-full object-contain"
          />

        </div>

      </div>
    </>
  );
}

export default Aboutus;
