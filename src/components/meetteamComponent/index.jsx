'use client'
import { teamMembers } from "./teamMembers";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function MeetTeamComponent() {
  const [showMenber, setShowMenber] = useState([]);
  const [showAni, setShowAni] = useState(false);

  useEffect(() => {
    const delay = 800;
    let timeoutId
    const showNextCard = (index) => {
      if (index < teamMembers.length) {
        timeoutId = setTimeout(() => {
          setShowMenber((prev) => [...prev, index]);
          showNextCard(index + 1);
        }, delay);
      }
    };

    showNextCard(0);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      {/* <Header/> */}
      <div className="px-4 lg:px-16 mb-[145px] text-black">
        <div className="mt-[86px] sm:mt-[118px]">
          <h1 className="italic text-black rany text-3xl font-medium md:text-6xl lg:text-7xl callcenter-h1">
            The People who <br></br> make the magic happen.
          </h1>
          <p className="mt-[15px] md:mt-[31px] lg:text-[16px] inter font-normal callcenter-para text-justify">
            At Smilax Global, we are proud to have a talented and dedicated team that brings a wealth of experience and expertise to everything we do.
            We understand that our success is built on the hard work and commitment of each member of our team. Let&apos;s get to know some of them:
          </p>
        </div>
        <div className="">
          <div className={`menber-container place-items-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-[7px] ${showMenber ? 'show' : ''}`}>
            {teamMembers?.map((data, index) => (

              <div key={index}
                className={`card menber-list mt-5  ${showMenber.includes(index) ? 'show' : ''
                  }`} >
                <Image className="zoomin rounded-full bg-[#DFDFDE] h-28 w-28 md:h-[200px] md:w-[200px] lg:h-[200px] lg:w-[200px] xl:h-[226px] xl:w-[226px] sm:w-[180px] sm:h-[180px] ss:w-28 ss:h-28  object-cover	" src={data.img} alt={data.name}
                />
                <div className="nameAndPosition">
                  <p className="  text-center mt-[30px] lg:mt-[56px] font-semibold xl:text-[18px] lg:text-[16px] md:text-[18px] sm:text-[20px] ss:text-[10px] xs:text-[10px] text-[10px] inter">{data.name}</p>
                  <p className="  text-center xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[14px] ss:text-[9px] xs:text-[9px] text-[7px] inter italic font-light	">{data.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}