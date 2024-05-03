'use client'
import imgMain from "../../../public/web solutions.jpg"
import img1 from "../../../public/images/Rectangle 1.png"
import img2 from "../../../public/images/Rectangle 2.png"
import img3 from "../../../public/images/Rectangle 3.png"
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
export default function WebSolutionComponent() {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    setShowImage(true);
  }, []);
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
          delay += 600; // Adjust the delay between each div
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);



    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <>
      {/* <Header/> */}
      <div className=" px-4 ss:px-4 lg:px-16 mt-4 mb-32 text-black">
        <div className="mt-[86px] sm:mt-[118px]">
          <h1 className="italic rany text-3xl lg:text-8xl font-semibold websolution-h1 text-black ">
            Web Solutions
          </h1>
          <p className="font-normal  inter  lg:text-[16px] leading-8  websolution-p text-justify  mt-6">
            Smilax Global has the proven expertise in developing websites that succeed for you by bringing in enquiries, thereby generating sales and becoming an asset to your business. Our aim is committed towards flexible approach and try to accommodate all the needs of our clients by providing easy navigation, interface design, fast download times, cross platform compatibility, future expansion, database integration and back-end web programming.
            We provide affordable web solutions for companies or individuals based on their needs and we deliver high quality website. Mainly, we are focused on meeting exceeding client&apos;s expectations at all times. We ensure that each website development project is treated as an individual project. Right from assigning a dedicated team for the project, communicating with customer, and final delivery we make sure that proper care is given to the project.
          </p>
        </div>

        <div className={`web-bodyImg  grid-cols-auto mt-[50px] lg:grid md:grid sm:grid xs:hidden ss:hidden hidden xl:grid  ${showImage ? 'show' : ''}`}>
          <Image className={`h-[250px] rounded-tl-[60px] object-cover  `} src={imgMain} alt="web-solution-1" />
          {/* <Image className={` h-[250px]   object-cover  `} src={img2} alt="web-solution-1" />
          <Image className={`  h-[250px] rounded-br-[60px] object-cover  `} src={img3} alt="web-solution-1" /> */}
        </div>
        {/* <div className={`web-bodyImg  grid-cols-3 mt-[50px] lg:grid md:grid sm:grid xs:hidden ss:hidden hidden xl:grid  ${showImage ? 'show' : ''}`}>
          <Image className={`h-[250px] rounded-tl-[60px] object-cover  `} src={img1} alt="web-solution-1" />
          <Image className={` h-[250px]   object-cover  `} src={img2} alt="web-solution-1" />
          <Image className={`  h-[250px] rounded-br-[60px] object-cover  `} src={img3} alt="web-solution-1" />
        </div> */}
        <div className="grid-cols-3 mt-[50px] lg:hidden md:hidden sm:hidden xs:block ss:block">
          <Image className={`web-bodyImg h-[200px] w-screen rounded-tl-[30px] rounded-br-[30px] ${showImage ? 'show' : ''}`} src={img1} alt="web-solution-1" />
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-3 xl:grid-cols-3  sm:grid-cols-2 ss:grid-cols-1 xs:grid-cols-1 border-t-[1px] border-gray-400 mt-[50px] pt-[15px] ss:pt-[30px] xs:pt-[30px] lg:pt-[50px] md:pt-[50px] sm:pt-[30px] xl:pt-[50px]">
          <div>
            <h1 className=" text-xl ss:text-3xl md:text-[40px] font-semibold web-body-h1 text-black rany ">Website Development</h1>
          </div>
          <div className="col-span-2">
            <p className=" mt-2.5 inter lg:text-[16px] leading-8   ss:block web-body-p text-justify  mb-[50px]">
              Smilax Global has the proven expertise in developing websites that succeed for you by bringing in enquiries,
              thereby generating sales and becoming an asset to your business. Our aim is committed towards flexible approach
              and try to accommodate all the needs of our clients by providing easy navigation, interface design, fast download
              times, cross platform compatibility, future expansion, database integration and back-end web programming. We provide
              affordable web solutions for companies or individuals based on their needs and we deliver high quality website. Mainly,
              we are focused on meeting exceeding client&apos;s expectations at all times. We ensure that each website development project
              is treated as an individual project. Right from assigning a dedicated team for the project,
              communicating with customer, and final delivery we make sure that proper care is given to the project.
            </p>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-3 xl:grid-cols-3   sm:grid-cols-2 ss:grid-cols-1 xs:grid-cols-1 border-t-[1px] border-gray-400 pt-[15px]  ss:pt-[30px] xs:pt-[30px] lg:pt-[50px] md:pt-[50px] sm:pt-[30px] xl:pt-[50px]">
          <div>
            <h1 className=" text-xl ss:text-3xl md:text-[40px] font-semibold web-body-h1 text-black rany ">Domain Hosting</h1>

          </div>
          <div className="col-span-2">
            <p className="  mt-2.5 inter lg:text-[16px] leading-8   ss:block web-body-p text-justify  mb-[50px]">
              Web hosting from Smilax Global gives you everything you need to get your website up and running in minutes.
              The range of great value hosting packages that will fit your needs, no matter what size server capacity you require
              and provides a solution for personal websites, blogs and businesses of all sizes.
              Our servers are housed in a state-of-the-art data centre in United Kingdom and our service is backed by our technical support team.
            </p>
          </div>
        </div>
        {/*   <div className="mt-7 border-b-2 border-gray-400 pb-5">
          <h1 className="text-xl ss:text-3xl md:text-[40px] font-semibold web-body-h1 text-black inter ">Website Development</h1>

          <div className="flex flex-col lg:flex-col-reverse" ref={(ref) => (divRefs.current[1] = ref)}>
          <Image className={`web-bodyImg w-screen lg:h-[400px] xs:h-[250px] md:h-[400px] sm:h-[400px] ss:h-[350px] h-[250px] object-cover rounded ${showImage ? 'show' : ''}`} src={img1} alt="web-solution-1" />

          <p className="  mt-2.5 inter lg:text-[16px] leading-8   ss:block web-body-p text-justify  mb-8">
              Smilax Global has the proven expertise in developing websites that succeed for you by bringing in enquiries,
              thereby generating sales and becoming an asset to your business. Our aim is committed towards flexible approach
              and try to accommodate all the needs of our clients by providing easy navigation, interface design, fast download
              times, cross platform compatibility, future expansion, database integration and back-end web programming. We provide
              affordable web solutions for companies or individuals based on their needs and we deliver high quality website. Mainly,
              we are focused on meeting exceeding client&apos;s expectations at all times. We ensure that each website development project
              is treated as an individual project. Right from assigning a dedicated team for the project,
              communicating with customer, and final delivery we make sure that proper care is given to the project.
            </p>
    
          </div>

        </div>              
        <div  className="mt-7 border-gray-400 pb-5">
        <h1 className="text-xl ss:text-3xl md:text-[40px] text-black inter font-semibold" >Domain Hosting</h1>

          <div className="flex flex-col lg:flex-col-reverse" ref={(ref) => (divRefs.current[0] = ref)}>

        
          <Image className={`web-bodyImg w-screen  lg:h-[400px] xs:h-[250px] md:h-[400px] sm:h-[400px] ss:h-[350px] h-[250px] object-cover rounded ${showImage ? 'show' : ''}`} src={img2} alt="web-solution-1" />
            <p className="   mt-2.5 inter lg:text-[16px] leading-8 web-body-p  ss:block items-security text-justify  mb-8" >
              Web hosting from Smilax Global gives you everything you need to get your website up and running in minutes.
              The range of great value hosting packages that will fit your needs, no matter what size server capacity you require
              and provides a solution for personal websites, blogs and businesses of all sizes.
              Our servers are housed in a state-of-the-art data centre in United Kingdom and our service is backed by our technical support team.
            </p>
          



          </div>
    
         {/*} <div className="grid justify-items-center ">
            <button className=" normal-case flex border-black border border-solid  px-2 rounded-2xl py-1 md:rounded-3xl hover:bg-black hover:text-white mt-4 text-black  ">For more details
              <svg className="forward-icon"  width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.33203 7.50065L12.4987 3.33398L16.6654 7.50065" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M3.33203 16.6673H9.16536C10.0494 16.6673 10.8973 16.3161 11.5224 15.691C12.1475 15.0659 12.4987 14.218 12.4987 13.334V3.33398" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
  </div>
        </div>
</>*/}
      </div>
      {/* <Footer/> */}
    </>
  )
}