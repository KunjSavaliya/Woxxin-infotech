"use client";
import React, { useEffect } from "react";
import "animate.css";
import ScrollAnimation from "react-animate-on-scroll";
import MobileAppSection from "@/app/Reusable/MobileSection";
import "swiper/css"; // core styles
import "swiper/css/autoplay"; // autoplay module
import GlobalPartners from "@/app/Reusable/GlobalPartners";
import Button from "@/app/Reusable/Button";
import Text from "@/app/Reusable/Text";
import { useRouter } from "next/navigation";

function VideoAds() {
  const router = useRouter();

  useEffect(() => {
    document.title = "Video Ads - Woxxin Solution";
  }, []);

  const handleQuiz = () => {
    window.open("https://quizwinz.com/", "_blank", "noopener,noreferrer");
  };

  const handleClick = () => {
    router.push("/components/pages/career");
  };

  return (
    <>
      <div>
        <MobileAppSection
          bgImageSrc="/HomePages/Homedesign.png"
          logoSrc="/HomePages/Google.png"
          iconSrc="/HomePages/VideoAdsImg.webp"
          title="Video Player Ads"
          title1="For Unique Video Content & Ads"
          description="Introducing our cutting-edge AI-powered video player,
designed to connect you with top-tier direct and programmatic advertisers.
Boost your ad revenue by as much as 60% with our state-of-the-art
optimization technology and compliant video formats. With years
of expertise in ad tech, our V-Stream player delivers outstanding
CPMs and fill rates, making it the best choice in the market!"
          bgImageClassNames="h-full"
          iconClassNames=" md:w-auto lg:w-full h-[400px]"
          descriptionClassName="text-2xl "
          buttonText="Quiz Demo"
          onButtonClick={() => handleQuiz()}
        />

        <GlobalPartners />
        <div className="sm:px-12 md:px-20 lg:px-20 xl:px-80 xl:pl-80 bg-[#110f27] ">
          <ScrollAnimation animateIn="animate__animated animate__zoomIn">
            <Text className="pt-12 text-4xl text-white  sm:pt-24 sm:text-6xl md:text-6xl lg:text-8xl xl:text-8xl">
              Your Future Career Opportunities
            </Text>
          </ScrollAnimation>
        </div>
        <div className="relative bg-[#110f27]  mt-[-3px]">
          <div>
            <img
              src="/HomePages/Home6.png"
              alt="Main Background"
              className="w-full h-[30vh] "
            />
          </div>
          <div className="absolute top-0 items-center w-full h-full ">
            <div className="flex justify-center mt-20 sm:mt-12 lg:mt-10 xl:mt-28">
              <Button
                text="Discover Now"
                iconColor="#6C63FF"
                className="mt-2 sm:mt-5 text-white font-bold border border-[#5961F9]  "
                onButtonClick={handleClick}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VideoAds;
