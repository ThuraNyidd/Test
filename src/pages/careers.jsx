import FooterCurve from '../components/FooterCurve'
import Footer from '../components/footer/Footer'
import Menu from '../components/menu/Menu'
import CareersComponent from '../components/careersComponent'
import React from 'react'
import Head from 'next/head'
export default function Careers() {
  return (
    <>
      {/* <Head>
    <title>Careers</title>
    <meta name="description" content="Smilax Global Co.,Ltd."/>
    <meta name="keywords" content="Aung Khine Tun, Aung Tun, Zarchi Khin Kyaw, Smilax Global, 
Professional, Professional Service, Magic, Developers, Business Development,
Marketing, Human Resource, Admin, Web Developers, IT, Security, Designer"/>
    </Head> */}
      <Head>
        <title>Careers at Smilax Global Co.,Ltd. - Join Our Team</title>
        <meta name="description" content="Explore exciting career opportunities at Smilax Global Co.,Ltd." />
        <meta name="keywords" content="Careers, Smilax Global, Professional Service, Business Development, Marketing, Human Resource, Web Developers, IT, Security, Designer" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Smilax Global Co.,Ltd." />
        <link rel="canonical" href="https://smilaxglobal.com/careers" />
      </Head>
      <Menu />
      <CareersComponent />
      <FooterCurve />
      <Footer />
    </>
  )
}
