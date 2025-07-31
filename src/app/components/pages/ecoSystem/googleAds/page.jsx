'use client';
import React from 'react';

import 'animate.css';
import ScrollAnimation from 'react-animate-on-scroll';
import Text from '@/app/Reusable/Text';
import HeroSection from '@/app/Reusable/HeroSection';
import MobileAppSection from '@/app/Reusable/MobileSection';
import 'swiper/css'; // core styles
import 'swiper/css/autoplay';
import CountUp from 'react-countup';
import { FaChartLine, FaChartBar, FaDollarSign, FaUsers } from 'react-icons/fa';

function GoogleAds() {
    const services = [
        {
            icon: <FaChartLine className="text-[#7A7AFB] text-3xl" />,
            title: 'Campaigning Optimization',
            items: [
                'Strategic Campaign Planning',
                'Performance Tracking & Analysis',
                'A/B Testing & Iterative Improvements',
                'Audience Targeting Optimization',
                'Budget Optimization',
                'Multi-Channel Optimization',
            ],
        },
        {
            icon: <FaChartBar className="text-[#7A7AFB] text-3xl" />,
            title: 'Data Analytics',
            items: [
                'Conversion Tracking Setup (Forms, Calls, Purchases)',
                'Custom Dashboard Creation (GA4 & Google Data Studio)',
                'Funnel Analysis & User Behavior Insights',
                'Predictive Performance Forecasting',
                'Retargeting Audiences Based on Behavior',
            ],
        },
        {
            icon: <FaDollarSign className="text-[#7A7AFB] text-3xl" />,
            title: 'ROAS Campaigning',
            items: [
                'We provide ready-to-use, professionally managed advertising accounts',
                'Smart Bidding & Conversion Value Rules',
                'Audience Segmentation by Purchase Intent',
                'High-Intent Remarketing Campaigns',
                'Performance Max Campaign Optimization',
                'Lifetime Value & CAC Tracking',
            ],
        },
        {
            icon: <FaUsers className="text-[#7A7AFB] text-3xl" />,
            title: 'Agency Account',
            items: [
                'We provide business and agency-level accounts',
                'Google Ads (Search, Display, YouTube)',
                'Meta Ads (Facebook & Instagram)',
            ],
        },
    ];
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
                    buttonText='Contact Us'
                />
                <div className='bg-[#110f27] pt-28  sm:px-12 md:px-20 lg:px-20 xl:px-64 xl:pl-64'>

                    <ScrollAnimation animateIn="animate__animated animate__fadeInUp">

                        <Text className="text-xl md:text-2xl lg:text-3xl xl:text-[35px] text-[#FFFFFF80]">
                            OUR SERVICES
                        </Text>
                        <img
                            src="/HomePages/line.png"
                            alt="Line"
                            className="w-full mt-6"
                        />
                    </ScrollAnimation>


                    <section className="px-4 py-12 mt-5 text-white md:px-12">
                        <div className="grid grid-cols-1 gap-8 mx-auto md:grid-cols-2 max-w-7xl">
                            {services.map((service, index) => (
                                <div
                                    key={index}
                                    className="bg-[#12112B] p-6 rounded-lg shadow-lg border border-[#1C1B33]"
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
                                </div>
                            ))}
                        </div>
                    </section>

                    <ScrollAnimation animateIn="animate__animated animate__fadeInUp">

                        <Text className="text-xl md:text-2xl lg:text-3xl xl:text-[35px] text-[#FFFFFF80]">
                            Proven Results
                        </Text>
                        <img
                            src="/HomePages/line.png"
                            alt="Line"
                            className="w-full mt-6"
                        />
                    </ScrollAnimation>
                    <div className=" p-4 mt-5 flex pt-12 flex-wrap md:flex-nowrap gap-4 justify-center divide-y md:divide-y-0 md:divide-x divide-[#9387FF] pb-16">
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
                                        end={parseFloat(item.title.replace(/[^0-9.]/g, ''))}
                                        duration={8}
                                        suffix={
                                            item.title.includes('%')
                                                ? '%'
                                                : item.title.includes('M')
                                                    ? 'M+'
                                                    : ''
                                        }
                                        decimals={item.title.includes('.') ? 1 : 0}
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
                    textClassName='text-[28px]  2xl:text-[50px] mt-[-50px] sm:mt-0 text-gradient-Home'
                    text1='Let`s discuss how we can help you achieve your marketing goals'
                    buttonText="Let`s Talk"
                    text1ClassName='text-white text-lg  sm:text-2xl mt-5'
                    onButtonClick={() => alert("Button clicked!")}
                />
            </div>
        </>
    );
}

export default GoogleAds;
