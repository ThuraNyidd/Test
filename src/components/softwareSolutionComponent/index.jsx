
'use client'
import Image from "next/image"
import callImg1 from '../../../public/images/software1.jpg'
import callImg2 from '../../../public/images/software2.jpg'
import callImg3 from '../../../public/images/software3.jpg'
import callImg4 from '../../../public/images/software4.jpg'
import { useState, useRef, useEffect } from "react"

export default function SoftwareSolutionComponent() {

  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleSec, setIsVisibleSec] = useState(false);
  const [isVisibleThird, setisVisibleThird] = useState(false);
  const textContainerRef = useRef(null);
  const textContainerSecRef = useRef(null);
  const textContainerThirdRef = useRef(null);

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

  useEffect(() => {
    const handleScrollSec = () => {
      const textContainerSec = textContainerSecRef.current;
      if (textContainerSec) { // Check if the ref has a value
        const textContainerTopSec = textContainerSec.offsetTop;
        const textContainerHeightSec = textContainerSec.offsetHeight;
        const windowScrollTop =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop;
        const windowHeight = window.innerHeight;

        if (
          windowScrollTop + windowHeight >= textContainerTopSec &&
          windowScrollTop <= textContainerTopSec + textContainerHeightSec &&
          !isVisibleSec
        ) {
          setIsVisibleSec(true);
        }
      }
    };

    window.addEventListener("scroll", handleScrollSec);

    return () => {
      window.removeEventListener("scroll", handleScrollSec);
    };
  }, [isVisibleSec]);

  useEffect(() => {
    const handleScrollThird = () => {
      const textContainerThird = textContainerThirdRef.current;
      if (textContainerThird) { // Check if the ref has a value
        const textContainerTopThird = textContainerThird.offsetTop;
        const textContainerHeightThird = textContainerThird.offsetHeight;
        const windowScrollTop =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop;
        const windowHeight = window.innerHeight;

        if (
          windowScrollTop + windowHeight >= textContainerTopThird &&
          windowScrollTop <= textContainerTopThird + textContainerHeightThird &&
          !isVisibleThird
        ) {
          setisVisibleThird(true);
        }
      }
    };

    window.addEventListener("scroll", handleScrollThird);

    return () => {
      window.removeEventListener("scroll", handleScrollThird);
    };
  }, [isVisibleThird]);
  return (
    <>
      {/* <Header/> */}
      <div className=" px-4 ss:px-4 lg:px-14 mt-4 mb-32 text-black">
        <div className="mt-[86px] sm:mt-[118px]">
          <h1 className=" rany text-4xl font-semibold lg:text-7xl fade-right text-black italic ">
            Software Solutions
          </h1>
          <p className="mt-[15px] md:mt-[31px] font-normal inter lg:text-[16px] leading-8 fade-right text-justify">
            Smilax Global has the proven expertise in developing websites that succeed for you by bringing in enquiries, thereby generating sales and becoming an asset to your business. Our aim is committed towards flexible approach and try to accommodate all the needs of our clients by providing easy navigation, interface design, fast download times, cross platform compatibility, future expansion, database integration and back-end web programming.
          </p>
        </div>
        <div className="mt-7 flex flex-col">
          <div className="border-b-[1px] border-black sm:border-0 pb-5 sm:flex sm:flex-row sm:gap-4 sm:items-center lg:gap-10">
            <h1 className="rany font-semibold text-xl sm:hidden text-black">Smilax HR</h1>
            <div className="sm:basis-1/2">
              <Image className="mt-4 sm:mt-0 lg:h-[400px] md:h-[350px] sm:h-[350px] ss:h-[300px] xs:h-[250px] w-full rounded-half-banner object-cover" src={callImg1} alt="callImg" />
            </div>
            <div className="sm:basis-1/2 fade-right">
              <h1 className="rany font-semibold text-xl hidden sm:block lg:text-4xl text-black">Smilax HR</h1>
              <p className="text-justify font-normal  inter mt-3 lg:text-[16px] leading-8">With the ever-growing role played by human resources (HR) departments today, the feature depth of HR software has more to offer than ever before. The responsibilities of HR professionals go beyond hiring, firing, and tracking head counts. Smilax HR help HR professionals to manage payroll, handle in-house trainings, manage performance and managing absences easier then ever before.</p>
              {/* <p className="font-normal text-xs inter mt-3 lg:text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus
                     ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus
                     ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisq</p> */}
              {/* 
              <button className="inter normal-case forward-icon-container hidden md:block md:flex border-black border-2 border-solid px-4 py-2 rounded-2xl md:py-1 md:rounded-3xl hover:bg-black hover:text-white text-black mt-3 font-medium text-[14px] ">For more details
                <svg className="pt-[2px] ps-[1px] forward-icon " width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.33203 7.50065L12.4987 3.33398L16.6654 7.50065" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M3.33203 16.6673H9.16536C10.0494 16.6673 10.8973 16.3161 11.5224 15.691C12.1475 15.0659 12.4987 14.218 12.4987 13.334V3.33398" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </button>
              <button className="normal-case md:hidden flex forward-button1 border-black border-2 border-solid px-4 py-2 rounded-2xl md:py-1 md:rounded-3xl hover:bg-black hover:text-white hover:forward-icon-text-white mt-3 text-black font-medium text-[14px]">For more details
                <svg className="pt-[2px] ps-[1px] forward-icon" width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.33203 7.50065L12.4987 3.33398L16.6654 7.50065" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M3.33203 16.6673H9.16536C10.0494 16.6673 10.8973 16.3161 11.5224 15.691C12.1475 15.0659 12.4987 14.218 12.4987 13.334V3.33398" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </button>
*/}

            </div>
          </div>
          <div className="border-b-[1px] border-black sm:border-0 pb-5 sm:flex sm:flex-row sm:gap-4 sm:items-center lg:gap-10">
            <h1 className="rany font-semibold text-xl sm:hidden text-black mt-5">Assets Management</h1>

            <div ref={textContainerSecRef} className={`fade-scroll sm:basis-1/2 ${isVisibleSec ? 'fade-in-div' : ''}`}>
              <h1 className="rany font-semibold text-xl hidden sm:block lg:text-4xl sm:text-right text-black">Assets Management</h1>
              <p className="text-justify hidden sm:block font-normal  inter mt-3 lg:text-[16px] leading-8 sm:text-right">Asset management software is a business practice that involves managing and optimizing the purchase,
                deployment, maintenance, utilization, and disposal of software applications within an organization.</p>
              {/*              <button className="font-medium text-[14px] inter normal-case forward-icon-container hidden sm:block float-right sm:flex border-black border-2 border-solid px-4 py-2 rounded-2xl md:py-1 md:rounded-3xl hover:bg-black hover:text-white text-black mt-3">For more details
                <svg className="pt-[2px] ps-[1px] forward-icon" width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.33203 7.50065L12.4987 3.33398L16.6654 7.50065" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M3.33203 16.6673H9.16536C10.0494 16.6673 10.8973 16.3161 11.5224 15.691C12.1475 15.0659 12.4987 14.218 12.4987 13.334V3.33398" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </button>
              */}
            </div>
            <div className="sm:basis-1/2">
              <Image className="mt-4 sm:mt-0 lg:h-[400px] md:h-[350px] sm:h-[350px] ss:h-[300px] xs:h-[250px] w-full rounded-half-banner object-cover " src={callImg2} alt="callImg" />
            </div>
            <p className="text-justify sm:hidden font-normal  inter mt-3 lg:text-[16px] leading-8 sm:text-right">Asset management software is a business practice that involves managing and optimizing the purchase,
              deployment, maintenance, utilization, and disposal of software applications within an organization.</p>
            {/*   <button className="font-medium text-[14px] py-2 normal-case forward-button2 sm:hidden float-right flex border-black border-2 border-solid px-4 rounded-2xl md:py-1 md:rounded-3xl hover:bg-black hover:text-white text-black mt-3">For more details
              <svg className="pt-[2px] ps-[1px] forward-icon hover:text-white" width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.33203 7.50065L12.4987 3.33398L16.6654 7.50065" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M3.33203 16.6673H9.16536C10.0494 16.6673 10.8973 16.3161 11.5224 15.691C12.1475 15.0659 12.4987 14.218 12.4987 13.334V3.33398" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>*/}
          </div>
          <div className="border-b-[1px] border-black sm:border-0 pb-5 sm:flex sm:flex-row sm:gap-4 sm:items-center  lg:gap-10 ">
            <h1 className="rany font-semibold text-xl sm:hidden text-black mt-5">Shipping Import Management</h1>
            <div className="sm:basis-1/2">
              <Image className="mt-4 sm:mt-0 lg:h-[400px] md:h-[350px] sm:h-[350px] ss:h-[300px] xs:h-[250px] w-full rounded-half-banner object-cover " src={callImg3} alt="callImg" />
            </div>
            <div ref={textContainerRef} className={`item sm:basis-1/2 ${isVisible ? 'fade-and-scroll-right-to-left' : ''}`}>

              <h1 className="rany font-semibold text-xl hidden sm:block lg:text-4xl text-black">Shipping Import Management</h1>
              <p className="text-justify font-normal  inter mt-3 lg:text-[16px] leading-8">Shipping import can be a time-consuming job that takes up a lot of resources as your business grows. We offers software to make this job easier for you. Shipping import management software is an excellent way for small businesses to handle shipping and overall tasks.</p>
              {/*     <button className="font-medium text-[14px] py-2 inter normal-case forward-icon-container hidden sm:block sm:flex border-black border-2 border-solid px-4 rounded-2xl md:py-1 md:rounded-3xl hover:bg-black hover:text-white mt-3 text-black">For more details
                <svg className="pt-[2px] ps-[1px] forward-icon" width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.33203 7.50065L12.4987 3.33398L16.6654 7.50065" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M3.33203 16.6673H9.16536C10.0494 16.6673 10.8973 16.3161 11.5224 15.691C12.1475 15.0659 12.4987 14.218 12.4987 13.334V3.33398" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </button>
              <button className="font-medium text-[14px] py-2 inter normal-case sm:hidden forward-button1  flex border-black border-2 border-solid px-4 rounded-2xl md:py-1 md:rounded-3xl hover:bg-black hover:text-white mt-3 text-black">For more details
                <svg className="pt-[2px] ps-[1px] forward-icon" width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.33203 7.50065L12.4987 3.33398L16.6654 7.50065" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M3.33203 16.6673H9.16536C10.0494 16.6673 10.8973 16.3161 11.5224 15.691C12.1475 15.0659 12.4987 14.218 12.4987 13.334V3.33398" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </button>*/}
            </div>
          </div>
          <div className=" sm:border-0 pb-5 sm:flex sm:flex-row sm:gap-4 sm:items-center lg:gap-10">
            <h1 className="rany font-semibold text-xl sm:hidden text-black mt-5">Mobile Applications</h1>

            <div ref={textContainerThirdRef} className={`fade-scroll sm:basis-1/2 ${isVisibleThird ? 'fade-in-div' : ''}`}>
              <h1 className="rany font-semibold text-xl hidden sm:block lg:text-4xl  sm:text-right text-black">Mobile Applications</h1>
              <p className=" text-justify hidden sm:block font-normal inter mt-3 lg:text-[16px] leading-8 sm:text-right">We offers in-house android or iOS apps for our clients who needs strong and robust mobile application to manage your services in one application.</p>
              {/*   <button className="font-medium text-[14px] py-2 inter normal-case forward-icon-container hidden sm:block float-right sm:flex border-black border-2 border-solid px-4 rounded-2xl md:py-1 md:rounded-3xl hover:bg-black hover:text-white mt-3 text-black">For more details
                <svg className="pt-[2px] ps-[1px] forward-icon" width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.33203 7.50065L12.4987 3.33398L16.6654 7.50065" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M3.33203 16.6673H9.16536C10.0494 16.6673 10.8973 16.3161 11.5224 15.691C12.1475 15.0659 12.4987 14.218 12.4987 13.334V3.33398" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </button>*/}
            </div>
            <div className="sm:basis-1/2">
              <Image className="mt-4 sm:mt-0 h-[200px] lg:h-[400px] md:h-[350px] sm:h-[350px] ss:h-[300px] xs:h-[250px] w-full rounded-half-banner object-cover" src={callImg4} alt="callImg" />
            </div>
            <p className="text-justify sm:hidden font-normal inter mt-3 lg:text-[16px] leading-8 sm:text-right">We offers in-house android or iOS apps for our clients who needs strong and robust mobile application to manage your services in one application.</p>
            {/*  <button className="font-medium text-[14px] py-2 inter normal-case forward-button2 sm:hidden float-right flex border-black border-2 border-solid px-4 rounded-2xl md:py-1 md:rounded-3xl hover:bg-black hover:text-white mt-3 text-black">For more details
              <svg className="pt-[2px] ps-[1px] forward-icon" width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.33203 7.50065L12.4987 3.33398L16.6654 7.50065" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M3.33203 16.6673H9.16536C10.0494 16.6673 10.8973 16.3161 11.5224 15.691C12.1475 15.0659 12.4987 14.218 12.4987 13.334V3.33398" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>*/}
          </div>
        </div>
      </div>
      {/* <Footer/> */}
    </>
  )
}