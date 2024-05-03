'use client'
import { newscontent } from "./newscontent";
import Image from "next/image";
import { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function NewsAndEventComponent() {
  const [showContent, setShowContent] = useState([]);

  useEffect(() => {
    const delay = 800;
    let timeoutId
    const showNextCard = (index) => {
      if (index < newscontent.length) {
        timeoutId = setTimeout(() => {
          setShowContent((prev) => [...prev, index]);
          showNextCard(index + 1);
        }, delay);
      }
    };

    showNextCard(0);

    AOS.init();

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      {/* <Header/> */}
      <div className="px-4 ss:px-4 lg:px-16 mb-[145px] text-black">
        <div className="mt-[86px] sm:mt-[118px]">
          <h1 className="rany text-4xl font-semibold lg:text-7xl callcenter-h1 text-black italic ">
            News and Events
          </h1>
          <p className="mt-[15px] md:mt-[31px] inter lg:text-[16px] font-normal callcenter-para text-justify">
            Smilax Global staff, processes and technology give you the information to notice trends and anticipate training needs, increase responsiveness to your internal customers, and ultimately help you to secure the reputation of providing quality service to those you service every day.
          </p>
        </div>
        <div className="">
          <div className={` grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-3 lg:gap-x-14 xl:gap-x-14 md:gap-x-10 sm:gap-x-5 ss:gap-x-5 xs:gap-x-5 ${showContent ? 'show' : ''}`}>
            {newscontent?.map((data, index) => (
              <div key={index} data-aos="fade-left" data-aos-duration="2000"
                className={` mt-5 border-b-2 border-solid border-black ${showContent.includes(index) ? '' : ''
                  }`} >
                <div className="newsandeventscard border-2 border-solid border-black rounded-lg">
                  <Image className="w-[200px] h-[80px] lg:w-full xl:w-full md:w-full sm:w-[450px] xs:w-[350px] lg:h-48 md:h-48 sm:h-48 xs:h-36  object-cover newsandeventspicture" src={data.img} alt={data.content} />
                </div>
                <div className="">
                  <p className=" h-20  font-semibold xl:text-[23px] lg:text-[18px] sm:text-[18px] xs:text-[14px] text-[10px] inter">{data.content}</p>
                  <p className=" mb-2  text-[12px] lg:text-[16px] inter italic font-light	">{data.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}