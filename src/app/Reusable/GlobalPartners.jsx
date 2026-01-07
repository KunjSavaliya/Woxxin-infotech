// pages/index.tsx or your component file

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // core styles
import 'swiper/css/autoplay'; // autoplay module
import { Autoplay } from 'swiper/modules'; // swiper v9+ uses 'modules'
import Text from './Text';

const logos = [
    '/HomePages/Gp1.png',
    '/HomePages/Gp2.png',
    '/HomePages/Gp3.png',
    '/HomePages/Gp4.png',
    '/HomePages/Gp5.png',
    '/HomePages/Gp6.png',
];

export default function GlobalPartners() {
    return (
        <div className='bg-[#110f27] p-10 md:p-16  mt-[-3px] '>
            <Text className="text-4xl md:text-2xl lg:text-3xl xl:text-[55px] text-white font-extralight">
                Global Partners
            </Text>

            <img
                src="/HomePages/line.png"
                alt="Line"
                className="w-full mt-5 md:pl-5 md:pr-5 sm:mt-14 rounded-none sm:rounded-[100%] "
            ></img>

            <div className="w-full py-6 mt-4 sm:mt-10">
                <Swiper
                    modules={[Autoplay]}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    loop={true}
                    breakpoints={{
                        320: { slidesPerView: 2, spaceBetween: 20 },
                        640: { slidesPerView: 3, spaceBetween: 30 },
                        768: { slidesPerView: 4, spaceBetween: 40 },
                        1024: { slidesPerView: 5, spaceBetween: 50 },
                    }}
                    className="w-full px-4 mx-auto max-w-7xl"
                >
                    {logos.map((src, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex items-center justify-center">
                                <img
                                    src={src}
                                    alt=""
                                    className="object-contain h-20 w-28"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>




        </div>
    );
}
