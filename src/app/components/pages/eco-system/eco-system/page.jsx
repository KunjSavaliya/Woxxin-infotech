'use client';

import React from 'react';
import { useRef, useEffect } from 'react';
import { FaArrowRight, FaChartLine, FaBullseye, FaCoins, FaCogs } from 'react-icons/fa';
import { motion } from 'framer-motion';
import ScrollAnimation from 'react-animate-on-scroll';
import Text from '@/app/Reusable/Text';
import MobileAppSection from '@/app/Reusable/MobileSection';
import 'swiper/css';
import 'swiper/css/autoplay';
import Image from 'next/image';
import CustomCursor from '@/app/Reusable/CustomCursor';
import 'animate.css';
import Button from '@/app/Reusable/Button';
import { useRouter } from 'next/navigation';

function Eco() {
  const router = useRouter();
  useEffect(() => {
    document.title = 'Ecosystem - Woxxin Solution';
  }, []);

   const handleClick = () => {
    router.push('/components/pages/contact-us');
  };

  const features = [
    {
      icon: <FaChartLine size={40} className="text-blue-500" />,
      title: 'Market Research',
      desc: 'Deep market analysis and competitor research to position your product effectively',
    },
    {
      icon: <FaBullseye size={40} className="text-blue-500" />,
      title: 'Marketing Optimization',
      desc: 'Data-driven strategies to maximize your marketing ROI and reach',
    },
    {
      icon: <FaCoins size={40} className="text-blue-500" />,
      title: 'Monetization',
      desc: 'Optimize revenue streams and subscription models for sustainable growth',
    },
    {
      icon: <FaCogs size={40} className="text-blue-500" />,
      title: 'Product Optimization',
      desc: 'Continuous improvement and refinement of your digital products',
    },
  ];

  // 3D Tilt Effect
  const handleMouseMove = (e, cardRef) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotateX = y / 10;
    const rotateY = -x / 10;

    cardRef.current.style.transition = 'transform 0.1s ease';
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = (cardRef) => {
    cardRef.current.style.transition = 'transform 0.3s ease';
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
  };

  return (
    <>
      <CustomCursor />
      <div>
        <MobileAppSection
          bgImageSrc="/HomePages/Homedesign.png"
          logoSrc="/HomePages/Google.png"
          iconSrc="/HomePages/Eco/EcoDim.webp"
          title="Innovative Solutions for a Global Audience."
          EcoText1="Explore over 300+ innovative items in 3 popular sectors!"
          EcoText="Innovative solutions paired with efficient strategies for success."
          bgImageClassNames="h-full"
          iconClassNames=" md:w-auto lg:w-full h-[400px]"
          descriptionClassName="text-2xl"
        />

        <div className="bg-[#F4F4F4] pt-10">
          <ScrollAnimation animateIn="animate__animated animate__fadeInUp">
            <Text className="p-4 text-5xl text-white sm:text-7xl text-gradient-mobilePro">
              Discover Our Top Picks
            </Text>
          </ScrollAnimation>
          <div className="mt-10 xl:mt-24">
            <img
              src="/HomePages/Eco/EcoMobileUp.webp"
              alt="Main Background"
              className="w-auto mx-auto"
            />
          </div>
        </div>

        <div className="relative bg-[#110f27]">
          <Image
            src="/HomePages/Eco/EcoDrive.webp"
            alt="EcoDrive Background"
            className="w-full mt-[-4px] h-[400px] xl:h-[650px]"
            width={1920}
            height={700}
          />
          <div className="absolute top-0 left-0 flex items-end justify-center w-full h-full">
            <div className="w-full lg:px-72 lg:pl-72">
              <ScrollAnimation animateIn="animate__animated animate__fadeInUp">
                <Text className="p-4 text-5xl font-bold leading-tight text-center text-white sm:text-6xl xl:text-7xl 2xl:text-8xl text-gradient-EcoDrive">
                  Innovation Drives Our Success
                </Text>
              </ScrollAnimation>
            </div>
          </div>
        </div>

        {/* 🔥 Updated Feature Cards with Effects */}
        <div className="bg-[#110f27] py-12 px-4 pt-24">
          <div className="grid grid-cols-1 gap-6 mx-auto text-white max-w-7xl sm:grid-cols-2 md:grid-cols-4">
            {features.map((feature, index) => {
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const cardRef = useRef(null);

              return (
                <motion.div
                  key={index}
                  ref={cardRef}
                  className="group bg-gradient-to-br from-[#1f1d3a] to-[#2a2645] border border-white/10 rounded-xl p-6 transition-all duration-300 ease-in-out cursor-pointer relative overflow-hidden hover:shadow-xl hover:border-[#5961F9]"
                  onMouseMove={(e) => handleMouseMove(e, cardRef)}
                  onMouseLeave={() => handleMouseLeave(cardRef)}
                  whileHover={{ scale: 1.05 }}
                >
                  {/* Glow Layer */}
                  <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#5961F9]/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 rounded-xl blur-xl pointer-events-none" />
                  <div className="relative z-10">
                    <div className="mb-4 ">{feature.icon}</div>
                    <h3 className="mb-2 text-2xl font-semibold">{feature.title}</h3>
                    <p className="text-xl text-gray-400">{feature.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="relative bg-[#110f27]">
          <Image
            src="/HomePages/Eco/EcoTouch.webp"
            alt="EcoTouch Background"
            className="w-full mt-[-4px] h-[50vh] xl:h-[65vh]"
            width={1920}
            height={700}
          />
          <div className="absolute top-0 left-0 flex items-start justify-center w-full h-full pt-16 md:pt-32">
            <div className="w-full  xl:pl-40 xl:pr-40">
              <ScrollAnimation animateIn="animate__animated animate__fadeInUp">
                <Text className="p-4 text-[40px] font-bold leading-tight text-center text-white  sm:text-6xl md:text-6xl xl:text-7xl 2xl:text-8xl text-gradient-Home">
                  Join Woxxin to open new pathways in the digital future
                </Text>
              </ScrollAnimation>
            </div>
          </div>
        </div>

        {/* <div className="relative bg-[#110f27]">
          <Image
            src="/HomePages/Contfooter.png"
            alt="Footer Background"
            className="w-full mt-[-4px] h-[250px] xl:h-[250px]"
            width={1920}
            height={700}
          />
          <div className="absolute top-0 left-0 flex justify-center w-full h-full items-top">
            <div className="w-full max-w-sm px-4">
              <Button
                text="Apply here"
                iconColor="#6C63FF"
                className="w-full py-3 text-white  rounded-md hover:bg-[#5961F9]/10 transition duration-300 mt-2 sm:mt-5  bg-transparent border border-[#5961F9] bg-[#110F27]"
              >
              </Button>
            </div>
          </div>
        </div> */}
         <div className="relative bg-[#110f27]  mt-[-3px]">
                <div>
                  <img
                    src="/HomePages/Home6.png"
                    alt="Main Background"
                     className="w-full h-[25vh] "
                   
                  />
                </div>
                <div className="absolute top-0 items-center w-full h-full ">
                  <div className="flex justify-center ">
                    <Button
                      text="Apply here"
                      iconColor="#6C63FF"
                      className="mt-2 sm:mt-5 text-white bg-transparent border border-[#5961F9] bg-[#110f24] "
                      onClick={handleClick}
                    />
                  </div>
                </div>
             
              </div>
      </div>
    </>
  );
}

export default Eco;
