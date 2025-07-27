'use client';
import React, { useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { motion } from "framer-motion";
// import Text from '../../../Reusable/Text';
import Button from '@/app/Reusable/Button';

import 'animate.css';
import ScrollAnimation from 'react-animate-on-scroll';
import Text from '@/app/Reusable/Text';
import HeroSection from '@/app/Reusable/HeroSection';
import MobileAppSection from '@/app/Reusable/MobileSection';
import GlobalPartners from '@/app/Reusable/GlobalPartners';



function H5Game() {
  useEffect(() => {
    document.title = 'H5 Games / Quiz - Woxxin Solution';
  }, []);

  return (
    <>
      <div>

        <MobileAppSection
          bgImageSrc="/HomePages/Homedesign.png"
          logoSrc="/HomePages/Google.png"
          iconSrc="/HomePages/H5.png"
          title="H5 Games / Quiz"
          title1="For Incremental Revenues and Better Engagement"
          description="Boost your ad revenues with our exciting HTML5 quiz and
gaming solutions! Experience up to 40% more incremental
revenue while enhancing user engagement. Our easy-to-integrate,
plug-and-play products are designed to elevate your platform's
performance."
          bgImageClassNames="h-full"
          iconClassNames=" md:w-auto lg:w-full h-[400px]"
          descriptionClassName='text-2xl mt-10'
          buttonText='Quiz Platform'
          buttonText1='Game Platform'
        />
        <GlobalPartners />

        <div className='sm:px-12 md:px-20 lg:px-20 xl:px-80 xl:pl-80 bg-[#110f27] '>
          <ScrollAnimation animateIn="animate__animated animate__zoomIn">
            <Text className=" pt-12 sm:pt-24 text-4xl text-white sm:text-6xl md:text-6xl lg:text-8xl xl:text-8xl " >
              Your Future Career Opportunities
            </Text>
          </ScrollAnimation>
        </div>
        <div className="relative bg-[#110f27] ">
          <div >
            <img
              src="/HomePages/H5Game.png"
              alt="Main Background"
              className="h-[100px] w-full sm:w-full sm:h-full"
            />
          </div>
          <div className="absolute top-0 items-center w-full h-full ">
            <div className="flex justify-center mt-8 sm:mt-12 lg:mt-10 xl:mt-36">
              <Button
                text="Discover Now"
                iconColor="#6C63FF"
                className="mt-2 sm:mt-5 text-white bg-transparent border border-[#5961F9] bg-[#110f24] "
              //  onClick={handleClick}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default H5Game;
