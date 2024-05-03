
import React from "react";
import { images } from './customer_logo.js';
import Marquee from "react-fast-marquee";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import Image from "next/image";

const ImgSlider = () => {
  const firstTwenty = images.slice(0, images.length / 2);
  const secondTwenty = images.slice(images.length / 2, images.length);
  const [isVisible, setIsVisible] = useState(false);
  const textContainerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const textContainer = textContainerRef.current;
      if (textContainer) { // Check if the ref has a value
        const textContainerTop = textContainer.offsetTop;
        const textContainerHeight = textContainer.offsetHeight;
        const windowScrollTop =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop;
        const windowHeight = window.innerHeight;

        if (
          windowScrollTop + windowHeight >= textContainerTop &&
          windowScrollTop <= textContainerTop + textContainerHeight &&
          !isVisible
        ) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isVisible]);


  return (
    <>

      <div className=" mb-16 ms-[1.5rem] ss:ms-[1.5rem] xs:ms-[1.5rem] lg:ms-20 sm:ms-16 ">
        <div
          className={`item ${isVisible ? "fade-and-scroll-right-to-left" : ""
            }`}
          ref={textContainerRef}
        >
          <h1 className=" text-3xl ss:text-5xl sm:text-5xl lg:text-[60px]  font-normal rany italic text-black">
            Our Successful <br></br> Customers
          </h1>{" "}
        </div>
      </div>
      <div className="mb-32">
        <div className="marqueeCont">
          <Marquee
            speed={30}
            gradient={false}
            direction="left"
            className="marquee"
          >
            {firstTwenty.map((data) => (
              <div className="slide mx-7">
                <Image className="w-full h-20 sm:h-24 sliderImage cursor-pointer" width={100} src={data.img} alt="img1" />
              </div>
            ))}
          </Marquee>
        </div>
        <div className="mt-6 lg:mt-12 marqueeCont">
          <Marquee
            speed={30}
            gradient={false}
            direction="right"
          >
            {secondTwenty.map((data) => (
              <div className="slide mx-7">
                <Image className="w-full h-20 sm:h-24 sliderImage cursor-pointer " width={100} src={data.img} alt="img1" />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </>
  );
};

export default ImgSlider;