import Footer from '../components/footer/Footer'
import Menu from '../components/menu/Menu'
import SoftwareSolutionComponent from '../components/softwareSolutionComponent'
import React from 'react'
import FooterCurve from '../components/FooterCurve'
import Head from 'next/head'
export default function SoftwareSolutions() {
  return (
    <>
      {/* <Head>
        <title>Software Solution</title>
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
        <title>Software Solutions - Smilax Global Co.,Ltd.</title>
        <meta name="description" content="Discover our comprehensive software solutions and services at Smilax Global Co.,Ltd." />
        <meta name="keywords" content="Software Solutions, Web Design and Development, Customized Web Solutions, HR Management System, Domain and Hosting, Mobile Applications Development, Internet Marketing Services, Security Solutions, Access Control Solutions, Surveillance System, Elevator Access Control System, Public Address System, Multi Apartment Video Intercom System, CRM, Ticketing, Omni Channel, Fire Alarm System, Automatic Gate Control, Parking Guidance System, Web Development, Enterprise Solutions, Outsourced Applications, Website Development, Domain & Hosting, Web Hosting Packages, Technical Support Services, Email Support Services, Information Technology, Business Consulting Service, Time & Attendance, Payroll, Car Parking Solution, Call Centre Solution, IP PBX, Voice Logger, GSM Gateway, Access Control, Guard Patrol System, Customized Web Solution, Content Management System, E-Commerce Solution, Payment Gateway Integration, Email Marketing Solution, Web Portals, Database Driven Web Application, Consultation, Project Proposal, Design, CMS Setup, SmilaxHR, Smilax, Human Resource, Site Launch, Post Launch Work" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Smilax Global Co.,Ltd." />
        <link rel="canonical" href="https://smilaxglobal.com/software-solutions" />
      </Head>
      <Menu />
      <SoftwareSolutionComponent />
      <FooterCurve />
      <Footer />
    </>
  )
}
