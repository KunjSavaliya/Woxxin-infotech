// components/MobileAppSection.js
import Text from "./Text";
import Button from "./Button";
import ScrollAnimation from "react-animate-on-scroll";

const MobileAppSection = ({
  bgImageSrc,
  iconSrc,
  logoSrc,
  title,
  title1,
  description,
  iconClassNames = "",
  bgImageClassNames = "",
  descriptionClassName = "",
  buttonText = "",
  buttonText1 = "",
  Mtext = "",
  MTitle = "",
  EcoText1 = "",
  EcoText = "",
  onButtonClick = "",
  onButtonClick2 = "",
}) => {
  return (
    <div className="relative bg-[#110f27] w-full h-full">
      <img
        src={bgImageSrc}
        alt="Main Background"
        className={`absolute w-full ${bgImageClassNames}`}
      />
      <div className="relative z-10 flex flex-col items-start w-full h-full text-left">
        <div className="w-[100%] flex flex-col p-6 mt-32 text-white sm:mt-40 gap-[80px] lg:gap-[150px] max-w-[90rem] mx-auto ">
          {/* Top Section */}
          <div>
            <div className="flex items-center justify-between md:gap-10 lg:gap-32">
              <div className=" w-auto md:w-[70%] lg:w-2/3">
                <div>
                  <img
                    src="/HomePages/Google.png"
                    alt="Google"
                    className="w-40 md:w-56"
                  />
                </div>
                <Text className="text-start leading-normal md:leading-[1.2] text-gradient-mobiletext text-5xl sm:text-5xl  md:text-6xl lg:text-[80px] xl:text-[80px] font-semibold mt-6 sm:mt-16">
                  {title}
                </Text>
                <Text className=" font-extralight text-2xl sm:text-3xl md:text-3xl lg:text-[30px] xl:text-3xl text-white text-start mt-10 sm:mt-16 ">
                  {title1}
                </Text>
              </div>
              <div className="relative items-center justify-center hidden md:flex w-[30%]">

                {/* Glow background */}
                <div className="absolute w-[300px] h-[300px] bg-gradient-to-tr from-purple-500 via-blue-500 to-pink-500 blur-[120px] opacity-40 rounded-full"></div>

                <img
                  src={iconSrc}
                  alt="Diamond"
                  className={`relative z-10 w-[220px] animate-float ${iconClassNames}`}
                />
              </div>
            </div>
            <Text
              className={` text-white mt-5 font-light text-start  ${descriptionClassName} `}
            >
              {description}
            </Text>
            {(EcoText || EcoText1) && (
              <div className="mt-5 mb-12 xl:pl-56 xl:pr-56">
                {EcoText && (
                  <Text
                    className={` text-white text-3xl xl:text-[40px] text-center leading-normal `}
                  >
                    {EcoText}
                  </Text>
                )}

                {EcoText1 && (
                  <Text
                    className={` text-white text-3xl xl:text-[40px] text-center mt-12 leading-normal `}
                  >
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
          {MTitle && (
            <div>
              <Text className="text-2xl md:text-3xl mt-1 lg:text-4xl xl:text-[35px] text-white font-bold">

                {MTitle}
              </Text>
              <img
                src="/HomePages/line.png"
                alt="Line"
                className="mx-auto mt-5 mb-5 "
              />
              <div className="flex flex-wrap md:flex-nowrap mt-2 justify-center divide-y md:divide-y-0 md:divide-x divide-[#9387FF] "></div>

              <div className="flex flex-col text-white ">
                <ScrollAnimation animateIn="animate__animated animate__fadeInUp">
                  <Text size="text-center text-xl font-light text-white md:text-4xl lg:text-4xl xl:text-4xl  xl:mt-0 lg:mt-0 ">
                    {Mtext}
                  </Text>
                </ScrollAnimation>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileAppSection;
