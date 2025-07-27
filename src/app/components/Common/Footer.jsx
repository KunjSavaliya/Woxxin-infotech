import React from 'react';
import Text from '@/app/Reusable/Text'

function Footer() {

    const AdFormats = [
        { title: 'Mobile Apps' },
        { title: 'Mobile Games' },
        { title: 'H5 Games / Quiz' },
        { title: 'Video Ads' },
        { title: 'Google Ads' },
        { title: 'Investment' },
        { title: 'App Acquire' }

    ];
    const Verticals = [
        { title: 'About' },
        { title: 'We share' },
        { title: 'Careers' }
    ];
    const Resources = [
        { title: 'woxxin@gmail.com' },
        { title: '+91 1234567890' },
        { title: '410, Silverstone Arcade, Singanpore Causeway road,Katargam, Surat 395004' },
    ];

    return (
        <div className=' bg-[#110f27] '>
            <div className='flex flex-wrap justify-between p-11 gap-y-10 sm:p-8 md:p-8 md:justify-around lg:gap-20 lg:p-20'>
                <div className='flex justify-center items-center'>
                    <div>
                        <img src="/logo.png" alt="logo" className="cursor-pointer w-64" />
                    </div>

                </div>
                <div className=''>
                    <Text size="text-md md:text-xl lg:text-3xl xl:text-[25px] text-white text-start">
                        WHAT
                    </Text>
                    <div className='mt-8'>
                        {AdFormats.map((item, index) => (
                            <p key={index} className={`mt-${index === 0 ? '0' : '5'} text-sm md:text-lg`}>
                                {item.title}
                            </p>
                        ))}
                    </div>
                </div>
                <div className=''>
                    <Text size="text-md md:text-xl lg:text-3xl xl:text-[25px] text-white text-start">
                        Verticals
                    </Text>
                    <div className='mt-8'>
                        {Verticals.map((item, index) => (
                            <p key={index} className={`mt-${index === 0 ? '0' : '5'} text-sm md:text-lg`}>
                                {item.title}
                            </p>
                        ))}
                    </div>
                </div>
                <div className=''>
                    <Text size="text-md md:text-xl lg:text-3xl xl:text-[25px] text-white text-start">
                        Resources
                    </Text>
                    <div className='mt-8'>
                        {Resources.map((item, index) => (
                            <p key={index} className={`mt-${index === 0 ? '0' : '5'} text-sm md:text-lg`}>
                                {item.title}
                            </p>
                        ))}
                    </div>
                </div>




            </div>
        </div>
    );
}

export default Footer;
