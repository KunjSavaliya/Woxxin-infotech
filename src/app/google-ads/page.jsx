"use client";
import React, { useRef } from "react";

import "animate.css";
import ScrollAnimation from "react-animate-on-scroll";
import Text from "@/app/Reusable/Text";
import HeroSection from "@/app/Reusable/HeroSection";
import MobileAppSection from "@/app/Reusable/MobileSection";
import "swiper/css"; // core styles
import "swiper/css/autoplay";
import CountUp from "react-countup";
import { FaChartLine, FaChartBar, FaDollarSign, FaUsers } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";


function GoogleAds() {
  const router = useRouter();
  const cardRef = useRef(null);

  const handleClick = () => {
    router.push("/contact");
  };

  const services = [
    {
      icon: <FaChartLine className="text-[#7A7AFB] text-3xl" />,
      title: "Campaigning Optimization",
      items: [
        "Strategic Campaign Planning",
        "Performance Tracking & Analysis",
        "A/B Testing & Iterative Improvements",
        "Audience Targeting Optimization",
        "Budget Optimization",
        "Multi-Channel Optimization",
      ],
    },
    {
      icon: <FaChartBar className="text-[#7A7AFB] text-3xl" />,
      title: "Data Analytics",
      items: [
        "Conversion Tracking Setup (Forms, Calls, Purchases)",
        "Custom Dashboard Creation (GA4 & Google Data Studio)",
        "Funnel Analysis & User Behavior Insights",
        "Predictive Performance Forecasting",
        "Retargeting Audiences Based on Behavior",
      ],
    },
    {
      icon: <FaDollarSign className="text-[#7A7AFB] text-3xl" />,
      title: "ROAS Campaigning",
      items: [
        "We provide ready-to-use, professionally managed advertising accounts",
        "Smart Bidding & Conversion Value Rules",
        "Audience Segmentation by Purchase Intent",
        "High-Intent Remarketing Campaigns",
        "Performance Max Campaign Optimization",
        "Lifetime Value & CAC Tracking",
      ],
    },
    {
      icon: <FaUsers className="text-[#7A7AFB] text-3xl" />,
      title: "Agency Account",
      items: [
        "We provide business and agency-level accounts",
        "Google Ads (Search, Display, YouTube)",
        "Meta Ads (Facebook & Instagram)",
      ],
    },
  ];
  const handleMouseMove = (e, card) => {
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const rotateX = y / 10;
    const rotateY = -x / 10;

    card.style.transition = "transform 0.1s ease";
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = (card) => {
    card.style.transition = "transform 0.3s ease";
    card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
  };
  return (
    <>
      <div>
        <MobileAppSection
          bgImageSrc="/HomePages/Homedesign.png"
          logoSrc="/HomePages/Google.png"
          iconSrc="/HomePages/GoogleAds/Gads.webp"
          title="Transform Your Google
Ads Performance"
          title1="Data-driven strategies that deliver measurable
results for your business growth"
          bgImageClassNames="h-full"
          iconClassNames=" md:w-auto lg:w-full h-[400px]"
          buttonText="Contact Us"
          onButtonClick={() => handleClick()}
        />
        <div className="pt-28 max-w-[90rem] mx-auto">
          <ScrollAnimation animateIn="animate__animated animate__fadeInUp">
            <Text className="text-xl md:text-2xl lg:text-3xl xl:text-[45px] text-[#FFFFFF80] font-bold">
              OUR SERVICES
            </Text>
            <img
              src="/HomePages/line.png"
              alt="Line"
              className="mx-auto mt-5 mb-5 "
            />
          </ScrollAnimation>



          <section className=" text-white max-w-[90rem] mx-auto p-6 mt-15 ">
            <div className="grid grid-cols-1 gap-8 mx-auto md:grid-cols-2 max-w-7xl">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-[#12112B] p-6 rounded-lg shadow-lg border border-[#1C1B33]"
                  onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
                  onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    {service.icon}
                  </div>

                  <h3 className="text-lg font-semibold">{service.title}</h3>

                  <ul className="mt-5 space-y-2 text-sm text-gray-300 list-disc list-inside">
                    {service.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </section>



          <ScrollAnimation animateIn="animate__animated animate__fadeInUp">
            <Text className="mt-16 text-3xl md:text-3xl lg:text-4xl xl:text-[45px] text-[#FFFFFF80] font-bold">
              Proven Results
            </Text>


            <img
              src="/HomePages/line.png"
              alt="Line"
              className="mx-auto mt-5 mb-5 "
            />
          </ScrollAnimation>
          <div className="max-w-[90rem] mx-auto   p-4  mt-5 flex  flex-wrap md:flex-nowrap gap-4 justify-center divide-y md:divide-y-0 md:divide-x divide-[#9387FF] pb-16">
            {[
              {
                title: "250%",
                description: "Average ROAS Improvement",
              },
              {
                title: "$10M+",
                description: "Ad Spend Managed",
              },
              {
                title: "98%",
                description: "Client Retention Rate",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col w-full max-w-full px-4 py-4 pt-12 space-y-2 sm:w-1/2 md:w-1/3 text-start"
              >
                <Text className="text-3xl md:text-3xl xl:text-[90px] text-white text2-gradient font-bold xl:leading-[1]">
                  <CountUp
                    end={parseFloat(item.title.replace(/[^0-9.]/g, ""))}
                    duration={8}
                    suffix={
                      item.title.includes("%")
                        ? "%"
                        : item.title.includes("M")
                          ? "M+"
                          : ""
                    }
                    decimals={item.title.includes(".") ? 1 : 0}
                  />
                </Text>
                <Text className="text-xl sm:text-lg md:text-xl xl:text-[20px] text-white font-medium break-words">
                  {item.description}
                </Text>
              </div>
            ))}
          </div>
        </div>

        <HeroSection
          imageSrc="/HomePages/GoogleAds/HandStack.png"
          text="Ready to Improve Your Google Ads Performance?"
          textClassName="text-[37px] lg:text-[69px] xl:text-[70px] 2xl:text-[90px]  text-gradient-Home"
          text1="Let`s discuss how we can help you achieve your marketing goals"
          buttonText="Let`s Talk"
          text1ClassName="text-white text-lg  sm:text-2xl mt-5"
          onButtonClick={() => handleClick()}
        />
      </div >
    </>
  );
}

export default GoogleAds;
