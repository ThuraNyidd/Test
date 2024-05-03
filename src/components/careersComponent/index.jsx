'use client'
import { useState, useRef, useEffect } from "react";
import { CareerData } from './careerdata'
import { Icon } from '@iconify/react';
import Link from "next/link";
import FloatingBtn from "../FloatingBtn/FloatingBtn";


export default function CareersComponent() {
  const [openDropdowns, setOpenDropdowns] = useState([]);
  const textRef = useRef(null);

  const toggleDropdown = (index) => {

    setOpenDropdowns((prevOpenDropdowns) => {
      const updatedOpenDropdowns = [...prevOpenDropdowns];
      updatedOpenDropdowns[index] = !updatedOpenDropdowns[index];
      return updatedOpenDropdowns;

    });

  };

  useEffect(() => {
    const textElement = textRef.current;
    if (textElement) {
      textElement.classList.add('slide-in-job');
    }
  }, []);

  return (
    <>
      {/* <Header/> */}
      <div className="inter px-4 ss:px-4 lg:px-16 font-semibold mb-96 mt-[86px] sm:mt-[118px] text-black">
        <div className=" mb-6 md:mb-20">
          <div className=" ">
            <h1 className="rany text-4xl font-semibold lg:text-7xl  text-black italic callcenter-h1  ">
              Be part of <br></br>our success story
            </h1>
          </div>
        </div>
        {CareerData?.map((data, index) => (
          <div key={index} className="border-t border-gray-400 py-2 sm:py-4 lg:py-4 cursor-pointer  " onClick={() => toggleDropdown(data.id)}>
            <div className="flex justify-between " >
              <h6 className="sm:text-2xl lg:text-2xl text-[14px]   text-black">
                {data.position}
              </h6>
              <div className="flex">
                <h6 className="sm:text-2xl lg:text-2xl text-[14px]  text-black">{data.positionQty}</h6>
                {openDropdowns[data.id] ? (
                  <Icon icon="ion:arrow-up-sharp"
                    className="mt-1 sm:text-2xl lg:text-2xl"
                    onClick={() => toggleDropdown(data.id)} />
                ) : (
                  <Icon icon="ion:arrow-down-sharp"
                    className="mt-1 sm:text-2xl lg:text-2xl"
                    onClick={() => toggleDropdown(data.id)} />
                )}
              </div>
            </div>
            <div className={`details ${openDropdowns[data.id] ? "open" : "closed"}`}>
              <div className="mt-4">
                <h1 className="text-sm text-black py-2">Job Description:</h1>
                <h1 className="text-sm text-black">{data.jobDescription}</h1>
              </div>
              <div>
                <h1 className="text-sm text-black pt-3 pb-1">Requirements :</h1>
                {data.Requirements?.map((Req, index) => (
                  <ul key={index}>
                    <li className="list-disc text-sm ml-4 text-black">{Req.data}</li>
                  </ul>))}
              </div>
              <div >
                <h1 className="text-sm text-black pt-3 pb-1">Company Benefits :</h1>
                {data.CompanyBenefits?.map((benf, index) => (
                  <ul key={index}>
                    <li className="list-disc text-sm ml-4 text-black">{benf.benefit}</li>
                  </ul>))}
              </div>
              <div >
                <h1 className="text-sm text-black pt-3 pb-1">Opportunities :</h1>
                {data.Opportunities?.map((oppor, index) => (
                  <ul key={index}>
                    <li className="list-disc text-sm ml-4 text-black">{oppor.Oppordata}</li>
                  </ul>))}
              </div>
              <div >
                <h1 className="text-sm text-black pt-3 pb-1">Working Condition and Hours :</h1>
                {data.WorkingCondition?.map((workcondition, index) => (
                  <ul key={index}>
                    <li className="list-disc text-sm ml-4 text-black">{workcondition.Workdata}</li>
                  </ul>))}
              </div>
              <div>
                <p className="text-sm pt-3 pb-1">If you are interested to join, please submit your CV with expected salary.</p>
              </div>
              <div className="text-center	my-4">
                <Link href='/career-application-form'>
                 <FloatingBtn classes={"	normal-case border-black border-solid border-2 px-4 py-2 rounded-2xl md:py-1 md:rounded-3xl hover:text-white text-black"} text={"Upload your cv"} disabled={false} careers footer={false} contact onClick={(e) => console.log(e)} />
                  {/* <button className='	normal-case border-black border-solid border-2 px-4 py-2 rounded-2xl md:py-1 md:rounded-3xl hover:bg-black hover:text-white text-black'><span className="flex ">Upload your cv <Icon className='mt-1 ms-3' icon="bi:upload" /></span> </button> */}
                </Link>
              </div>
            </div>
          </div>
        ))}
        <hr className="h-px bg-gray-400 border-0 "></hr>
      </div>
      {/* <Footer/> */}
    </>
  )
}