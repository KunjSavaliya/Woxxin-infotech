"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import "animate.css";
import ScrollAnimation from "react-animate-on-scroll";
import Text from "@/app/Reusable/Text";
import HeroSection from "@/app/Reusable/HeroSection";
import MobileAppSection from "@/app/Reusable/MobileSection";
import Image from "next/image";
function MobileGame() {
  const router = useRouter();

  useEffect(() => {
    document.title = "Mobile Game- Woxxin Solution";
  }, []);
  const handleClick = () => {
    router.push("/components/pages/contact-us");
  };
  return (
    <>
      <div>
        <MobileAppSection
          bgImageSrc="/HomePages/Homedesign.png"
          logoSrc="/HomePages/Google.png"
          iconSrc="/HomePages/MobileGame/MobGame.webp"
          title="Play Connect Innovate"
          title1="Endless fun awaits you with engaging and easy-to-play games!"
          description="An enthusiastic and innovative group delivers fresh and thrilling adventures to users every day."
          bgImageClassNames="h-full"
          iconClassNames=" md:w-auto lg:w-full h-[400px]"
          descriptionClassName=" text-2xl md:text-4xl mt-5 text-center lg :p-7"
        />
        <div className=" bg-[#110f27]  ">
          <div className="relative bg-[#110f27]">
            <Image
              src="/HomePages/MobileGame/MobGameMan.webp"
              alt="EcoDrive Background"
              className="w-full mt-[-4px] h-[400px] xl:h-[650px]"
              width={1920}
              height={700}
            />
            <div className="absolute top-0 left-0 flex items-end justify-center w-full h-full">
              <div className="w-full lg:px-72 lg:pl-72">
                <ScrollAnimation animateIn="animate__animated animate__fadeInUp">
                  <Text className="p-4 text-5xl font-bold leading-tight text-center text-white sm:text-6xl xl:text-7xl 2xl:text-8xl text-gradient-mobiletext ">
                    Immerse yourself in the world of true
                  </Text>
                </ScrollAnimation>
              </div>
            </div>
          </div>
          <div className="flex flex-col ">
            <ScrollAnimation animateIn="animate__animated animate__fadeInUp"></ScrollAnimation>
            <div className="flex justify-center">
              <img
                src="/HomePages/MobileGame/MobImg.webp"
                alt="Main Background"
                className="w-auto  h-auto xl:h-[900px]"
              />
            </div>
          </div>

          <div className=" sm:px-12 md:px-20 lg:px-20 xl:px-36 xl:pl-64">
                            <Text className="text-2xl md:text-3xl mt-1 lg:text-4xl xl:text-[35px] text-white">

                MISSION
              </Text>
                <img
                  src="/HomePages/line.png"
                  alt="Line"
                  className="mx-auto mt-5 mb-5 "
                />
              <div className="flex flex-wrap md:flex-nowrap  mt-2 justify-center divide-y md:divide-y-0 md:divide-x divide-[#9387FF] mb-10"></div>
            <ScrollAnimation animateIn="animate__animated animate__fadeInUp">
              <div className="flex flex-col text-white ">
                <Text size="text-center text-xl font-bold text-white   md:text-4xl lg:text-4xl xl:text-4xl  mb-12 text-gradient-mobiletext ">
                  Our vision is to become a top-tier Game Studio,celebrated for
                  crafting engaging, inventive,and beloved games that unite
                  players globally.
                </Text>
              </div>
            </ScrollAnimation>
              <Text className="text-2xl md:text-3xl mt-1 lg:text-4xl xl:text-[35px] text-white">
                                VISION
                              </Text>
               <img
                  src="/HomePages/line.png"
                  alt="Line"
                  className="mx-auto mt-5 mb-5 "
                />
              <div className="flex flex-wrap md:flex-nowrap  mt-2 justify-center divide-y md:divide-y-0 md:divide-x divide-[#9387FF] mb-10"></div>
            <ScrollAnimation animateIn="animate__animated animate__fadeInUp">
              <div className="flex flex-col text-white ">
                <Text size="text-center text-xl font-bold text-white   md:text-4xl lg:text-4xl xl:text-4xl   mb-12 text-gradient-mobiletext">
                  Our mission is to craft games that resonate with players
                  around the world, sparking joy, creativity, and a sense of
                  community. We aim to transform the mobile gaming landscape by
                  focusing on simplicity and innovative design.
                </Text>
              </div>
            </ScrollAnimation>
          </div>
        </div>
        <div className="mt-6">
          <Text className="p-4 mb-6 text-5xl text-white md:text-2xl lg:text-5xl xl:text-7xl text-gradient-mobilePro">
            Outstanding products
          </Text>
          <div className="flex flex-wrap justify-center gap-5">
            <ScrollAnimation animateIn="animate__animated animate__fadeInUp">
              <img
                src="/HomePages/MobileGame/MobApp1.webp"
                alt="Line"
                className="w-auto"
              />
            </ScrollAnimation>
            <ScrollAnimation animateIn="animate__animated animate__fadeInUp">
              <img
                src="/HomePages/MobileGame/MobApp2.webp"
                alt="Line"
                className="w-auto"
              />
            </ScrollAnimation>
            <ScrollAnimation animateIn="animate__animated animate__fadeInUp">
              <img
                src="/HomePages/MobileGame/MobApp3.webp"
                alt="Line"
                className="w-auto"
              />
            </ScrollAnimation>
          </div>
          <div className="flex justify-center mb-12">
            <ScrollAnimation animateIn="animate__animated animate__fadeInUp">
              <img
                src="/HomePages/MobileGame/MobApp4.webp"
                alt="Line"
                className="w-auto h-[500px]"
              />
            </ScrollAnimation>
          </div>
        </div>

        <HeroSection
          imageSrc="/HomePages/MobileGame/MobileGF.png"
          text="Creating World-Class Products Together"
          textClassName=" text-[45px] lg:text-[69px] xl:text-[70px] 2xl:text-[90px]  text-gradient-Home"
          buttonText="Apply here"
          onButtonClick={() => handleClick()}
        />
      </div>
    </>
  );
}

export default MobileGame;
