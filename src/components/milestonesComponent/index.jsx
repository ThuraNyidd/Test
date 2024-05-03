'use client'
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from "react";
export default function MilestonesComponent() {


  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800
    });
  }, []);
  return (
    <>
      <div className="mb-12  mt-[86px] sm:mt-[118px] inter text-black">
        <div className=" mb-4  px-4 ss:px-4 lg:px-16 ">
          <h1 className="rany text-4xl font-semibold lg:text-7xl callcenter-h1 text-black italic ">
            Proudly Moving Forward
          </h1>
          <p className=" inter lg:text-[16px] sm:mt-[26px] mt-[21px] callcenter-para text-justify font-normal">Proudly moving forward is what we do best here at Smilax Global. Our unwavering commitment to innovation and progress has allowed us to achieve countless milestones throughout our company&apos;s history. Our journey towards success has been filled with challenges and obstacles, but we have never been deterred. Instead, we have used each hurdle as an opportunity to learn, grow, and evolve.
            We are thrilled to share with you the moments that we have proud :</p>
        </div>
        <section className="timeline">
          <ul>
            <li>
              <div className='text-black ' data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"  >
                <time>2012</time> Founded in Yangon Myanmar
              </div>
            </li>
            <li>
              <div className='text-black ' data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine" >
                <time>2012</time> HRMS - Human Resource Management System Windows Version
              </div>
            </li>
            <li>
              <div className='text-black' data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine" >
                <time>2013</time> Capex System - (Capital Expendure Management System)
              </div>
            </li>
            <li>
              <div className='text-black' data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine">
                <time>2014</time> SIM - Shipping Import Management System
              </div>
            </li>
            <li>
              <div className='text-black' data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine" >
                <time>2015</time> Smilax HR - Self Service HR System in the Cloud
              </div>
            </li>
            <li>
              <div className='text-black' data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine" >
                <time>2016</time> Call Centre and Ticketing System
              </div>
            </li>
            <li>
              <div className='text-black' data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine" >
                <time>2017</time>Business Security Systems
              </div>
            </li>
            <li>
              <div className='text-black' data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine" >
                <time>2018</time> Smilax CRM - Customer Relationship Management System
              </div>
            </li>
            <li>
              <div className='text-black' data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine">
                <time>2019</time>Cryon - Asset Management System
              </div>
            </li>
            <li>
              <div className='text-black' data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine" >
                <time>2020</time> Bots, Ticketing and Omni Channel All In One Solution
              </div>
            </li>

            <li>
              <div className='text-black' data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine" >
                <time>2022</time>LMS - Learning Management System
              </div>
            </li>

            {/* <li>
      <div className='text-black'  data-aos="fade-right"
   data-aos-offset="300"
     data-aos-easing="ease-in-sine" >
        <time>2023</time>Smilax HR Mobile Application - Written in Android and iOS 
      </div>
    </li>
    <li>
      <div className='text-black'  data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
        <time>2023</time> Smilax HR Version 2
      </div>
    </li>
  */}
          </ul>
        </section>



      </div>
    </>
  )
}