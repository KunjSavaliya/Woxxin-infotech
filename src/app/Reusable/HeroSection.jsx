// 'use client';
// import React, { useEffect, useState } from 'react';

// export default function CustomCursor() {
//     const [pos, setPos] = useState({ x: 0, y: 0 });
//     const [scale, setScale] = useState(1);
//     const [visible, setVisible] = useState(true);

//     useEffect(() => {
//         const onMouseMove = (e) => {
//             setPos({ x: e.clientX, y: e.clientY });
//             const tag = e.target.tagName?.toLowerCase();
//             const isInteractive = ['a', 'button', 'input', 'textarea', 'select'].includes(tag)
//                 || e.target.getAttribute('role')?.match(/button|link/)
//                 || e.target.classList.contains('cursor-pointer');

//             if (isInteractive) {
//                 setScale(2);                // Expand cursor
//                 setVisible(false);          // Hide after expand
//             } else {
//                 setScale(1);
//                 setVisible(true);
//             }
//         };

//         document.addEventListener('mousemove', onMouseMove);
//         return () => document.removeEventListener('mousemove', onMouseMove);
//     }, []);

//     return (
//         <div
//             className={`fixed top-0 left-0 z-50 pointer-events-none transition-opacity duration-150 ease-out ${visible ? 'opacity-100' : 'opacity-0'}`}
//             style={{
//                 transform: `translate3d(${pos.x - 16}px, ${pos.y - 16}px, 0)`,
//             }}
//         >
//             <div
//                 className="rounded-full bg-[#7A7AFB]/20 backdrop-blur-sm"
//                 style={{
//                     width: `${32 * scale}px`,
//                     height: `${32 * scale}px`,
//                     transition: 'width 0.1s ease, height 0.1s ease, opacity 0.1s ease',
//                 }}
//             />
//         </div>
//     );
// }

// components/HeroSection.jsx
import Image from "next/image";
import Text from "./Text";
import Button from "./Button";
import 'animate.css';
import ScrollAnimation from 'react-animate-on-scroll';
// onButtonClick
const HeroSection = ({ imageSrc, text, buttonText, textClassName, text1, text1ClassName, btnClassName }) => {
    return (
        <div className="relative  bg-[#110f27]">
            <div>
                <img
                    src={imageSrc}
                    alt="Main Background"
                    className="w-full h-[320px]  md:h-[400px] lg:h-[450px] xl:h-full 2xl:h-full opacity-70 "

                />
            </div>
            <div className="absolute top-0 left-0 flex flex-col items-center w-full h-full mt-16 text-left sm:mt-28 lg:mt-16 2xl:mt-40">
                <div className="flex flex-col justify-around">
                    <div className=" sm:mt-12 md:mt-0">
                        {/* text-gradient-lasttext */}
                        <ScrollAnimation animateIn="animate__animated animate__zoomIn">

                            <Text className={` md:leading-[1.2] mt-1  text-[35px] sm:text-5xl md:text-5xl  lg:leading-[1.2]  xl:leading-[1.2]  sm:px-12 md:px-20 lg:px-20 xl:px-80 xl:pl-80 ${textClassName}`}>
                                {text}
                            </Text>
                            <Text className={` ${text1ClassName}`}>
                                {text1}
                            </Text>
                        </ScrollAnimation>

                        <div className="flex justify-center mt-5 sm:mt-12 md:mt-0 ">
                            <Button
                                text={buttonText}
                                iconColor="#6C63FF"
                                // onClick={onButtonClick}
                                className={`mt-2 sm:mt-5 text-white border border-[#5961F9] bg-[#110F27] rounded-md ${btnClassName}`}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
