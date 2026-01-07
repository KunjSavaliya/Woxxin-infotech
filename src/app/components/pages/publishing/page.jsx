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
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // core styles
import 'swiper/css/autoplay'; // autoplay module
import { Autoplay } from 'swiper/modules';
import GlobalPartners from '@/app/Reusable/GlobalPartners';
import CountUp from 'react-countup';
import { useRouter } from 'next/navigation';

function Publishing() {
      const router = useRouter();

  useEffect(() => {
    document.title = 'Publishing- Woxxin Solution';
  }, []);
   const handleClick = () => {
    router.push('/components/pages/contact-us');
  };

  const logos = [
    '/HomePages/Gp1.png',
    '/HomePages/Gp2.png',
    '/HomePages/Gp3.png',
    '/HomePages/Gp4.png',
    '/HomePages/Gp5.png',
    '/HomePages/Gp6.png',
  ];
  const steps = [
    {
      title: "1.Introduction",
      description: "Communicate to know each other and find a way to work",
    },
    {
      title: "2.Evaluation",
      description: "Share your app data for us to analyze and feedback on how to grow your app",
    },
    {
      title: "3.Testing",
      description: "Run UA campaigns with a specific budget, then identify the scalability and improvement in-app",
    },
    {
      title: "4.Official Partner",
      description: "Discuss the agreement, then both sign and officially become partners",
    },
    {
      title: "5.Optimize & Scale",
      description: "Analyze metrics, create an interaction roadmap, promote & monetize app",
    },
    {
      title: "6.Get profits",
      description: "We celebrate success with millions of profits, together",
    },
  ];
  return (

    <>
      <div>

        <MobileAppSection
          bgImageSrc="/HomePages/Publishing/Publishing.webp"
          logoSrc="/HomePages/Google.png"
          iconSrc="/HomePages/Publishing/PublishingIcon.webp"
          title="Publishing"
          title1="Empower developers to launch impactful mobile
apps & Application that thrive in the worldwide
marketplace."
          bgImageClassNames="absolute w-full h-[800px] md:h-[1000px] "
          // className=""
          iconClassNames='w-32 w-auto mt-[-25px]'
          descriptionClassName='text-2xl '
          MTitle='MISSION'
          Mtext='Empower product creators to reach new heights
and foster lasting growth.'
        />

        <div className="bg-[#110f27] flex flex-col p-6  text-white gap-7 sm:px-12 md:px-20 lg:px-20 xl:px-64 xl:pl-64 pt-32">
          <ScrollAnimation animateIn="animate__animated animate__fadeInUp">

            <Text className="text-xl md:text-2xl mt-1 lg:text-3xl xl:text-[35px] text-white">
              VISION
            </Text>
            <img
              src="/HomePages/line.png"
              alt="Line"
              className="w-full mt-6 rounded-[20%]"
            />
            <Text size="text-center text-xl font-bold text-white   md:text-4xl lg:text-4xl xl:text-4xl  xl:mt-0 lg:mt-0 pt-12 ">
              Collaborating with over 200 international partners,
              we create a vibrant technology ecosystem that serves
              hundreds of millions of users each month.
            </Text>
          </ScrollAnimation>
        </div>
        <div className="bg-[#110f27] flex flex-wrap md:flex-nowrap justify-center gap-6 pt-12 pb-16 divide-y md:divide-y-0 md:divide-x divide-[#9387FF] sm:px-12 md:px-20 lg:px-20 xl:px-64 xl:pl-64 ">
          {[
            {
              title: "100M+",
              description: "Downloads",
            },
            {
              title: "50M+",
              description: "Monthly Active User",
            },
            {
              title: "TOP20",
              description: "Google Play's world in the Non-Game sector",
            },
          ].map((item, index) => {
            const isCountable = /^\d/.test(item.title); // true if starts with a digit
            const rawNumber = parseFloat(item.title.replace(/[^0-9.]/g, ''));
            const suffix =
              item.title.includes('%')
                ? '%'
                : item.title.includes('M')
                  ? 'M+'
                  : item.title.includes('TOP')
                    ? 'TOP' + item.title.replace(/[^0-9]/g, '')
                    : '';

            return (
              <div
                key={index}
                className="flex flex-col w-full max-w-full px-4 py-4 space-y-2 sm:w-1/2 md:w-1/3 text-start"
              >
                <Text className="text-3xl md:text-4xl xl:text-[90px] text-white text2-gradient font-bold xl:leading-[1]">
                  {isCountable ? (
                    <CountUp end={rawNumber} duration={6} suffix={suffix} />
                  ) : (
                    item.title
                  )}
                </Text>
                <Text className="text-md sm:text-lg md:text-xl xl:text-[20px] text-white font-medium break-words">
                  {item.description}
                </Text>
              </div>
            );
          })}
        </div>



        <div>
          <GlobalPartners />
        </div>


        <HeroSection
          imageSrc="/HomePages/Publishing/PublisingFtr.png"
          text="Contact us for
collaboration today"
           textClassName='text-[37px] lg:text-[69px] xl:text-[70px] 2xl:text-[90px]  text-gradient-Home'
          buttonText="Apply here"
            onButtonClick={() => handleClick()}
        />

      </div>
    </>
  );
}

export default Publishing;
