import FooterCurve from '../components/FooterCurve'
import Footer from '../components/footer/Footer'
import Menu from '../components/menu/Menu'
import CallCenterComponent from '../components/callcentreComponent'
import React from 'react'
import Head from 'next/head'
export default function CallCenterandCRM() {
  return (
    <>
      {/* <Head>
        <title>Call Centre & CRM Solutions</title>
        <meta name="description" content="Smilax Global Co.,Ltd." />
        <meta name="keywords" content="Web Design and Development,Customized Web Solutions,Human Resource Management System,
     Domain and Hosting,Mobile Applications Development,Internet Marketing Services,Security Solutions,Access Control Solutions,
     Surveillance System,Elevator Access Control System,Public Address System,Multi Apartment Video Intercom System,CRM, Ticketing, Omni Channel,
     Fire Alarm System,Automatic Gate Control and Parking Guidance System,Software Solutions,Web Solutions,Security Solutions,Support & Training,
     Enterprise Solutions,Outsourced Applications,Website Development,Domain & Hosting,Web Hosting Packages,Technical Support Services,
     Email Support Services,Information Technology,Business Consulting Service,HR,Time & Attendance,Payroll,Car Parking Solution,Call Centre Solution,
     IP PBX,Call Centre Dialer,Video Conferencing,IVR,Voice Logger,GSM Gateway,Access Control,Guard Patrol System,Web Development,Customised Web Solution,
     Content Management System,E-Commerce Solution,Payment Gateway Integration Solution,E-mail Marketing Solution,Web Portals,Database Driven Web Application,
     Consultation,Project Proposal,Design Interview,Design Production & Revisions,Set up the CMS,Add Content / Do Layout Work and Do Any Programming,SmilaxHR, Smilax, Human Resource,
     First Draft Proofing & Revisions,Site Launch,Post Launch Work"/>
      </Head> */}
      <Head>
        <title>Call Centre & CRM Solutions - Smilax Global Co.,Ltd.</title>
        <meta name="description" content="Smilax Global Co.,Ltd. offers comprehensive services, including Web Design, CRM, Security Solutions, and more. Contact us for expert IT solutions." />
        <meta name="keywords" content="Call Centre, CRM Solutions, Web Design, Customized Web Solutions, Security Solutions, Smilax Global Co.,Ltd." />
      </Head>

      <Menu />
      <CallCenterComponent />
      <FooterCurve />
      <Footer /></>

  )
}
