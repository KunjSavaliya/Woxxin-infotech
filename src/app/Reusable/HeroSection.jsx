// components/HeroSection.jsx
import Text from "./Text";
import Button from "./Button";
import "animate.css";
import ScrollAnimation from "react-animate-on-scroll";
const HeroSection = ({
  imageSrc,
  text,
  buttonText,
  textClassName,
  text1,
  text1ClassName,
  btnClassName,
  onButtonClick,
}) => {
  return (
    <div className="relative  bg-[#110f27]">
      <div>
        <img
          src={imageSrc}
          alt="Main Background"
          className="w-full h-[55vh] xl:h-[70vh] opacity-70 "
        />
      </div>
      <div className="absolute top-0 left-0 flex flex-col items-center w-full h-full text-left  justify-center">
        <div className="flex flex-col justify-around ">
          <div className="  flex flex-col gap-16 md:gap-24 xl:gap-32 ">
            <div>
              <ScrollAnimation animateIn="animate__animated animate__zoomIn">
                <Text
                  className={` md:leading-[1.2] mt-1   sm:text-5xl md:text-6xl  lg:leading-[1.2]  xl:leading-[1.2]  sm:px-12 md:px-20 lg:px-20 xl:px-80 xl:pl-80 ${textClassName}`}
                >
                  {text}
                </Text>
                <Text className={` ${text1ClassName}`}>{text1}</Text>
              </ScrollAnimation>
            </div>
            <div className="flex justify-center mt-5 sm:mt-12 md:mt-0 ">
              <Button
                text={buttonText}
                iconColor="#6C63FF"
                onClick={onButtonClick}
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
