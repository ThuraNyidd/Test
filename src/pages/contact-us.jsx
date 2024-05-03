import Menu from "../components/menu/Menu";
import ContactComponent from '../components/contactComponent'
import Footer from "../components/footer/Footer";
import FooterCurve from "../components/FooterCurve";
import Head from "next/head";
export default function Contact() {

  return (
    <>
      {/* <Head>
        <title>Contact Us</title>
        <meta name="description" content="Smilax Global Co.,Ltd." />
        <meta name="keywords" content="Aung Khine Tun, Aung Tun, Zarchi Khin Kyaw, Smilax Global, 
Professional, Professional Service, Magic, Developers, Business Development,
Marketing, Human Resource, Admin, Web Developers, IT, Security, Designer"/>
      </Head> */}
      <Head>
        <title>Contact Smilax Global Co.,Ltd. - Get in Touch</title>
        <meta name="description" content="Contact Smilax Global Co.,Ltd. for professional services and inquiries." />
        <meta name="keywords" content="Contact, Smilax Global, Professional Service, Business Development, Marketing, Human Resource, Web Developers, IT, Security, Designer" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Smilax Global Co.,Ltd." />
        <link rel="canonical" href="https://smilaxglobal.com/contact-us" />
      </Head>
      <Menu />
      <ContactComponent />
      <FooterCurve />
      <Footer />
    </>
  )
}