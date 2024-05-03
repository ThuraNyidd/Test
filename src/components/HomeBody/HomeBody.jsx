'use client'
import Image from "next/image"
import { useEffect } from "react"
import { useRef } from "react"
import { useState } from "react"
import BannerImage from "../../../public/images/mainbanner.jpg"
import 'animate.css'

export default function HomeBodyComponent() {
  const [isVisible, setIsVisible] = useState(false);
  const textContainerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const textContainer = textContainerRef.current;
      if (textContainer) { // Check if the ref has a value
        const textContainerTop = textContainer.offsetTop;
        const textContainerHeight = textContainer.offsetHeight;
        const windowScrollTop =
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

  // for 3 div
  const divRefs = useRef([]); // Ref to store references of each div
  useEffect(() => {
    const options = {
      threshold: 0.5, // Adjust the threshold value as needed
    };

    const handleIntersection = (entries, observer) => {
      let delay = 0;
      entries.forEach((entry) => {
        if (entry.isIntersecting && !entry.target.classList.contains('fade-in')) {
          setTimeout(() => {
            entry.target.classList.add('fade-in');
          }, delay);
          delay += 500; // Adjust the delay between each div
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    divRefs.current.forEach((divRef) => {
      observer.observe(divRef);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (

    <div className="px-4 ss:px-4 lg:px-14 rany mt-[60px] sm:mt-[80px] ">
      <div>

        <div className="pt-4 lg:pt-10">
          <h1 className=" text-3xl xs:text-5xl sm:text-6xl md:text-8xl  lg:text-8xl xl:text-[150px] font-thin text-black leading-[3rem] lg:leading-[6rem] xl:leading-[11rem] xs:leading-[3rem]  italic	">
            Transform your<br></br>
            visions into Reality
          </h1>
        </div>

        <div className="md:pt-10 lg:pt-10 sm:pt-9 xs:pt-8">
          <Image className="w-full lg:h-[600px] xs:h-[250px] md:h-[400px] sm:h-[400px] h-[250px] rounded-half-banner object-fill	" src={BannerImage} alt="bannerImage"></Image>
        </div>


        <div className="flex flex-col sm:flex sm:flex-row gap-4 sm:gap-12 mt-6 lg:mt-[90px] sm:mt-20 div-container text-black">
          <div className=" div-items" ref={(ref) => (divRefs.current[0] = ref)}>

            <h6 className="text-xl italic md:text-3xl  font-medium div-fade-left	text-black">Specialisation</h6>

            <p className="text-sm sm:text-base md:text-xl font-normal md:pt-5 div-fade-left inter">Our team has extensive knowledge and expertise in delivering high-quality, innovative solutions to help clients achieve their goals.</p>
          </div>
          <span className="sm:block xs:hidden  bg-black line h-80%"></span>
          <div className=" div-items" ref={(ref) => (divRefs.current[1] = ref)}>
            <h6 className="text-xl italic md:text-3xl  font-medium	div-fade-left text-black">Transparency</h6>
            <p className="text-sm sm:text-base md:text-xl font-normal md:pt-5 div-fade-left inter">We value open communication and aim to build a trusting and transparent partnership with our clients.</p>
          </div>
          <span className="sm:block xs:hidden  sm:bg-black line h-80%"></span>
          <div className=" div-items" ref={(ref) => (divRefs.current[2] = ref)}>
            <h6 className="text-xl italic md:text-3xl font-medium	div-fade-left text-black">Entrepreneurship</h6>
            <p className="text-sm sm:text-base md:text-xl font-normal md:pt-5 div-fade-left inter">We are an enterprising team that is dedicated to finding creative solutions to challenges and exploring new technologies to provide the best possible solutions for our clients.</p>
          </div>
        </div>
      </div>

    </div>


  )
}