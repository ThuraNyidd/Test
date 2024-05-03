import FooterCurve from '../components/FooterCurve'
import Footer from '../components/footer/Footer'
import Menu from '../components/menu/Menu'
import ReviewsComponent from '../components/reviewsComponent'
import React from 'react'
import Head from 'next/head'
export default function Reviews() {
  return (
    <>
      {/* <Head>
        <title>Reviews</title>
        <meta name="description" content="Smilax Global Co.,Ltd." />
        <meta name="keywords" content="Aung Khine Tun, Aung Tun, Zarchi Khin Kyaw, Smilax Global, 
Professional, Professional Service, Magic, Developers, Business Development,
Marketing, Human Resource, Admin, Web Developers, IT, Security, Designer"/>
      </Head> */}
      <Head>
        <title>Client Reviews - Smilax Global Co.,Ltd.</title>
        <meta name="description" content="Read what our clients have to say about Smilax Global Co.,Ltd.'s professional services." />
        <meta name="keywords" content="Client Reviews, Smilax Global, Professional Service, Business Development, Marketing, Human Resource, Web Developers, IT, Security, Designer" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Smilax Global Co.,Ltd." />
        <link rel="canonical" href="https://smilaxglobal.com/reviews" />
      </Head>
      <Menu />
      <ReviewsComponent />
      <FooterCurve />
      <Footer />
    </>
  )
}
