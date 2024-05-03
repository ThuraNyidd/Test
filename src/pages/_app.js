import React, { useEffect, useState } from "react";
import styles from "../styles/global.css";
import Head from "next/head";
import { useRouter } from 'next/router'
import Pagetransition from "../components/pagetransition/PageTransition";
import dynamic from 'next/dynamic'
import HomePage from "./Home";

export default function App({ Component, pageProps }) {
  // const [loading, setLoading] = useState(true);
  // const [start,setStart] = useState(false);
  // const router = useRouter();


  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, [1500]);
  // }, []);

  // useEffect(() => {
  //   setStart(true);
  //   const handleRouteChangeStart = (url) => {
  //     if (url !== router.asPath) {
  //       setLoading(true);
  //     }

  //   };

  //   const handleRouteChangeComplete = (url) => {
  //     if (url !== router.asPath) {
  //       setTimeout(() => {
  //         setLoading(false);
  //       }, [1500]);
  //     }
  //   };

  //   router.events.on("routeChangeStart", handleRouteChangeStart);
  //   router.events.on("routeChangeComplete", handleRouteChangeComplete);

  //   // Clean up the event listeners when the component unmounts
  //   return () => {
  //     router.events.off("routeChangeStart", handleRouteChangeStart);
  //     router.events.off("routeChangeComplete", handleRouteChangeComplete);
  //   };
  // }, []);

 
 


  return (
    <>
      <Head>
        <title>Smilax Global </title>
        <link rel="icon" href="/logo.svg" />
        <meta name="description" content="Smilax Global Co.,Ltd." />
        <meta name="keywords" content="Web Design and Development,Customized Web Solutions,Human Resource Management System,
     Domain and Hosting,Mobile Applications Development,Internet Marketing Services,Security Solutions,Access Control Solutions,
     Surveillance System,Elevator Access Control System,Public Address System,Multi Apartment Video Intercom System,
     Fire Alarm System,Automatic Gate Control and Parking Guidance System,Software Solutions,Web Solutions,Security Solutions,Support & Training,
     Enterprise Solutions,Outsourced Applications,Website Development,Domain & Hosting,Web Hosting Packages,Technical Support Services,
     Email Support Services,Information Technology,Business Consulting Service,HR,Time & Attendance,Payroll,Car Parking Solution,Call Centre Solution,
     IP PBX,Call Centre Dialer,Video Conferencing,IVR,Voice Logger,GSM Gateway,Access Control,Guard Patrol System,Web Development,Customised Web Solution,
     Content Management System,E-Commerce Solution,Payment Gateway Integration Solution,E-mail Marketing Solution,Web Portals,Database Driven Web Application,
     Consultation,Project Proposal,Design Interview,Design Production & Revisions,Set up the CMS,Add Content / Do Layout Work and Do Any Programming,
     First Draft Proofing & Revisions,Site Launch,Post Launch Work"/>
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Smilax Global Co.,Ltd." />
        <link rel="canonical" href="https://smilaxglobal.com" />
      </Head>

      {/* <Component {...pageProps} /> */}

      <Component {...pageProps}/>
     

      {/* {loading ? (
        <>
          <div className="h-full w-full flex-1 -mt-36 ">
            <Pagetransition />
          </div>
        </>
      ) : (
        <Component {...pageProps} />
       )} */}
    </>
  );
}
