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
import { useRouter } from 'next/navigation';



function H5Game() {
          const router = useRouter();

  useEffect(() => {
    document.title = 'H5 Games / Quiz - Woxxin Solution';
  }, []);

 const handleQuiz = () => {
  window.open('https://quizwinz.com/', '_blank', 'noopener,noreferrer');
};

const handleGame = () => {
  window.open('https://robuxgames.com/', '_blank', 'noopener,noreferrer');
};

const handleClick = () => {
    router.push('/components/pages/career');
  };
  return (
    <>
      <div>

        <MobileAppSection
          bgImageSrc="/HomePages/Homedesign.png"
          logoSrc="/HomePages/Google.png"
          iconSrc="/HomePages/H5.webp"
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
                                     onButtonClick={() => handleQuiz()}
                                     onButtonClick2={() => handleGame()}


          buttonText1='Game Platform'
        />
        <GlobalPartners />

        <div className='sm:px-12 md:px-20 lg:px-20 xl:px-80 xl:pl-80 bg-[#110f27] '>
          <ScrollAnimation animateIn="animate__animated animate__zoomIn">
            <Text className="pt-12 text-4xl text-white  sm:pt-24 sm:text-6xl md:text-6xl lg:text-8xl xl:text-8xl" >
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

export default H5Game;
