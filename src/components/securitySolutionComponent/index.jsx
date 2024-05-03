'use client'

import { useEffect, useState } from "react";
import Image from "next/image";
import img1 from "../../../public/images/securitysystem-min2.jpg";
import img2 from "../../../public/images/security2.jpg";

export default function SecurityComponent() {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    setShowImage(true);
  }, []);



  return (
    <>
      {/* <Header/> */}
      <div className="inter px-4 ss:px-4 lg:px-16 pb-6 mb-6 " >
        <div className="pt-3 job-banner mt-[86px] sm:mt-[118px]">
          <h1 className="italic rany text-black text-3xl font-semibold ss:text-4xl md:text-6xl lg:text-7xl Security-title">
            Security Solutions
          </h1>
        </div>

        <div className='security-image-container block md:block h-full'  >
          <div className={`security-image flex gap-5 mt-14 w-full show`}>
            <Image className='md:basis-1/2 w-96' src={img1} loading="lazy" alt="security1" />
            <Image className='hidden md:block md:basis-1/2 w-96' src={img2} alt="security2" />
          </div>
        </div>
        <div className="mt-7 md:mt-14 flex flex-col lg:flex-row gap-4 md:flex-row security-body ">
          <div className="flex flex-col gap-4 basis-1/2 reviewdelay1" >
            <div className="items-security ">
              <h6 className=" font-semibold ss:text-xl text-black">
                Access control system
              </h6>
              <p className=" font-normal	ss:text-[16px] text-black text-justify">
                An access control system is a security solution that regulates and manages entry to a physical or digital space. It typically involves authentication, authorization, and monitoring of individuals' or devices' access. This can include key cards, biometric scans, PINs, or digital certificates for physical access, and username/password combinations or other authentication methods for digital access. Access control systems are commonly used in buildings, data centers, and computer networks to enhance security and control who can enter specific areas or access certain resources.
              </p>
              {/* 
            <button className="font-medium text-[14px] py-2 inter normal-case forward-button2 flex border-black border-2 border-solid px-4 rounded-2xl md:py-1 md:rounded-3xl hover:bg-black hover:text-white mt-3 text-black">For more details
              <svg className="pt-[2px] ps-[1px] forward-icon" width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.33203 7.50065L12.4987 3.33398L16.6654 7.50065" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M3.33203 16.6673H9.16536C10.0494 16.6673 10.8973 16.3161 11.5224 15.691C12.1475 15.0659 12.4987 14.218 12.4987 13.334V3.33398" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>  
            */}
            </div>
            <div className="items-security">
              <h6 className=" font-semibold  ss:text-xl text-black">
                Surveillance system
              </h6>
              <p className=" font-normal	ss:text-[16px] text-black text-justify">
                A surveillance system is a setup of cameras and sensors used to monitor and record activities in a specific area.These systems are commonly used for security, such as in homes, businesses, or public places, to deter and document unauthorized activities.Surveillance systems can be analog or digital and may include features like video recording, live monitoring, and motion detection.
              </p>
              {/* 
            <button className="font-medium text-[14px] py-2 inter normal-case forward-button2 flex border-black border-2 border-solid px-4 rounded-2xl md:py-1 md:rounded-3xl hover:bg-black hover:text-white mt-3 text-black">For more details
              <svg className="pt-[2px] ps-[1px] forward-icon" width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.33203 7.50065L12.4987 3.33398L16.6654 7.50065" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M3.33203 16.6673H9.16536C10.0494 16.6673 10.8973 16.3161 11.5224 15.691C12.1475 15.0659 12.4987 14.218 12.4987 13.334V3.33398" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>  
            */}               </div>
            <div className="items-security">
              <h6 className=" font-semibold  ss:text-xl text-black">
                Public Address System
              </h6>
              <p className=" font-normal ss:text-[16px]	text-black text-justify">
                A public address system is an audio setup used to broadcast sound to a large audience.It's commonly found in public places like schools, stadiums, or transportation hubs. These systems can include microphones, amplifiers, and speakers, enabling clear and widespread communication.
              </p>
              {/* 
            <button className="font-medium text-[14px] py-2 inter normal-case forward-button2 flex border-black border-2 border-solid px-4 rounded-2xl md:py-1 md:rounded-3xl hover:bg-black hover:text-white mt-3 text-black">For more details
              <svg className="pt-[2px] ps-[1px] forward-icon" width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.33203 7.50065L12.4987 3.33398L16.6654 7.50065" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M3.33203 16.6673H9.16536C10.0494 16.6673 10.8973 16.3161 11.5224 15.691C12.1475 15.0659 12.4987 14.218 12.4987 13.334V3.33398" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>  
            */}               </div>
            <div className="items-security">
              <h6 className=" font-semibold  ss:text-xl text-black">
                Multi Apartment Video intercom system
              </h6>
              <p className=" font-normal ss:text-[16px]	text-black text-justify">
                A multi - apartment video intercom system is a security and communication system commonly used in residential buildings with multiple units.It allows residents to see and communicate with visitors at the entrance through video and audio communication, often using a combination of cameras, intercom units, and indoor monitors.This system enhances security and convenience, enabling residents to verify and grant access to visitors remotely.
              </p>
              {/* 
            <button className="font-medium text-[14px] py-2 inter normal-case forward-button2 flex border-black border-2 border-solid px-4 rounded-2xl md:py-1 md:rounded-3xl hover:bg-black hover:text-white mt-3 text-black">For more details
              <svg className="pt-[2px] ps-[1px] forward-icon" width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.33203 7.50065L12.4987 3.33398L16.6654 7.50065" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M3.33203 16.6673H9.16536C10.0494 16.6673 10.8973 16.3161 11.5224 15.691C12.1475 15.0659 12.4987 14.218 12.4987 13.334V3.33398" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>  
            */}
            </div>
          </div>
          <div className="flex flex-col gap-4 basis-1/2 reviewdelay2">
            <div className="items-security">
              <h6 className=" font-semibold  ss:text-xl text-black">
                Fire Alarm system
              </h6>
              <p className=" font-normal	ss:text-[16px] text-black text-justify">
                A fire alarm system is designed to detect and alert people to the presence of a fire in a building. It typically includes smoke detectors, heat detectors, alarm notification devices (like sirens or strobe lights), and a control panel. When smoke or heat is detected, the system triggers alarms to alert occupants, allowing them to evacuate safely and enabling a faster response from firefighters or emergency services. Fire alarm systems are crucial for early fire detection and life safety.
              </p>
              {/* 
            <button className="font-medium text-[14px] py-2 inter normal-case forward-button2 flex border-black border-2 border-solid px-4 rounded-2xl md:py-1 md:rounded-3xl hover:bg-black hover:text-white mt-3 text-black">For more details
              <svg className="pt-[2px] ps-[1px] forward-icon" width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.33203 7.50065L12.4987 3.33398L16.6654 7.50065" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M3.33203 16.6673H9.16536C10.0494 16.6673 10.8973 16.3161 11.5224 15.691C12.1475 15.0659 12.4987 14.218 12.4987 13.334V3.33398" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>  
            */}
            </div>
            <div className="items-security">
              <h6 className=" font-semibold ss:text-xl text-black">
                Automatic Gate Control System
              </h6>
              <p className="font-normal	ss:text-[16px] text-black text-justify">
                Boom barriers are physical security devices commonly used in parking lots, toll booths, or restricted access areas. They consist of a horizontal bar (the boom) that can be raised or lowered to control vehicle access. These barriers are typically automated and operated by a security personnel, access control system, or a remote control. They help manage vehicle entry and exit, enhancing security and traffic control in various environments.
              </p>
              {/* 
            <button className="font-medium text-[14px] py-2 inter normal-case forward-button2 flex border-black border-2 border-solid px-4 rounded-2xl md:py-1 md:rounded-3xl hover:bg-black hover:text-white mt-3 text-black">For more details
              <svg className="pt-[2px] ps-[1px] forward-icon" width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.33203 7.50065L12.4987 3.33398L16.6654 7.50065" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M3.33203 16.6673H9.16536C10.0494 16.6673 10.8973 16.3161 11.5224 15.691C12.1475 15.0659 12.4987 14.218 12.4987 13.334V3.33398" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>  
            */}
            </div>
            <div className="items-security">
              <h6 className=" font-semibold ss:text-xl text-black">
                Parking Guidance System
              </h6>
              <p className=" font-normal	ss:text-[16px] text-black text-justify">
                A parking guidance system is a technology used in parking facilities to assist drivers in finding available parking spaces efficiently. It typically involves sensors or cameras that monitor parking spaces, and LED displays or smartphone apps that guide drivers to open spots. This system helps reduce the time and frustration of searching for parking, improve traffic flow within parking areas, and enhance the overall parking experience for users.
              </p>
              {/* 
            <button className="font-medium text-[14px] py-2 inter normal-case forward-button2 flex border-black border-2 border-solid px-4 rounded-2xl md:py-1 md:rounded-3xl hover:bg-black hover:text-white mt-3 text-black">For more details
              <svg className="pt-[2px] ps-[1px] forward-icon" width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.33203 7.50065L12.4987 3.33398L16.6654 7.50065" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M3.33203 16.6673H9.16536C10.0494 16.6673 10.8973 16.3161 11.5224 15.691C12.1475 15.0659 12.4987 14.218 12.4987 13.334V3.33398" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>  
            */}
            </div>
          </div>
        </div>
      </div>
      {/* <Footer/> */}
    </>
  )
}