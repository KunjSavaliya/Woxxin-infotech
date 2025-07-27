'use client';
import React, { useState } from 'react';
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
import 'swiper/css/autoplay';
import GlobalPartners from '@/app/Reusable/GlobalPartners';
import Image from 'next/image';
import Link from 'next/link';
function Page404() {

    return (
        <>
            <div>
                <MobileAppSection
                    bgImageSrc="/HomePages/Homedesign.png"
                    logoSrc="/HomePages/Google.png"
                    iconSrc="/HomePages/404.png"
                    title="404 - error"
                    title1="PAGE NOT FOUND"
                    // description="Your search has ventured beyond the known universe."
                    bgImageClassNames="h-full"
                    iconClassNames='w-32 w-auto '
                    descriptionClassName='text-2xl '
                    buttonText='BACK TO HOME'
                />


            </div>
        </>
    );
}

export default Page404;
