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
import Image from "next/image";
import Link from "next/link";
import FadeUp from "@/app/Reusable/FadeUp";



function Aboutus() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [active, setActive] = useState(null);
  const games = [
    {
      img: "/HomePages/AboutUs/G1.png",
      hoverImg: "/HomePages/AboutUs/G1H.png",
      title: "Snake Arrow",
      link: "https://play.google.com/store/apps/details?id=com.snake.arrow.puzzle.game",
    },
    {
      img: "/HomePages/AboutUs/G2.png",
      hoverImg: "/HomePages/AboutUs/G2H.png",
      title: "Screw Puzzle 3D",
      link: "https://play.google.com/store/apps/details?id=com.techxsolution.ScrewPuzzle3DBrainTeaser",
    },
    {
      img: "/HomePages/AboutUs/G3.png",
      hoverImg: "/HomePages/AboutUs/G3H.png",
      title: "Wool 3D Puzzle",
      link: "https://play.google.com/store/apps/details?id=com.techxsolution.Wool3DPuzzleYarnUnravel",
    },
    {
      img: "/HomePages/AboutUs/G4.png",
      hoverImg: "/HomePages/AboutUs/G4H.png",
      title: "Pixel Puzzle",
      link: "https://play.google.com/store/apps/details?id=com.pixelpuzzle.puzzle.game",
    },
    {
      img: "/HomePages/AboutUs/G5.png",
      hoverImg: "/HomePages/AboutUs/G5H.png",
      title: "Arrow Puzzle",
      link: "https://play.google.com/store/apps/details?id=com.techxsolution.ArrowsPuzzleEscapeGame",
    },
    {
      img: "/HomePages/AboutUs/G6.png",
      hoverImg: "/HomePages/AboutUS/G6H.png",
      title: "Horse Racing",
      link: "",
    },
  ];
  const apps = [
    {
      img: "/HomePages/AboutUs/A1.png",
      hoverImg: "/HomePages/AboutUs/A1H.png",
      title: "Messages : SMS Organizer",
      link: "https://play.google.com/store/apps/details?id=com.messagetext.sms.messenges.text&hl=en&gl=US",
    },
    {
      img: "/HomePages/AboutUs/A2.png",
      hoverImg: "/HomePages/AboutUs/A2H.png",
      title: "Alarm - Clock & Reminder",
      link: "https://play.google.com/store/apps/details?id=com.alarmclock.reminder.alarm&hl=en&gl=IN",
    },
    {
      img: "/HomePages/AboutUs/A3.png",
      hoverImg: "/HomePages/AboutUs/A3H.png",
      title: "Women Workout App",
      link: "https://play.google.com/store/apps/details?id=com.workout.weightloss.losebellyfat.fatburning&hl=en&gl=IN",
    },
    {
      img: "/HomePages/AboutUs/A4.png",
      hoverImg: "/HomePages/AboutUs/A4H.png",
      title: "Calorie Counter - My Diet Diary",
      link: "https://play.google.com/store/apps/details?id=com.caloriecounter.healthy.dietplan.nutrition&hl=en&gl=IN",
    },
    {
      img: "/HomePages/AboutUs/A5.png",
      hoverImg: "/HomePages/AboutUs/A5H.png",
      title: "AI Chat & Call : Lonely Call",
      link: "https://play.google.com/store/apps/details?id=com.ai.character.aichat.aicall&hl=en&gl=IN",
    },
    {
      img: "/HomePages/AboutUs/A6.png",
      hoverImg: "/HomePages/AboutUS/A6H.png",
      title: "Video Downloader 2025",
      link: "https://play.google.com/store/apps/details?id=downloader.allvideodownloader.mp4videodownloader.hdvideo.fullhdvideo.mainlens&hl=en&gl=IN",
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
      <div className="flex flex-wrap justify-around mt-10">
        <ScrollAnimation animateIn="animate__animated animate__fadeInUp">
          <div>
            <div className="relative flex items-center justify-center h-[180px]">
              <h1 className="absolute text-[80px] md:text-[90px] font-bold text-transparent outline-blue opacity-50 select-none">
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
        </ScrollAnimation>
        <ScrollAnimation animateIn="animate__animated animate__fadeInUp">


          <div>
            <div className="relative flex items-center justify-center h-[180px]">
              <h1 className="absolute text-[80px] md:text-[90px] font-bold text-transparent outline-green opacity-50 select-none">
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

        {/* ---------------------------? */}
        <div className="relative w-full py-14 px-4 md:px-10  ">
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10 md:gap-12">
            {apps.map((app, index) => (
              <div
                key={index}
                onMouseEnter={() => setActive(app)}
                className="flex flex-col items-center cursor-pointer"
              >
                <div className="
          relative 
          w-[140px] h-[140px]
          sm:w-[180px] sm:h-[180px]
          md:w-[220px] md:h-[220px]
          lg:w-[250px] lg:h-[250px]
          rounded-2xl overflow-hidden
        ">
                  <Image
                    src={app.img}
                    alt={app.title}
                    fill
                    className="object-fill"
                  />
                </div>
                <p className="text-white mt-3 text-xs sm:text-lg text-center max-w-[140px]">
                  {app.title}
                </p>
              </div>
            ))}
          </div>
          {active && (
            <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center">
              <button
                onClick={() => setActive(null)}
                className="absolute top-6 right-6 text-white text-3xl font-bold z-50 hover:scale-110 transition"
              >
                ✕
              </button>
              <Link href={active.link}>
                <div
                  className="
            relative
            w-[95vw] h-[60vh]
            sm:w-[85vw] sm:h-[70vh]
            md:w-[70vw] md:h-[80vh]
            lg:w-[60vw] lg:h-[85vh]
            rounded-3xl overflow-hidden
            shadow-[0_40px_150px_rgba(0,0,0,0.9)]
            cursor-pointer
            animate-[zoomIn_0.3s_ease]
          "
                >
                  <Image
                    src={active.hoverImg}
                    alt="popup"
                    fill
                    className="object-fill"
                  />
                </div>
              </Link>
            </div>
          )}
          <style jsx>{`
    @keyframes zoomIn {
      from {
        transform: scale(0.8);
        opacity: 0;
      }
      to {
        transform: scale(1);
        opacity: 1;
      }
    }
  `}</style>

        </div>
      </div>


      <div className="max-w-[90rem] mx-auto">
        <div className="relative flex items-center justify-center h-[180px]">
          <h1 className="absolute text-[50px] md:text-[80px] font-bold outline-soft select-none">
            Mobile Games
          </h1>
          <h1 className="absolute bottom-10 md:bottom-4 text-[40px] md:text-[65px] font-semibold text-soft-gradient">
            Mobile Games
          </h1>

        </div>
        {/* ---------------------------? */}
        <div className="relative w-full py-14 px-4 md:px-10">
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10 md:gap-12">
            {games.map((game, index) => (
              <div
                key={index}
                onMouseEnter={() => setActive(game)}
                className="flex flex-col items-center cursor-pointer"
              >
                <div className="
          relative 
          w-[140px] h-[140px]
          sm:w-[180px] sm:h-[180px]
          md:w-[220px] md:h-[220px]
          lg:w-[250px] lg:h-[250px]
          rounded-2xl overflow-hidden
        ">
                  <Image
                    src={game.img}
                    alt={game.title}
                    fill
                    className="object-fill"
                  />
                </div>
                <p className="text-white mt-3 text-xs sm:text-lg text-center max-w-[140px]">
                  {game.title}
                </p>
              </div>
            ))}
          </div>
          {active && (
            <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center">
              <button
                onClick={() => setActive(null)}
                className="absolute top-6 right-6 text-white text-3xl font-bold z-50 hover:scale-110 transition"
              >
                ✕
              </button>
              <Link href={active.link}>
                <div
                  className="
            relative
            w-[95vw] h-[60vh]
            sm:w-[85vw] sm:h-[70vh]
            md:w-[70vw] md:h-[80vh]
            lg:w-[60vw] lg:h-[85vh]
            rounded-3xl overflow-hidden
            shadow-[0_40px_150px_rgba(0,0,0,0.9)]
            cursor-pointer
            animate-[zoomIn_0.3s_ease]
          "
                >
                  <Image
                    src={active.hoverImg}
                    alt="popup"
                    fill
                    className="object-fill"
                  />
                </div>
              </Link>
            </div>
          )}
          <style jsx>{`
    @keyframes zoomIn {
      from {
        transform: scale(0.8);
        opacity: 0;
      }
      to {
        transform: scale(1);
        opacity: 1;
      }
    }
  `}</style>

        </div>
      </div>

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
