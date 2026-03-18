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


function Aboutus() {
  const router = useRouter();

  const games = [
    {
      title: "Arrow Puzzle",
      img: "/HomePages/G1.png",
      playstore: "https://play.google.com",
      appstore: "https://apple.com/app-store"
    },
    {
      title: "Arrow Block Puzzle",
      img: "/HomePages/G2.png",
      playstore: "https://play.google.com",
      appstore: "https://apple.com/app-store"
    },
    {
      title: "Screw Puzzle",
      img: "/HomePages/G3.png",
      playstore: "https://play.google.com",
      appstore: "https://apple.com/app-store"
    },
    {
      title: "Snake Arrow Puzzle",
      img: "/HomePages/G4.png",
      playstore: "https://play.google.com",
      appstore: "https://apple.com/app-store"
    },
    {
      title: "Wool 3D Puzzle",
      img: "/HomePages/G5.png",
      playstore: "https://play.google.com",
      appstore: "https://apple.com/app-store"
    },
    {
      title: "Arrow Puzzle",
      img: "/HomePages/G6.png",
      playstore: "https://play.google.com",
      appstore: "https://apple.com/app-store"
    },
  ];

  useEffect(() => {
    document.title = "About Us - Woxxin Solution";
  }, []);

  const handleClick = () => {
    router.push("/components/pages/eco-system/eco-system");
  };
  return (
    <>
      <div className="relative w-full h-full overflow-hidden">
        <img
          src="/HomePages/Homedesign.png"
          alt="Main Background"
          className="absolute inset-0 z-0 object-fill w-full h-[70%] "
        />
        <div className="relative z-10 flex flex-col items-center w-full h-full text-left   ">
          <div className="flex flex-col p-6 mt-32 text-white gap-7 sm:mt-40 sm:gap-7 max-w-[90rem] mx-auto">
            <div>
              <img
                src="/HomePages/Google.png"
                alt="Google"
                className="w-40 md:w-56"
              />
            </div>
            <Text className="text-gradient-Home text-5xl sm:text-5xl  md:text-6xl lg:text-[80px] xl:text-[80px] font-bold text-white text-start ActiveUser-homePage">
              Accelerate Your App / H5 Game Growth
            </Text>
            <Text className="text-[18px] md:text-2xl xl:text-4xl text-white text-start">
              Woxxin Solutions is a dynamic company focused on creating
              innovative Mobile Applications and engaging Mobile games, boasting
              over 650 million downloads globally.
            </Text>
            <Text className="text-3xl md:text-2xl mt-10 lg:text-3xl xl:text-[40px] text-[#FFFFFF80] font-semibold">
              PUBLISHER
            </Text>

            <img src="/HomePages/line.png" alt="Line" className="w-full"></img>

            <div className="flex flex-wrap md:flex-nowrap gap-4 mt-0 xl:mt-10 justify-center divide-y md:divide-y-0 md:divide-x divide-[#9387FF] mb-16">
              {[
                {
                  title: "Top 20",
                  description: "Global Google Play Publisher in Non-Game",
                },
                {
                  title: "Top 03",
                  description: "In Southeast Asia Non-Game segment",
                },
                {
                  title: "2022",
                  description:
                    "Outstanding Company in Business Development and Expansion by Google",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col w-full max-w-full px-4 py-4 space-y-2 sm:w-1/2 md:w-1/3 text-start"
                >
                  <Text className="text-2xl md:text-3xl xl:text-[35px] text-white text-bold font-bold">
                    {item.title}
                  </Text>
                  <Text className="text-lg sm:text-lg md:text-xl xl:text-[20px] text-white break-words font-extralight">
                    {item.description}
                  </Text>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="relative mt-[-2px]">
        <div>
          <img
            src="/HomePages/Home2.png"
            alt="Main Background"
            className="w-full h-[350px]"
          />
        </div>
        <div className="absolute top-0 left-0 flex flex-col items-center justify-start w-full h-full mt-32 text-left ">
          <div className="flex flex-col gap-5 lg:gap-5 xl:gap-24 max-w-[90rem] mx-auto">
            <div className="flex flex-col text-white gap-7 ">
              <ScrollAnimation animateIn="animate__animated  animate__fadeInUp">
                <Text size="text-2xl mt-[-50px] font-bold text-white p-8 text-center md:text-4xl lg:text-4xl xl:text-5xl  md:mt-[-100px] xl:mt-0 lg:mt-0 ">
                  Woxxin’s ecosystem of quality products has helped more than
                  half a billion people work and play effectively, aiming to
                  serve 1 billion users by 2025
                </Text>
              </ScrollAnimation>
            </div>
          </div>
        </div>

        <div className="mt-5 contents">
          <div className="contents">
            <div className="">
              <Text size=" text-[75px] md:text-[65px] lg:text-[65px] xl:text-[115px] xl:mt-[50px] font-extrabold text-white text-gradient text-center text2-gradient">
                <CountUp end={100} duration={7} suffix="M+" />
              </Text>
              <Text size="text-xl md:text-2xl lg:text-3xl xl:text-[45px] text-white">
                Global Downloads
              </Text>
            </div>
            <img
              src="/HomePages/Appimg.webp"
              alt="Advertisers Icon"
              className="w-auto mx-auto p-5"
            />
          </div>
          <div className="mt-5">
            <Text size="text-center text-[75px] md:text-[65px] lg:text-[65px] xl:text-[115px] font-bold text-white ActiveUser-gradient text-center text2-gradient">
              <CountUp end={50} duration={10} suffix="M+" />
            </Text>
            <Text size="text-xl md:text-2xl lg:text-3xl xl:text-[26px] text-white mt-5 ">
              Monthly Active Users
            </Text>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5  mt-[-3px]">
        <ScrollAnimation animateIn="animate__animated  animate__fadeInUp">
          <div className="mt-44">
            <Text className="text-center text-5xl mt-[-130px] font-bold leading-relaxed text-white text-[50px]  sm:text-[60px]  md:text-[50px] lg:text-[70px] xl:text-[90px] text-gradient-mobileApp">
              Mobile Apps
            </Text>
          </div>
        </ScrollAnimation>

        <div className="flex justify-center p-4">
          <img
            src="/HomePages/Mobile.png"
            alt="Main Background"
            className="w-auto mt-[-4px] h-auto  sm:h-[300px] md:h-[300px] lg:h-[600px]"
          />
        </div>
      </div>
      <div className="lg:px-28 xl:px-32 mt-[-3px]">
        <div className="flex flex-col text-white ">
          <ScrollAnimation animateIn="animate__animated  animate__fadeInUp">
            <Text className="text-center  font-bold leading-relaxed text-white text-5xl md:text-[65px] lg:text-[65px] xl:text-[90px] text-gradient-mobileGames">
              Mobile Games
            </Text>
          </ScrollAnimation>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-6 ">
        {games.map((game, index) => (
          <div
            key={index}
            className="group border border-[#6C63FF] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 cursor-pointer"
          >
            <div className="relative w-[320px] h-[260px] md:h-[280px] lg:h-[320px] overflow-hidden">
              <img
                src={game.img}
                alt={game.title}
                className="w-full h-full object-cover transition duration-500 group-hover:scale-110 group-hover:-translate-y-2"
              />
              <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition duration-300">
                <a
                  href={game.playstore}
                  target="_blank"
                  className="flex items-center gap-2 bg-white text-black p-4 rounded-md hover:scale-105 transition"
                >
                  <FaGooglePlay className="text-[#3BCCFF] text-xl" />
                  <span className="text-sm font-medium">Play Store</span>
                </a>

                <a
                  href={game.appstore}
                  target="_blank"
                  className="flex items-center gap-2 bg-white text-black p-4 rounded-md hover:scale-105 transition"
                >
                  <FaApple className="text-black text-xl" />
                  <span className="text-sm font-medium">App Store</span>
                </a>
              </div>
            </div>

            <div className="p-3 flex items-center justify-center bg-[#6510d5]  transition">
              <p className="text-xl text-white">{game.title}</p>
            </div>
          </div>
        ))}
      </div>
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
