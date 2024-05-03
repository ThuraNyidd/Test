'use client'
import Image from "next/image"
import callImg1 from '../../../public/call-center.jpg'
import callImg2 from '../../../public/images/crm1.png'
import callImg4 from '../../../public/images/crm4.png'
import { useState, useEffect } from "react"
export default function CallCenterComponent() {

  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    setShowImage(true);
  }, []);

  return (
    <>
      {/* <Header/> */}
      <div className=" px-4 ss:px-4 lg:px-16 mt-4 mb-32 text-black ">
        <div className="mt-[86px] sm:mt-[118px]">
          <h1 className="rany text-4xl font-semibold lg:text-7xl callcenter-h1 text-black italic">
            Call Centre &
            CRM Solutions
          </h1>
          <p className="mt-[15px] md:mt-[31px] font-normal inter mt-3 lg:text-[16px] leading-8 text-justify  callcenter-p">
            Every contact centre is different and that's why Smilax is built to handle all types of business goals. Whether your contact centre is focused on fundraising, collections, handling requests about local natural disasters, or providing internal help desk support for your employees, our contact centre solutions are built to cater to your needs.
          </p>
        </div>

        <div className={`web-bodyImg mt-[50px] hidden lg:block md:block sm:block ss:hidden ${showImage ? 'show' : ''}`}>
          <Image className={`max-h-[400px] rounded-tl-[60px] object-cover w-full `} src={callImg1} alt="web-solution-1" />
          {/* <Image className={` h-[250px]   object-cover  `} src={callImg2} alt="web-solution-1" />
          <Image className={`  h-[250px] rounded-br-[60px] object-cover  `} src={callImg3} alt="web-solution-1" /> */}

        </div>
        <div className=" grid-cols-3 mt-[50px] lg:hidden md:hidden sm:hidden xs:block ss:block">
          <Image className={`web-bodyImg w-screen rounded-tl-[30px] rounded-br-[30px] object-fit  ${showImage ? 'show' : ''}`} src={callImg2} alt="web-solution-1" />

        </div>
        <div className="lg:flex xl:flex md:flex sm:flex ss:block xs:block mt-[50px] border-b-[1px]">
          <div className="basis-1/3 callcenter-para lg:border-r-[1px] xl:border-r-[1px] md:border-r-[1px] sm:border-r-[1px] ss:border-b-[1px] border-b-[1px] xl:border-b-0 lg:border-b-0 md:border-b-0 sm:border-b-0">
            <h1 className="pt-5 rany font-semibold text-xl  lg:text-[30px] text-black text-center">Interactive Voice Response (IVR)</h1>
            <p className="pb-5 font-normal inter mt-3 lg:text-[18px] text-center p-2">Send incoming calls to the right call centre agents. Set up your IVR any way you want.</p>
          </div>
          <div className="basis-1/3 callcenter-para lg:border-r-[1px] xl:border-r-[1px] md:border-r-[1px] sm:border-r-[1px] ss:border-b-[1px] border-b-[1px] xl:border-b-0 lg:border-b-0 md:border-b-0 sm:border-b-0 ">
            <h1 className="pt-5 rany font-semibold text-xl  lg:text-[30px] text-black text-center">Call Recording</h1>
            <p className="pb-5 font-normal inter mt-3 lg:text-[18px] text-center p-2">Record, pause, and listen to customer interactions any time.

            </p>
          </div>
          <div className="basis-1/3 callcenter-para">
            <h1 className="pt-5 rany font-semibold text-xl  lg:text-[30px] text-black text-center">Automatic Call Distribution (ACD)</h1>
            <p className="pb-5 font-normal inter mt-3 lg:text-[18px] text-center p-2">Distribute calls based on business hours, technical support level, IVR options, and more.</p>
          </div>
        </div>
        <div className="lg:flex xl:flex md:flex sm:flex ss:block xs:block ">
          <div className="basis-1/3 callcenter-para lg:border-r-[1px] xl:border-r-[1px] md:border-r-[1px] sm:border-r-[1px] ss:border-b-[1px] border-b-[1px] xl:border-b-0 lg:border-b-0 md:border-b-0 sm:border-b-0">
            <h1 className="pt-6 rany font-semibold text-xl  lg:text-[30px] text-black text-center">VoIP Phone Numbers</h1>
            <p className="pb-5 font-normal inter mt-3 lg:text-[18px] text-center p-2">Get local and toll-free numbers or port your existing phone numbers.

            </p>
          </div>
          <div className="basis-1/3 callcenter-para lg:border-r-[1px] xl:border-r-[1px] md:border-r-[1px] sm:border-r-[1px] ss:border-b-[1px] border-b-[1px] xl:border-b-0 lg:border-b-0 md:border-b-0 sm:border-b-0">
            <h1 className="pt-6 rany font-semibold text-xl lg:text-[30px] text-black text-center">Call Recording</h1>
            <p className="pb-5 font-normal inter mt-3 lg:text-[18px] text-center p-2">Manage customer interactions like a pro. Don’t let your customers repeat requests.

            </p>
          </div>
          <div className="basis-1/3 callcenter-para ss:border-b-[1px] border-b-[1px] xl:border-b-0 lg:border-b-0 md:border-b-0 sm:border-b-0">
            <h1 className="pt-6 rany font-semibold text-xl lg:text-[30px] text-black text-center">Dashboards & Reporting</h1>
            <p className="pb-5 font-normal inter mt-3 lg:text-[18px] text-center p-2">Get access to 40+ advanced features & reports to measure your VoIP call centre efficiency.

            </p>
          </div>
        </div>
        <div className="grid lg:gap-10 xl:gap-10 md:gap-10 sm:gap-10  ss:gap-5 xs:gap-5 lg:grid-cols-2 md:grid-cols-2 xl:grid-cols-2  sm:grid-cols-2 ss:grid-cols-1 xs:grid-cols-1 ss:pt-[50px] xs:pt-[50px] lg:pt-[80px] md:pt-[80px] sm:pt-[80px] xl:pt-[80px]">
          <Image className={`h-[250px]  object-cover  rounded-tl-[30px] rounded-br-[30px]  `} src={callImg4} alt="web-solution-1" />

          <div>
            <h1 className="pt-6 rany font-semibold text-xl lg:text-[30px] text-black lg:text-left xl:text-left md:text-left sm:text-left ss:text-center xs:text-center">CRM Solutions</h1>

            <p className="  mt-2.5 inter lg:text-[16px] lg:leading-8 xl:leading-8 md:leading-8 sm:leading-7 ss:leading-8 xs:leading-8   ss:block web-body-p  mb-[50px] text-justify lg:text-left xl:text-left md:text-left sm:text-left ss:text-justify xs:text-justify">
              Customer relationship management (CRM) software enables sales professionals and marketing teams to track all interactions that have taken place with a prospect or customer. The best CRM software allows administrators to set up an automated workflow to ensure customer inquiries are handled in a timely manner and by the right team member.
            </p>
          </div>
        </div>
        {/*  <div className="mt-7 flex flex-col">
          <div className="border-b-[1px] border-black sm:border-0 pb-5 sm:flex sm:flex-row sm:gap-4 sm:items-center lg:gap-10">
            <h1 className="rany font-semibold text-xl sm:hidden text-black ">Interactive Voice Response (IVR)</h1>
            <div className="sm:basis-1/2 ">
              <Image className="mt-4 sm:mt-0 lg:h-[400px] md:h-[350px] sm:h-[350px] ss:h-[300px] xs:h-[250px] w-full rounded-half-banner object-cover  " src={callImg1} alt="callImg" />
            </div>
            <div className="sm:basis-1/2 callcenter-para">
              <h1 className="rany font-semibold text-xl hidden sm:block lg:text-4xl text-black">Interactive Voice Response (IVR)</h1>
              <p className="font-normal inter mt-3 lg:text-base">Send incoming calls to the right call centre agents. Set up your IVR any way you want.</p>
            </div>
          </div>
          <div className="border-b-[1px] border-black sm:border-0 pb-5 sm:flex sm:flex-row sm:gap-4 sm:items-center lg:gap-10">
            <h1 className="rany font-semibold text-xl sm:hidden text-black mt-5">Call Recording</h1>

            <div ref={textContainerSecRef} className={`fade-scroll sm:basis-1/2 ${isVisibleSec ? 'fade-in-div' : ''}`}>
              <h1 className="rany font-semibold text-xl hidden sm:block lg:text-4xl sm:text-right text-black">Call Recording</h1>
              <p className="hidden sm:block font-normal inter mt-3 lg:text-base  sm:text-right">Record, pause, and listen to customer interactions any time.</p>
            </div>
            <div className="sm:basis-1/2">
              <Image className="mt-4 sm:mt-0 lg:h-[400px] md:h-[350px] sm:h-[350px] ss:h-[300px] xs:h-[250px] w-full rounded-half-banner object-cover  " src={callImg2} alt="callImg" />
            </div>
            <p className=" sm:hidden font-normal  inter mt-3 lg:text-base  sm:text-right">Record, pause, and listen to customer interactions any time.</p>
          </div>
          <div className="border-b-[1px] border-black sm:border-0 pb-5 sm:flex sm:flex-row sm:gap-4 sm:items-center lg:gap-10">
            <h1 className="rany font-semibold text-xl sm:hidden text-black mt-5">Automatic Call Distribution (ACD)</h1>
            <div className="sm:basis-1/2 ">
              <Image className="mt-4 sm:mt-0 lg:h-[400px] md:h-[350px] sm:h-[350px] ss:h-[300px] xs:h-[250px] w-full rounded-half-banner object-cover  " src={callImg5} alt="callImg" />
            </div>
            <div className={`item sm:basis-1/2 ${isVisible ? "fade-and-scroll-right-to-left" : ""
              }`}
              ref={textContainerRef}>
              <h1 className="rany font-semibold text-xl hidden sm:block lg:text-4xl text-black">Automatic Call Distribution (ACD)</h1>
              <p className="font-normal inter mt-3 lg:text-base">Distribute calls based on business hours, technical support level, IVR options, and more.</p>
            </div>
          </div>
          <div className="border-b-[1px] border-black sm:border-0 pb-5 sm:flex sm:flex-row sm:gap-4 sm:items-center lg:gap-10">
            <h1 className="rany font-semibold text-xl sm:hidden text-black mt-5">VoIP Phone Numbers</h1>

            <div ref={textContainerThirdRef} className={`fade-scroll sm:basis-1/2 ${isVisibleThird ? 'fade-in-div' : ''}`}>
              <h1 className="rany font-semibold text-xl hidden sm:block lg:text-4xl  sm:text-right text-black">VoIP Phone Numbers</h1>
              <p className="hidden sm:block font-normal inter mt-3 lg:text-base  sm:text-right">Get local and toll-free numbers or port your existing phone numbers.</p>
            </div>
            <div className="sm:basis-1/2">
              <Image className="mt-4 sm:mt-0 lg:h-[400px] md:h-[350px] sm:h-[350px] ss:h-[300px] xs:h-[250px] w-full rounded-half-banner object-cover " src={callImg6} alt="callImg" />
            </div>
            <p className=" sm:hidden font-normal  inter mt-3 lg:text-base  sm:text-right">Get local and toll-free numbers or port your existing phone numbers.</p>
          </div>
          <div className="border-b-[1px] border-black sm:border-0 pb-5 sm:flex sm:flex-row sm:gap-4 sm:items-center lg:gap-10">
            <h1 className="rany font-semibold text-xl sm:hidden text-black mt-5">Call Routing</h1>
            <div className="sm:basis-1/2 ">
              <Image className="mt-4 sm:mt-0 lg:h-[400px] md:h-[350px] sm:h-[350px] ss:h-[300px] xs:h-[250px] w-full rounded-half-banner object-cover " src={callImg3} alt="callImg" />
            </div>
            <div className={`item sm:basis-1/2 ${isVisibleFourth ? "fade-and-scroll-right-to-left" : ""
              }`}
              ref={textContainerFourthRef}>
              <h1 className="rany font-semibold text-xl hidden sm:block lg:text-4xl text-black">Call Routing</h1>
              <p className="font-normal  inter mt-3 lg:text-base">Manage customer interactions like a pro. Don’t let your customers repeat requests.</p>
            </div>
          </div>
          <div className="border-b-[1px] border-black sm:border-0 pb-5 sm:flex sm:flex-row sm:gap-4 sm:items-center lg:gap-10">
            <h1 className="rany font-semibold text-xl sm:hidden text-black mt-5">Dashboards & Reporting</h1>

            <div ref={textContainerFifthRef} className={`fade-scroll sm:basis-1/2 ${isVisibleFifth ? 'fade-in-div' : ''}`}>
              <h1 className="rany font-semibold text-xl hidden sm:block lg:text-4xl sm:text-right text-black">Dashboards & Reporting</h1>
              <p className="hidden sm:block font-normal inter mt-3 lg:text-base  sm:text-right">Get access to 40+ advanced features & reports to measure your VoIP call centre efficiency..</p>
            </div>
            <div className="sm:basis-1/2">
              <Image className="mt-4 sm:mt-0 lg:h-[400px] md:h-[350px] sm:h-[350px] ss:h-[300px] xs:h-[250px] w-full rounded-half-banner object-cover  " src={callImg5} alt="callImg" />
            </div>
            <p className=" sm:hidden font-normal  inter mt-3 lg:text-base  sm:text-right">Get access to 40+ advanced features & reports to measure your VoIP call centre efficiency..</p>
          </div>
          <div className="sm:border-0 pb-5 sm:flex sm:flex-row sm:gap-4 sm:items-center lg:gap-10">
            <h1 className="rany font-semibold text-xl sm:hidden text-black mt-5">CRM Solutions</h1>
            <div className="sm:basis-1/2 ">
              <Image className="mt-4 sm:mt-0 lg:h-[400px] md:h-[350px] sm:h-[350px] ss:h-[300px] xs:h-[250px] w-full rounded-half-banner object-cover  " src={callImg4} alt="callImg" />
            </div>
            <div className={`item sm:basis-1/2 ${isVisibleSix ? "fade-and-scroll-right-to-left" : ""
              }`}
              ref={textContainerSixRef}>
              <h1 className="rany font-semibold text-xl hidden sm:block lg:text-4xl text-black">CRM Solutions</h1>
              <p className="font-normal  inter mt-3 lg:text-base">Customer relationship management (CRM) software enables sales professionals and marketing teams to track all interactions that have taken place with a prospect or customer. The best CRM software allows administrators to set up an automated workflow to ensure customer inquiries are handled in a timely manner and by the right team member.</p>
            </div>
          </div>
            </div>*/}
      </div>
      {/* <Footer/> */}
    </>
  )

}

// mt-[86px] sm:mt-[118px]