'use client';
import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { motion } from "framer-motion";
// import Text from '../../../Reusable/Text';
import Button from '@/app/Reusable/Button';
import Image from "next/image";

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
import { useEffect } from 'react';
function ContactUs() {
    useEffect(() => {
        document.title = 'Contact Us - Woxxin Solution';
    }, []);
    const logos = [
        '/HomePages/Gp1.png',
        '/HomePages/Gp2.png',
        '/HomePages/Gp3.png',
        '/HomePages/Gp4.png',
        '/HomePages/Gp5.png',
        '/HomePages/Gp6.png',
    ];
    return (
        <>
            <div>

                <MobileAppSection
                    bgImageSrc="/HomePages/Homedesign.png"
                    logoSrc="/HomePages/Google.png"
                    iconSrc="/HomePages/ContectRocket.webp"
                    title="Our team is ready for anything"
                    title1="Share your contact details so we can
discuss about the project and collaboration
opportunities, or reach out to us directly!"

                    bgImageClassNames="h-full"
                    iconClassNames=" md:w-auto lg:w-full h-[400px]"


                />
                <div className='bg-[#110f27] p-2 md:p-10'>
                    <div className="min-h-screen flex items-center justify-center p-4  mt-[-1px]">
                        <form className="w-full p-6 space-y-6 text-white rounded-lg max-w-[92rem]">
                            {/* Company Detail */}
                            <div>
                                <label className="block mb-2">Company Detail Company/Developer name</label>
                                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                    <input type="text" placeholder="Team size" className="w-full px-5 py-5 rounded-md bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#5961F9] backdrop-blur-sm" />
                                    <input type="text" placeholder="Country" className="w-full px-5 py-5 rounded-md bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#5961F9] backdrop-blur-sm" />
                                </div>
                            </div>

                            {/* Point of Contact */}
                            <div>
                                <label className="block mb-2">Company/Developer point of contact</label>
                                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                    <input type="text" placeholder="First Name" className="w-full px-5 py-5 rounded-md bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#5961F9] backdrop-blur-sm" />
                                    <input type="text" placeholder="Last Name" className="w-full px-5 py-5 rounded-md bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#5961F9] backdrop-blur-sm" />
                                </div>
                                <input type="email" placeholder="Email Address" className="w-full px-5 py-5 rounded-md bg-white/10 text-white placeholder-white/70 focus:outline-none mt-4 focus:ring-2 focus:ring-[#5961F9] backdrop-blur-sm" />
                            </div>

                            {/* Portfolio Link */}
                            <div>
                                <label className="block mb-2">Portfolio link/Gameplay link</label>
                                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                    <input type="text" placeholder="Yes/No" className="w-full px-5 py-5 rounded-md bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#5961F9] backdrop-blur-sm" />
                                    <input type="url" placeholder="Link URL" className="w-full px-5 py-5 rounded-md bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#5961F9] backdrop-blur-sm" />
                                </div>
                            </div>

                            {/* Publisher History */}
                            <div>
                                <label className="block mb-2">Have you worked with other publishers</label>
                                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                    <input type="text" placeholder="Yes/No" className="w-full px-5 py-5 rounded-md bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#5961F9] backdrop-blur-sm" />
                                    <input type="text" placeholder="Yes: Link Publisher" className="w-full px-5 py-5 rounded-md bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#5961F9] backdrop-blur-sm" />
                                </div>
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block mb-2">Message</label>
                                <textarea placeholder="Leave us a message..." className="w-full px-5 py-5 rounded-md bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#5961F9] backdrop-blur-sm" />
                            </div>

                            {/* Privacy Policy */}
                            <div className="flex items-center space-x-2">
                                <input type="checkbox" className="accent-blue-500" />
                                <label className="text-sm">You agree to our friendly privacy policy</label>
                            </div>

                            {/* <div>
                                <button
                                    type="submit"
                                    className="w-full py-3 text-white border border-[#5961F9] rounded-md hover:bg-[#5961F9]/10 transition duration-300"
                                >
                                    Submit
                                </button>
                            </div> */}
                        </form>
                    </div>

                </div>
                <div className="relative  bg-[#110f27]">
                    <div>
                        <Image
                            src='/HomePages/Contfooter.png'
                            alt="Main Background"
                            className="w-full mt-[-4px] h-[250px] xl:h-[250px]"
                            width={1920}
                            height={700}
                        />
                    </div>
                    <div className="absolute top-0 left-0 flex justify-center w-full h-full items-top ">
                        <div className="w-full max-w-xl ">
                            <button
                                type="submit"
                                className="w-full py-3 text-white border border-[#5961F9] rounded-md hover:bg-[#5961F9]/10 transition duration-300"
                            >
                                Submit
                            </button>
                        </div>
                    </div>

                </div>

            </div>
        </>
    );
}

export default ContactUs;
