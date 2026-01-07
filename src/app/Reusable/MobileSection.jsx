// components/MobileAppSection.js
import Image from 'next/image';
import Text from './Text';
import Button from './Button';
import { useRouter } from 'next/navigation';

const MobileAppSection = ({
  bgImageSrc,
  iconSrc,
  logoSrc,
  title,
  title1,
  title2,
  description,
  mission,
  img1,
  iconClassNames = '',
  bgImageClassNames = '',
  descriptionClassName = '',
  buttonText = '',
  buttonText1 = '',
  Mtext = '',
  MTitle = '',
  EcoText1 = '',
  EcoText = '',
  onButtonClick ='',
  onButtonClick2 =''

}) => {

  return (
    <div className="relative bg-[#110f27] w-full h-full">
      <img
        src={bgImageSrc}
        alt="Main Background"
        className={`absolute w-full ${bgImageClassNames}`}
      />
      <div className="relative z-10 flex flex-col items-start w-full h-full text-left">
        <div className="w-[100%] flex flex-col p-6 mt-32 text-white sm:mt-40 gap-[80px] lg:gap-[150px] sm:px-20 md:px-16 lg:px-20 lg:pl-20 xl:px-32 xl:pl-32 ">
          {/* Top Section */}
          <div>
            <div className="flex items-center justify-between md:gap-10 lg:gap-32">
              <div className=" w-auto md:w-[70%] lg:w-2/3">
                <img
                  src={logoSrc}
                  alt="Logo"
                  className="w-32 sm:w-40 md:w-64"
                />
                <Text className="text-start leading-[1.2] md:leading-[1.2] text-gradient-mobiletext font-extralight text-5xl sm:text-7xl md:text-[65px] lg:text-[70px]  xl:text-[80px] mt-6 sm:mt-16">
                  {title}
                </Text>
                <Text className=" font-extralight text-2xl sm:text-3xl md:text-3xl lg:text-[30px] xl:text-3xl text-white text-start mt-10 sm:mt-16 ">
                  {title1}
                </Text>
              </div>
              <div className="items-center justify-center hidden md:flex">
                <img
                  src={iconSrc}
                  alt="Mobile Icon"
                  className={iconClassNames}
                />
              </div>

            </div>
            <Text className={` text-white font-medium text-start  ${descriptionClassName} `}>
              {description}
            </Text>
            {(EcoText || EcoText1) && (
              <div className="mt-5 mb-12 xl:pl-56 xl:pr-56">
                {EcoText && (
                  <Text className={` text-white text-3xl xl:text-[40px] text-center  `}>
                    {EcoText}
                  </Text>
                )}

                {EcoText1 && (
                  <Text className={` text-white text-3xl xl:text-[40px] text-center mt-12 `}>
                    {EcoText1}
                  </Text>
                )}
              </div>
            )}
            {(buttonText || buttonText1) && (
              <div className="flex justify-center gap-12 mt-12 ">
                {buttonText && (
                  <Button
                    text={buttonText}
                    iconColor="#6C63FF"
                  onClick={onButtonClick} 
                    className="mt-2 sm:mt-5 text-white border border-[#5961F9] bg-[#110F27] rounded-md"
                  />
                )}

                {buttonText1 && (
                  <Button
                    text={buttonText1}
                    iconColor="#6C63FF"
                    className="mt-2 sm:mt-5 text-white border border-[#5961F9] bg-[#110F27] rounded-md"
                    onClick={onButtonClick2} 
                  />
                )}
              </div>
            )}

          </div>
          {(MTitle) && (
            <div>
              <Text className="text-xl md:text-2xl mt-1 lg:text-3xl xl:text-[35px] text-white">
                {MTitle}
              </Text>
              <img
                src="/HomePages/line.png"
                alt="Line"
                className="w-full mt-6 rounded-[30%]"
              />
              <div className="flex flex-wrap md:flex-nowrap  mt-2 justify-center divide-y md:divide-y-0 md:divide-x divide-[#9387FF] mb-16">
              </div>
              <div className="flex flex-col text-white gap-7 ">
                <Text size="text-center text-xl font-bold text-white   md:text-4xl lg:text-4xl xl:text-4xl  xl:mt-0 lg:mt-0 ">
                  {Mtext}
                </Text>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileAppSection;
