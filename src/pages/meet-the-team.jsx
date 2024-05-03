import React from 'react'
import Menu from '../components/menu/Menu';
import FooterCurve from '../components/FooterCurve';
import Footer from '../components/footer/Footer';
import MeetTeamComponent from '../components/meetteamComponent'
import Head from 'next/head';
export default function MeetTheTeam() {
  return (
    <>
      {/* <Head>
        <title>Meet the team</title>
        <meta name="description" content="Smilax Global Co.,Ltd." />
        <meta name="keywords" content="Aung Khine Tun, Aung Tun, Zarchi Khin Kyaw, Smilax Global, 
Professional, Professional Service, Magic, Developers, Business Development,
Marketing, Human Resource, Admin, Web Developers, IT, Security, Designer"/>
      </Head> */}
      <Head>
        <title>Meet the Team - Smilax Global Co.,Ltd.</title>
        <meta name="description" content="Learn about the talented team at Smilax Global Co.,Ltd." />
        <meta name="keywords" content="Meet the Team, Smilax Global, Professional Service, Business Development, Marketing, Human Resource, Web Developers, IT, Security, Designer" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Smilax Global Co.,Ltd." />
        <link rel="canonical" href="https://smilaxglobal.com/meet-the-team" />
      </Head>
      <Menu />
      <MeetTeamComponent />
      <FooterCurve />
      <Footer />
    </>
  )
}
