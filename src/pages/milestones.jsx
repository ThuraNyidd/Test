import FooterCurve from '../components/FooterCurve'
import Footer from '../components/footer/Footer'
import Menu from '../components/menu/Menu'
import MilestonesComponent from '../components/milestonesComponent'
import React from 'react'
import Head from 'next/head'
export default function Milestones() {
  return (
    <>
      {/* <Head>
        <title>Milestone</title>
        <meta name="description" content="Smilax Global Co.,Ltd." />
        <meta name="keywords" content="Aung Khine Tun, Aung Tun, Zarchi Khin Kyaw, Smilax Global, 
Professional, Professional Service, Magic, Developers, Business Development,
Marketing, Human Resource, Admin, Web Developers, IT, Security, Designer"/>
      </Head> */}
      <Head>
        <title>Company Milestones - Smilax Global Co.,Ltd.</title>
        <meta name="description" content="Explore the significant milestones achieved by Smilax Global Co.,Ltd." />
        <meta name="keywords" content="Company Milestones, Smilax Global, Professional Service, Business Development, Marketing, Human Resource, Web Developers, IT, Security, Designer" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Smilax Global Co.,Ltd." />
        <link rel="canonical" href="https://smilaxglobal.com/milestones" />
      </Head>
      <Menu />
      <MilestonesComponent />
      <FooterCurve />
      <Footer />
    </>
  )
}
