'use client'
import { useEffect, useState } from 'react';
import FooterCurve from '../components/FooterCurve'
import Footer from '../components/footer/Footer'
import React from 'react'
import Menu from '../components/menu/Menu'
import AboutUsComponent from '../components/aboutusComponent'
import Head from 'next/head';

export default function AboutUs() {

  return (
    <>
      {/* <Head>
        <title>About Us</title>
        <meta name="description" content="Smilax Global Co.,Ltd." />
        <meta name="keywords" content="Aung Khine Tun, Aung Tun, Zarchi Khin Kyaw, Smilax Global, 
Professional, Professional Service, Magic, Developers, Business Development,
Marketing, Human Resource, Admin, Web Developers, IT, Security, Designer"/>
      </Head> */}
      <Head>
        <title>About Us - Smilax Global Co.,Ltd.</title>
        <meta name="description" content="Learn about Smilax Global Co.,Ltd and our professional services." />
        <meta name="keywords" content="Smilax Global, Professional Service, Business Development, Marketing, Human Resource, Web Developers, IT, Security, Designer" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Smilax Global Co.,Ltd." />
        <link rel="canonical" href="https://smilaxglobal.com/about-us" />
      </Head>
      <Menu />
      <AboutUsComponent />
      <FooterCurve />
      <Footer />
    </>
  )
}
